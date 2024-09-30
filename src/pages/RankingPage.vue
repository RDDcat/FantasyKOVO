<template>
<!-- 랭킹 페이지 -->
<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-center">2024 KEIGN 판타지 랭킹</h1>

    <!-- 사용자의 순위 -->
    <div class="bg-blue-100 p-4 rounded-lg shadow mb-8" @click="$router.push({ name: 'my' });
">
        <h2 class="text-xl font-semibold mb-2">내 순위</h2>
        <div class="flex justify-between items-center">
            <span class="text-2xl font-bold">{{ userRank }}위</span>
            <span class="text-lg">총점: {{ userScore }}점</span>
            <span class="text-lg">팀명: {{ userTeamName }}</span>
        </div>
    </div>

    <!-- 랭킹 테이블 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="w-full">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2 text-left">순위</th>
                    <th class="px-4 py-2 text-left">팀명</th>
                    <th class="px-4 py-2 text-left">감독명</th>
                    <th class="px-4 py-2 text-left">총점</th>
                    <th class="px-4 py-2 text-left">지난 주 순위</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in rankings" :key="user.id" 
                    :class="{'bg-yellow-100': user.id === currentUserId}">
                    <td class="px-4 py-2">{{ index + 1 }}</td>
                    <td class="px-4 py-2">{{ user.teamName }}</td>
                    <td class="px-4 py-2">{{ user.managerName }}</td>
                    <td class="px-4 py-2">{{ user.totalScore }}</td>
                    <td class="px-4 py-2">
                        <span v-if="user.lastWeekRank < index + 1" class="text-red-500">↓ {{ user.lastWeekRank }}</span>
                        <span v-else-if="user.lastWeekRank > index + 1" class="text-green-500">↑ {{ user.lastWeekRank }}</span>
                        <span v-else>- {{ user.lastWeekRank }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 페이지네이션 -->
    <div class="mt-4 flex justify-center">
        <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-blue-500 text-white rounded-l-lg disabled:bg-gray-300">이전</button>
        <span class="px-4 py-2 bg-gray-200">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-blue-500 text-white rounded-r-lg disabled:bg-gray-300">다음</button>
    </div>
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

        const rankings = ref([])
        const currentPage = ref(1)
        const itemsPerPage = 20
        const currentUserId = ref(null) // 실제 구현 시 로그인한 사용자의 ID로 설정

        const userRank = ref(0)
        const userScore = ref(0)
        const userTeamName = ref('')

        const totalPages = computed(() => Math.ceil(rankings.value.length / itemsPerPage))

        const fetchRankings = () => {
            // 실제 구현 시 API를 통해 랭킹 데이터를 가져와야 합니다.
            // 여기서는 예시 데이터를 사용합니다.
            rankings.value = Array.from({ length: 100 }, (_, i) => ({
                id: i + 1,
                teamName: `팀 ${i + 1}`,
                managerName: `감독 ${i + 1}`,
                totalScore: Math.floor(Math.random() * 1000),
                lastWeekRank: Math.floor(Math.random() * 100) + 1
            }))

            // 점수 기준으로 정렬
            rankings.value.sort((a, b) => b.totalScore - a.totalScore)

            // 현재 사용자의 정보 설정 (예시)
            currentUserId.value = 42 // 실제 구현 시 로그인한 사용자의 ID로 설정
            const currentUser = rankings.value.find(user => user.id === currentUserId.value)
            if (currentUser) {
                userRank.value = rankings.value.findIndex(user => user.id === currentUserId.value) + 1
                userScore.value = currentUser.totalScore
                userTeamName.value = currentUser.teamName
            }
        }

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--
            }
        }

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++
            }
        }

        onMounted(() => {
            fetchRankings()
        })

        return {
            cacheStore, 
            modalStore, 
            persistStore,
            rankings,
            currentPage,
            totalPages,
            currentUserId,
            userRank,
            userScore,
            userTeamName,
            prevPage,
            nextPage
        }
    }
}
</script>

<style scoped>
/* 필요한 경우 추가 스타일 */
</style>