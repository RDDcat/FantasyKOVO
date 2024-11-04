<template>
  <!-- 메인 페이지 팀 등록 -->
  <div class="flex-col items-center">
    <!-- 팀이 들어갈 수 있는 지도 -->
    <div class="relative mx-auto desktop:w-[800px] mb-12">
      <!-- 지도 -->
      <TransitionGroup name="blur-in" tag="div" appear>
        <img
          v-if="showMap"
          key="map-image"
          class="aspect-square object-cover mobile:w-full desktop:w-[800px] z-0"
          src="@/assets/stadium.jpg"
          alt=""
        />
      </TransitionGroup>
      <!-- 포지션 -->
      <TransitionGroup name="fade-up" tag="div" appear>
        <template v-if="showPositions">
          <div
            v-for="(position, index) in positions"
            :key="index"
            class="position-item absolute z-10 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600"
            :class="position.class"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <img
              v-if="selectedPlayers[index]"
              :src="selectedPlayers[index].img"
              class="w-full h-full object-cover rounded-full"
              :alt="selectedPlayers[index].name"
            />
          </div>
        </template>
      </TransitionGroup>
    </div>
    <!-- 상단 섹션 스켈레톤 -->
    <div class="h-[800px]" v-if="!showMap"></div>

    <!-- 제출하기 버튼 -->
    <div class="w-full flex mb-6">
      <button
        @click="
          saveTeam();
          openMailingPage();
        "
        class="mt-4 mx-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        사전등록하기
      </button>
    </div>

    <!-- 필터 버튼 섹션 -->
    <div class="mb-6 flex flex-wrap justify-center gap-2">
      <button
        @click="selectRandomPlayers"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        랜덤 추천
      </button>
      <button
        v-for="team in teams"
        :key="team"
        @click="filterPlayers('team', team)"
        class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        :class="{ 'bg-blue-500 text-white': activeFilters.team === team }"
      >
        {{ team }}
      </button>
      <button
        v-for="position in filterPositions"
        :key="position.name"
        @click="filterPlayers('position', position.name)"
        class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        :class="{
          'bg-blue-500 text-white': activeFilters.position === position.name,
        }"
      >
        {{ position.name }}
      </button>
    </div>

    <!-- 선수 리스트 -->
    <!-- 선수 카드 섹션 -->
    <h2 class="desktop:text-3xl mobile:text-2xl font-bold mb-6 text-center">
      선수를 선택해주세요
    </h2>
    <div class="grid grid-cols-6 gap-4 p-20 mobile:grid-cols-2 mobile:p-4">
      <!-- 선수 카드 -->
      <div
        v-for="(player, index) in filteredPlayers"
        :key="index"
        class="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        :class="{ 'shadow-2xl ring-4 ring-blue-600': isPlayerSelected(player) }"
        @click.stop="togglePlayerSelection(player)"
      >
        <img :src="player.img" class="w-full aspect-square object-cover" />
        <!-- 선수 즐겨찾기 -->
        <div
          class="absolute top-4 right-4 z-10"
          @click.stop="toggleLikePlayer(player.id)"
        >
          <i
            v-if="isPlayerLiked(player.id)"
            class="fa-solid fa-stars"
            style="color: #ffd43b"
          ></i>
          <i v-else class="fa-regular fa-stars"></i>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-2">{{ player.name }}</h3>
          <p class="flex text-gray-600">
            {{ player.position.name }}
            <img class="w-4" :src="player.position.img" />
          </p>
          <p class="text-gray-600 text-xs">{{ player.team.name }}</p>
        </div>
      </div>
    </div>

    <div class="h-96"></div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useCacheStore } from "@/stores/cacheStore";
