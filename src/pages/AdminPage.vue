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

    <!-- Step 3: Register Player Metrics -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 3">
        <div class="w-[960px] flex flex-col"> 
            <h2>Step 3: 지표 등록하기</h2>
            <div class="flex my-12">
                <input v-model="metricName" placeholder="지표 이름">
                <input v-model="metricScore" type="number" placeholder="Score">
                <button class="ml-auto border-2 border-gray-500 rounded-xl py-2 px-12" 
                    @click="addMetric">
                    지표 추가
                </button>
            </div>
            <ul class="my-4 mx-auto">
                <li v-for="(metric, index) in metrics" :key="index">
                    {{ metric.name }}: {{ metric.score }}
                </li>
            </ul>
        </div>
        <button class="mx-auto border-2 w-64 h-12 border-red-500 rounded-xl hover:bg-red-100" 
            @click="registerMetrics">
            지표 저장하기
        </button>
    </div>

    <!-- Step 4: Register Teams -->
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 4">
        <div class="w-64"> 
            <h2>Step 4: 클럽 등록하기</h2>
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
    <div class="relative w-full flex flex-col mt-10 mb-72 justify-center items-center" v-if="currentStep === 5">
        <h2>모든 등록이 완료되었습니다!</h2>
        <p></p>
    </div>
</div>
</template>

<script>
// import axios from 'axios';

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
        metrics: [],
        teamName: '',
        teams: [],
    };
    },
    methods: {
        async registerService() {
            // try {
            //     const response = await axios.post('/api/register-service', { name: this.serviceName });
            //     this.productId = response.data.productId;
            //     this.currentStep = 2;
            // } catch (error) {
            //     console.error('Error registering service:', error);
            // }
            this.currentStep = 2;
        },
        addPosition() {
            if (this.positionName) {
                this.positions.push(this.positionName);
                this.positionName = '';
            }
        },
        async registerPositions() {
            // try {
            //     await axios.post('/api/register-positions', {
            //     productId: this.productId,
            //     positions: this.positions
            //     });
            //     this.currentStep = 3;
            // } catch (error) {
            //     console.error('Error registering positions:', error);
            // }
            this.currentStep = 3;
        },
        addMetric() {
            if (this.metricName && this.metricScore) {
                this.metrics.push({ name: this.metricName, score: this.metricScore });
                this.metricName = '';
                this.metricScore = 0;
            }
        },
        async registerMetrics() {
            // try {
            //     await axios.post('/api/register-metrics', {
            //     productId: this.productId,
            //     metrics: this.metrics
            //     });
            //     this.currentStep = 4;
            // } catch (error) {
            //     console.error('Error registering metrics:', error);
            // }
            this.currentStep = 4;
        },
        addTeam() {
            if (this.teamName) {
                this.teams.push(this.teamName);
                this.teamName = '';
            }
        },
        async registerTeams() {
            // try {
            //     await axios.post('/api/register-teams', {
            //     productId: this.productId,
            //     teams: this.teams
            //     });
            //     this.currentStep = 5;
            // } catch (error) {
            //     console.error('Error registering teams:', error);
            // }
            this.currentStep = 5;
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