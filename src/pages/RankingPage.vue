<template>
<!-- 랭킹 페이지 -->
<div class="flex flex-col container mx-auto px-4 py-8">
    <h1 class="flex mx-auto text-3xl font-bold mb-6 text-center mobile:text-xl">2024 
        <div class="text-blue-600">&nbsp;KOVO&nbsp;</div> 판타지 랭킹
    </h1>

    <!-- 사용자의 순위 -->
    <div class="relative h-[25rem] banner rounded-lg shadow mb-8 cursor-pointer" @click="$router.push({ name: 'my' });">
        <div class="absolute right-0 p-12 text-right z-20">
            <h2 class="text-xl ">순위</h2>
            <span class="text-3xl font-bold">{{ userRank }}위</span>
            <div class="flex flex-col flex-wrap ">
                <span class="text-lg mt-2">총점</span>
                <span class="text-xl">{{ userScore }}점</span>
                <div class="flex">
                    <div class="mt-2 ml-auto border-2 border-red-700 w-4 h-0.5"></div>
                    <div class="mt-2 border-2 border-black w-12 h-0.5"></div>
                </div>
                <span class="text-lg mt-2">스텟</span>
                <span class="text-xl">{{ userScore-50 }}점</span>
                <div class="flex">
                    <div class="mt-2 ml-auto border-2 border-red-700 w-8 h-0.5"></div>
                    <div class="mt-2 border-2 border-black w-4 h-0.5"></div>
                </div>
            </div>
        </div>
        <span class="absolute right-0 bottom-0 py-4 px-6 text-4xl text-white">{{ userTeamName }}</span>
        <!-- <img class="absolute bottom-0 z-10 object-contain h-96 w-64"  src="@/assets/players/vixtorm/vix_OH_박승수.png" alt=""> -->
        <img class="absolute bottom-0 z-10 object-contain h-96 w-64"  src="@/assets/sample.png" alt="">
        <!-- <img class="absolute bottom-0 z-10 object-contain h-96 w-64"  src="@/assets/sample2.png" alt=""> -->
        <!-- <img class="absolute bottom-0 z-10 object-contain h-96 w-64"  src="@/assets/players/vixtorm/vix_OH_박승수.png" alt=""> -->
        <!-- <img class="absolute mobile:hidden  bottom-0 left-[15rem] object-contain h-64"  src="@/assets/sample2.png" alt=""> -->
    </div>

    <!-- 랭킹 리스트 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <!-- 데스크톱 뷰 -->
        <table class="w-full hidden lg:table">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2 text-left">순위</th>
                    <th class="px-4 py-2 text-left">프로필</th>
                    <th class="px-4 py-2 text-left">팀명</th>
                    <th class="px-4 py-2 text-left">유저</th>
                    <th class="px-4 py-2 text-left">총점</th>
                    <th class="px-4 py-2 text-left">순위 변동</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in rankings" :key="user.id" 
                    :class="{'bg-yellow-100': user.id === currentUserId}">
                    <td class="px-4 py-2">{{ index + 1 }}</td>
                    <td class="px-4 py-2">
                        <img :src="user.profilePicture" alt="프로필 사진" class="w-10 h-10 rounded-full">
                    </td>
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

        <!-- 모바일 뷰 -->
        <div class="lg:hidden">
            <div v-for="(user, index) in rankings" :key="user.id" 
                class="p-4 border-b" :class="{'bg-yellow-100': user.id === currentUserId}">
                <div class="flex items-center mb-2">
                    <img :src="user.profilePicture" alt="프로필 사진" class="w-10 h-10 rounded-full mr-4">
                    <div>
                        <div class="font-bold">{{ user.teamName }}</div>
                        <div class="text-sm text-gray-600">{{ user.managerName }}</div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <span class="font-bold">{{ index + 1 }}위</span>
                    <span>총점: {{ user.totalScore }}점</span>
                    <span>
                        <span v-if="user.lastWeekRank < index + 1" class="text-red-500">↓ {{ user.lastWeekRank }}</span>
                        <span v-else-if="user.lastWeekRank > index + 1" class="text-green-500">↑ {{ user.lastWeekRank }}</span>
                        <span v-else>- {{ user.lastWeekRank }}</span>
                    </span>
                </div>
            </div>
        </div>
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
        const currentUserId = ref(null)

        const userRank = ref(0)
        const userScore = ref(0)
        const userTeamName = ref('')

        const totalPages = computed(() => Math.ceil(rankings.value.length / itemsPerPage))

        // 팀 이름과 감독 이름을 위한 배열
        const teamNameWords = ['용감한', '강력한', '빛나는', '신비한', '우아한', '열정적인', '현명한', '행운의', '화려한', '위대한']
        const managerNameWords = ['호랑이', '독수리', '사자', '늑대', '표범', '코끼리', '곰', '여우', '매', '펭귄']

        const getRandomName = (arr) => arr[Math.floor(Math.random() * arr.length)]

        const fetchRankings = () => {
            rankings.value = Array.from({ length: 100 }, (_, i) => ({
                id: i + 1,
                teamName: `${getRandomName(teamNameWords)}${getRandomName(managerNameWords)}`,
                managerName: `${getRandomName(teamNameWords)}${getRandomName(managerNameWords)}`,
                totalScore: Math.floor(Math.random() * 1000),
                lastWeekRank: Math.floor(Math.random() * 100) + 1,
                profilePicture: `./assets/logo-beta.svg` // 플레이스홀더 이미지 사용
            }))

            rankings.value.sort((a, b) => b.totalScore - a.totalScore)

            currentUserId.value = 42
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
.banner{
    background: rgb(95,132,255);
    background: linear-gradient(4deg, rgba(95,132,255,1) 0%, rgba(103,138,255,1) 40%, rgba(105,139,255,1) 61%, rgba(143,168,253,1) 100%);
}
</style>