import { useModalStore } from "@/stores/modalStore";
import { usePersistStore } from "@/stores/persistStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const cacheStore = useCacheStore();
    const modalStore = useModalStore();
    const persistStore = usePersistStore();
    const router = useRouter();

    const displayedPlayers = ref([]);
    const selectedPlayers = ref([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    const showPositions = ref(false);
    const showMap = ref(false);
    const activeFilters = ref({ team: null, position: null });
    const positions = [
      {
        class:
          "mobile:top-20 mobile:left-[22%] mobile:w-12 mobile:h-12 desktop:top-56 desktop:left-[22%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-20 mobile:left-[45%] mobile:w-12 mobile:h-12 desktop:top-56 desktop:left-[45%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-20 mobile:left-[68%] mobile:w-12 mobile:h-12 desktop:top-56 desktop:left-[68%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-48 mobile:left-[22%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[22%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-48 mobile:left-[45%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[45%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-48 mobile:left-[68%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[68%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-[18rem] mobile:left-[20%] mobile:w-12 mobile:h-12 desktop:top-[620px] desktop:left-[20%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-[18rem] mobile:left-[36%] mobile:w-12 mobile:h-12 desktop:top-[620px] desktop:left-[36%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-[18rem] mobile:left-[54%] mobile:w-12 mobile:h-12 desktop:top-[620px] desktop:left-[54%] desktop:w-24 desktop:h-24",
      },
      {
        class:
          "mobile:top-[18rem] mobile:left-[70%] mobile:w-12 mobile:h-12 desktop:top-[620px] desktop:left-[70%] desktop:w-24 desktop:h-24",
      },
    ];

    // 팀과 포지션 목록 추출
    const teams = computed(() => [
      ...new Set(cacheStore.players.map((player) => player.team.name)),
    ]);
    const filterPositions = computed(() => {
      const uniquePositions = new Set(
        cacheStore.players.map((player) => player.position.name)
      );
      return Array.from(uniquePositions).map((name) => ({
        name,
        img: cacheStore.players.find((player) => player.position.name === name)
          .position.img, // img도 가져오기
      }));
    });

    const filteredPlayers = computed(() => {
      let players = displayedPlayers.value;

      if (activeFilters.value.team) {
        players = players.filter(
          (player) => player.team.name === activeFilters.value.team
        );
      }

      if (activeFilters.value.position) {
        players = players.filter(
          (player) => player.position.name === activeFilters.value.position
        );
      }

      return players;
    });

    const filterPlayers = (type, value) => {
      // 필터 값이 이미 선택된 경우 제거
      if (activeFilters.value[type] === value) {
        activeFilters.value[type] = null;
      } else {
        // 새 필터 값을 설정
        activeFilters.value[type] = value;
      }

      // 필터가 변경될 때마다 필터링된 선수 목록 업데이트
      updateFilteredPlayers();
    };

    const updateFilteredPlayers = () => {
      // 초기화
      displayedPlayers.value = [...cacheStore.players];

      if (activeFilters.value.team) {
        displayedPlayers.value = displayedPlayers.value.filter(
          (player) => player.team.name === activeFilters.value.team
        );
      }

      if (activeFilters.value.position) {
        displayedPlayers.value = displayedPlayers.value.filter(
          (player) => player.position.name === activeFilters.value.position
        );
      }
    };

    const selectRandomPlayers = () => {
      const shuffled = [...cacheStore.players].sort(() => 0.5 - Math.random());
      displayedPlayers.value = shuffled.slice(0, 20);
      activeFilters.value = { team: null, position: null };
    };

    const isPlayerSelected = computed(() => (player) => {
      return selectedPlayers.value.includes(player);
    });

    const togglePlayerSelection = (player) => {
      const index = selectedPlayers.value.indexOf(player);
      if (index !== -1) {
        // 이미 선택된 선수라면 제거
        selectedPlayers.value[index] = null;
      } else {
        // 선택되지 않은 선수라면 빈 자리에 추가
        const emptyIndex = selectedPlayers.value.findIndex((p) => p === null);
        if (emptyIndex !== -1) {
          selectedPlayers.value[emptyIndex] = player;
        }
      }
    };

    const toggleLikePlayer = (id) => {
      if (typeof id === "undefined") {
        console.error("Invalid ID:", id);
        return;
      }

      if (!persistStore.likePlayerList) {
        persistStore.likePlayerList = {};
      }

      if (persistStore.likePlayerList[id]) {
        delete persistStore.likePlayerList[id];
      } else {
        persistStore.likePlayerList[id] = true;
      }
    };

    const isPlayerLiked = (id) => {
      const likeList = persistStore.likePlayerList || {};
      return !!likeList[id];
    };

    const saveTeam = () => {
      // 선택된 선수들을 persistStore에 저장
      persistStore.selectedTeam = selectedPlayers.value.map((p) =>
        p ? p.id : null
      );
    };

    const openMailingPage = () => {
      router.push("/mailing");
    };

    onMounted(() => {
      selectRandomPlayers();
      setTimeout(() => {
        showMap.value = true;
      }, 100);
      setTimeout(() => {
        showPositions.value = true;
      }, 600);
    });

    return {
      cacheStore,
      modalStore,
      persistStore,
      displayedPlayers,
      selectedPlayers,
      positions,
      filterPositions,
      showPositions,
      showMap,
      isPlayerSelected,
      toggleLikePlayer,
      togglePlayerSelection,
      selectRandomPlayers,
      isPlayerLiked,
      saveTeam,
      openMailingPage,
      teams,
      filteredPlayers,
      activeFilters,
      filterPlayers,
    };
  },
};
</script>

<style scoped>
.blur-in-enter-active,
.blur-in-appear-active {
  animation: blur-in 0.5s ease-out both;
}

@keyframes blur-in {
  from {
    opacity: 0;
    filter: blur(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

.fade-up-enter-active,
.fade-up-appear-active {
  animation: fade-up 0.5s ease-out both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.position-item {
  transition: background-color 0.3s ease;
}

.position-item:hover {
  background-color: #4b5563;
}
</style>
