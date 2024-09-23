<template>
  <div class="admin-page m-auto h-full">
    <h1 class="my-4 text-xl">판타지 리그 서비스 등록</h1>
    <h3 class="text-gray-600 text-sm">(새로고침하면 데이터 날라감)</h3>
    
    <!-- Step 1: Register Service -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 1">
      <div class="w-64"> 
        <h2>Step 1: 서비스 이름</h2>
      </div>
      <input v-model="serviceName" placeholder="서비스 이름">
      <button class="mt-12 mb-40 mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
        @click="registerService">
        서비스 저장하기
      </button>
    </div>

    <!-- Step 2: Register Player Positions -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 2">
      <div class="w-64"> 
        <h2>Step 2: 선수 포지션 종류 등록하기</h2>
      </div>
      <input v-model="positionName" placeholder="포지션 이름">
      <button class="my-4 border-2 border-gray-500 rounded-xl py-2 px-12" @click="addPosition">포지션 추가</button>
      <ul class="my-12 ">
        <li v-for="(position, index) in positions" :key="index">
          {{ position }}
        </li>
      </ul>
      <button class="mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
        @click="registerPositions">
        포지션 저장하기
      </button>
    </div>

    <!-- Step 3: Register Metric Names -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 3">
      <div class="w-[960px] flex flex-col"> 
        <h2>Step 3: 지표 이름 등록하기</h2>
        <div class="flex my-12">
          <input v-model="metricName" placeholder="지표 이름">
          <button class="ml-auto border-2 border-gray-500 rounded-xl py-2 px-12" 
            @click="addMetricName">
            지표 이름 추가
          </button>
        </div>
        <ul class="my-4 mx-auto">
          <li v-for="metric in metricNames" :key="metric.id">
            {{ metric.name }} (ID: {{ metric.id }})
          </li>
        </ul>
      </div>
      <button class="mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
        @click="registerMetricNames">
        지표 이름 저장하기
      </button>
    </div>

    <!-- Step 4: Register Metric Scores and Positions -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 4">
      <div class="w-[960px] flex flex-col"> 
        <h2>Step 4: 지표 점수 및 포지션 등록하기</h2>
        <div class="flex flex-col my-12">
          <select v-model="selectedMetricId" class="mb-4">
            <option value="" disabled selected>지표 선택</option>
            <option v-for="metric in metricNames" :key="metric.id" :value="metric.id">
              {{ metric.name }}
            </option>
          </select>
          <input v-model.number="metricScore" type="number" placeholder="지표 점수">
          <select v-model="selectedPosition" class="mt-4">
            <option value="" disabled selected>포지션 선택</option>
            <option v-for="position in positions" :key="position">
              {{ position }}
            </option>
          </select>
          <button class="mt-4 border-2 border-gray-500 rounded-xl py-2 px-12" 
            @click="addMetricScore">
            지표 정보 추가
          </button>
        </div>
        <ul class="my-4 mx-auto">
          <li v-for="(metric, index) in metricScores" :key="index">
            {{ getMetricName(metric.id) }} - 점수: {{ metric.score }}, 포지션: {{ metric.position }}
          </li>
        </ul>
      </div>
      <button class="mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
        @click="registerMetricScores">
        지표 정보 저장하기
      </button>
    </div>

    <!-- Step 5: Register Teams -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 5">
      <div class="w-64"> 
        <h2>Step 5: 클럽 등록하기</h2>
      </div>
      <input v-model="teamName" placeholder="팀이름">
      <button @click="addTeam">Add Team</button>
      <ul>
        <li v-for="(team, index) in teams" :key="index">
          {{ team }}
        </li>
      </ul>
      <button class="mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
        @click="registerTeams">
        클럽 저장하기
      </button>
    </div>

    <!-- Completion Message -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 6">
      <h2>모든 등록이 완료되었습니다!</h2>
      <p>등록된 정보:</p>
      <pre>{{ JSON.stringify(registeredData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      serviceName: '',
      productId: null,
      positionName: '',
      positions: [],
      metricName: '',
      metricScore: 0,
      metricNames: [],
      selectedMetricId: '',
      selectedPosition: '',
      metricScores: [],
      teamName: '',
      teams: [],
      registeredData: {},
    };
  },
  methods: {
    registerService() {
      this.productId = Math.floor(Math.random() * 1000) + 1;
      this.registeredData.service = { name: this.serviceName, id: this.productId };
      this.currentStep = 2;
    },
    addPosition() {
      if (this.positionName) {
        this.positions.push(this.positionName);
        this.positionName = '';
      }
    },
    registerPositions() {
      this.registeredData.positions = [...this.positions];
      this.currentStep = 3;
    },
    addMetricName() {
      if (this.metricName) {
        const newMetric = { id: Date.now(), name: this.metricName };
        this.metricNames.push(newMetric);
        this.metricName = '';
      }
    },
    registerMetricNames() {
      this.registeredData.metricNames = [...this.metricNames];
      this.currentStep = 4;
    },
    addMetricScore() {
      if (this.selectedMetricId && this.metricScore && this.selectedPosition) {
        this.metricScores.push({
          id: this.selectedMetricId,
          score: this.metricScore,
          position: this.selectedPosition
        });
        this.selectedMetricId = '';
        this.metricScore = 0;
        this.selectedPosition = '';
      }
    },
    registerMetricScores() {
      this.registeredData.metricScores = [...this.metricScores];
      this.currentStep = 5;
    },
    getMetricName(id) {
      const metric = this.metricNames.find(m => m.id === id);
      return metric ? metric.name : 'Unknown';
    },
    addTeam() {
      if (this.teamName) {
        this.teams.push(this.teamName);
        this.teamName = '';
      }
    },
    registerTeams() {
      this.registeredData.teams = [...this.teams];
      this.currentStep = 6;
    },
  },
};
</script>

<style scoped>
.admin-page {
  max-width: 960px;
  padding: 20px;
}

input {
  margin: 10px 2px;
  padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>