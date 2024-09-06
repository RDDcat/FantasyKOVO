<template>
<!-- 메인 페이지 팀 등록 -->    
<div class="flex-col items-center">
    <!-- 팀이 들어갈 수 있는 지도 -->
    <div class="relative mx-auto desktop:w-[800px] mb-12">
        <!-- 지도 -->
        <img class="aspect-square 
            mobile:w-full 
            desktop:w-[800px] z-0" src="@/assets/court.png" alt="">
        <!-- 포지션 -->
        <div v-for="(position, index) in positions" :key="index"
            class="absolute z-10 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600"
            :class="position.class">
            <img v-if="selectedPlayers[index]" 
                :src="selectedPlayers[index].img" 
                class="w-full h-full object-cover rounded-full" 
                :alt="selectedPlayers[index].name">
        </div>
    </div>

    <!-- 선수 리스트 -->
    <!-- 선수 카드 섹션 -->
    <h2 class="text-3xl font-bold mb-6 text-center">선수를 선택해주세요</h2>
    <div class="grid grid-cols-4 gap-4 p-20
                mobile:grid-cols-2 mobile:p-4 ">
        <!-- 선수 카드 -->
        <div v-for="(player, index) in displayedPlayers" :key="index"
            class="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            :class="{ 'shadow-2xl ring-4 ring-blue-600': isPlayerSelected(player) }"
            @click.prevent="togglePlayerSelection(player)">
            <img :src="player.img" 
                class="w-full aspect-square object-cover"/>
            <!-- 선수 즐겨찾기 -->
            <div class="absolute top-4 right-4 z-10" @click.prevent="toggleLikePlayer(player.id)">
                <i v-if="isPlayerLiked(player.id)" class="fa-solid fa-stars" style="color: #FFD43B;"></i>
                <i v-else class="fa-regular fa-stars"></i>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">{{player.name}}</h3>
                <p class="text-gray-600">{{player.position}}</p>
                <p class="text-gray-600">{{player.team.name}}</p>
            </div>
        </div>
    </div>

    <div class="h-96"></div>
</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCacheStore } from '@/stores/cacheStore'
import { useModalStore } from '@/stores/modalStore'
import { usePersistStore } from '@/stores/persistStore'

export default {
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const persistStore = usePersistStore()

        const displayedPlayers = ref([])
        const selectedPlayers = ref([null, null, null, null, null, null])

        const positions = [
            { class: 'mobile:top-16 mobile:left-[22%] mobile:w-12 mobile:h-12 desktop:top-32 desktop:left-[22%] desktop:w-24 desktop:h-24' },
            { class: 'mobile:top-16 mobile:left-[45%] mobile:w-12 mobile:h-12 desktop:top-32 desktop:left-[45%] desktop:w-24 desktop:h-24' },
            { class: 'mobile:top-16 mobile:left-[68%] mobile:w-12 mobile:h-12 desktop:top-32 desktop:left-[68%] desktop:w-24 desktop:h-24' },
            { class: 'mobile:top-60 mobile:left-[22%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[22%] desktop:w-24 desktop:h-24' },
            { class: 'mobile:top-60 mobile:left-[45%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[45%] desktop:w-24 desktop:h-24' },
            { class: 'mobile:top-60 mobile:left-[68%] mobile:w-12 mobile:h-12 desktop:top-[440px] desktop:left-[68%] desktop:w-24 desktop:h-24' },
        ]

        const isPlayerSelected = computed(() => (player) => {
            return selectedPlayers.value.includes(player)
        })

        const togglePlayerSelection = (player) => {
            const index = selectedPlayers.value.indexOf(player)
            if (index !== -1) {
                // 이미 선택된 선수라면 제거
                selectedPlayers.value[index] = null
            } else {
                // 선택되지 않은 선수라면 빈 자리에 추가
                const emptyIndex = selectedPlayers.value.findIndex(p => p === null)
                if (emptyIndex !== -1) {
                    selectedPlayers.value[emptyIndex] = player
                }
            }
        }

        const selectRandomPlayers = () => {
            // cacheStore.players에서 랜덤하게 8명 선택
            const shuffled = [...cacheStore.players].sort(() => 0.5 - Math.random())
            displayedPlayers.value = shuffled.slice(0, 30)
        }

        onMounted(() => {
            selectRandomPlayers()
        })

        const toggleLikePlayer = (id) => {
    // id가 유효하지 않으면 함수 종료
    if (typeof id === 'undefined') {
        console.error("Invalid ID:", id);
        return;
    }

    // likePlayerList가 정의되지 않았을 경우 빈 객체로 초기화
    if (!persistStore.likePlayerList) {
        persistStore.likePlayerList = {};
    }

    // 좋아하는 선수 리스트에서 해당 id가 있는지 확인
    if (persistStore.likePlayerList[id]) {
        console.log("Removing from favorites:", id);
        // 이미 좋아하는 선수 목록에 있으면 제거
        delete persistStore.likePlayerList[id];
    } else {
        console.log("Adding to favorites:", id);
        // 목록에 없으면 추가
        persistStore.likePlayerList[id] = true;
    }
};
        const isPlayerLiked = (id) => {
            // likePlayerList에 id가 존재하는지 확인, 없으면 undefined 대신 false 반환
            const likeList = persistStore.likePlayerList || {};
            return !!likeList[id];
        }

        return { 
            cacheStore, 
            modalStore, 
            persistStore,
            displayedPlayers,
            selectedPlayers,
            positions,
            isPlayerSelected,
            toggleLikePlayer,
            togglePlayerSelection,
            selectRandomPlayers,
            isPlayerLiked,
        }
    }
}
</script>

<style scoped>
</style>