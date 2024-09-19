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
    <h2 class="desktop:text-3xl mobile:text-2xl font-bold mb-6 text-center">선수를 선택해주세요</h2>
    <div class="grid grid-cols-4 gap-4 p-20
                mobile:grid-cols-2 mobile:p-4 ">
        <!-- 선수 카드 -->
        <div v-for="(player, index) in displayedPlayers" :key="index"
            class="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            :class="{ 'shadow-2xl ring-4 ring-blue-600': isPlayerSelected(player) }"
            @click.stop="togglePlayerSelection(player)">
            <img :src="player.img" 
                class="w-full aspect-square object-cover"/>
            <!-- 선수 즐겨찾기 -->
            <div class="absolute top-4 right-4 z-10" @click.stop="toggleLikePlayer(player.id)">
                <i v-if="isPlayerLiked(player.id)" class="fa-solid fa-stars" style="color: #FFD43B;"></i>
                <i v-else class="fa-regular fa-stars"></i>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">{{player.name}}</h3>
                <p class="flex text-gray-600">{{player.position.name}} <img class="w-4" :src="player.position.img" /></p>
                <p class="text-gray-600">{{player.team.name}}</p>
            </div>
        </div>
    </div>

    <!-- 팀 저장 버튼 -->
    <button @click="saveTeam" class="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        팀 저장
    </button>

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
            // cacheStore.players에서 랜덤하게 30명 선택
            const shuffled = [...cacheStore.players].sort(() => 0.5 - Math.random())
            displayedPlayers.value = shuffled.slice(0, 30)
        }

        onMounted(() => {
            selectRandomPlayers()
        })

        const toggleLikePlayer = (id) => {
            if (typeof id === 'undefined') {
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
        }

        const saveTeam = () => {
            // 선택된 선수들을 persistStore에 저장
            persistStore.selectedTeam = selectedPlayers.value.map(p => p ? p.id : null)
            // 모달 또는 알림으로 저장 완료 메시지 표시
            modalStore.showModal('팀 저장 완료', '선택한 팀이 성공적으로 저장되었습니다.')
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
            saveTeam,
        }
    }
}
</script>

<style scoped>
</style>