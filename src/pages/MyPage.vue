<template>
<!-- 마이페이지 -->    
<div class="flex-col items-center">
    <h1 class="px-20 py-6 mobile:p-4 font-bold text-xl">내 선수단</h1>
    <div class="grid grid-cols-3 gap-4 p-20
                mobile:grid-cols-3 mobile:p-4">
        <!-- 내 선수단 카드 -->
        <div v-for="player in cacheStore.myTeam.players" :key="player.id"
            class="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="player.img" 
                class="w-full aspect-square object-cover"/>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">{{player.name}}</h3>
                <p class="flex text-gray-600">{{player.position.name}} <img class="w-4" :src="player.position.img" /></p>
                <p class="text-gray-600">{{player.team.name}}</p>
            </div>
        </div>
    </div>

    <!-- 선수 리스트 -->
    <!-- 관심 선수 카드 섹션 -->
    <h2 class="text-3xl font-bold mb-6 text-center">내 관심선수</h2>
    <div class="grid grid-cols-4 gap-4 p-20
                mobile:grid-cols-2 mobile:p-4 ">
        <!-- 선수 카드 -->
        <div v-for="player in likedPlayers" :key="player.id"
            class="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="player.img" 
                class="w-full aspect-square object-cover"/>
            <!-- 선수 즐겨찾기 해제 -->
            <div class="absolute top-4 right-4 z-10" @click="toggleLikePlayer(player.id)">
                <i class="fa-solid fa-stars" style="color: #FFD43B;"></i>
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
import { ref, onMounted } from 'vue'
import { useCacheStore } from '@/stores/cacheStore'
import { usePersistStore } from '@/stores/persistStore'

export default {
    setup() {
        const cacheStore = useCacheStore()
        const persistStore = usePersistStore()

        const myTeam = ref([])
        const likedPlayers = ref([])

        const loadMyTeam = () => {
            if (persistStore.selectedTeam) {
                myTeam.value = persistStore.selectedTeam.map(id => 
                    id ? cacheStore.players.find(player => player.id === id) : null
                )
            }
        }

        const loadLikedPlayers = () => {
            if (persistStore.likePlayerList) {
                likedPlayers.value = Object.keys(persistStore.likePlayerList)
                    .map(id => cacheStore.players.find(player => player.id === parseInt(id)))
                    .filter(player => player !== undefined)
            }
        }

        const toggleLikePlayer = (id) => {
            if (typeof id === 'undefined') {
                console.error("Invalid ID:", id);
                return;
            }

            if (persistStore.likePlayerList[id]) {
                delete persistStore.likePlayerList[id];
                loadLikedPlayers(); // 리스트 갱신
            }
        };

        onMounted(() => {
            loadMyTeam()
            loadLikedPlayers()
        })

        return { 
            cacheStore, 
            persistStore,
            myTeam,
            likedPlayers,
            toggleLikePlayer,
        }
    }
}
</script>

<style scoped>
</style>