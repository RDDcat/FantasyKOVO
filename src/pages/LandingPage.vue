<template>
<!-- 메인 페이지 첫 랜딩 페이지 -->
    <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
    <!-- 클릭 배너 -->
    <div class="relative mb-8 cursor-pointer overflow-hidden" @click="goBuild()" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img 
            :class="['transition-all duration-300 w-full rounded-xl', { 'filter hue-rotate-180': isHovered }]"
            src="@/assets/banner.jpg" 
            alt=""
        >
        <!-- 글씨 컨테이너 -->
        <div class="absolute top-1/2 transform -translate-y-1/2 z-10 overflow-hidden left-44
                    desktop:left-[45%]  desktop:text-4xl  
                    mobile:left-0 mobile:text-xl ">
            <transition name="slide-fade" mode="out-in">
                <div 
                    :key="currentTextIndex" 
                    :class="['transition-all duration-300 font-bold', { 'text-blue-600': !isHovered, 'text-yellow-400': isHovered }]"
                >
                {{ texts[currentTextIndex] }}
            </div>
            </transition>
        </div>
        <!-- 호버 시 나타나는 텍스트 -->
        <div 
            :class="['absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-800 bg-white bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300', 
                    { 'opacity-0': !isHovered, 'opacity-100': isHovered }]"
            >
            click! 하여 시작하기
        </div>
    </div>


    <!-- 홍보 카드 섹션 -->
    <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 mb-12">
        <!-- Create and Join Leagues 카드 -->
        <div class="bg-gradient-to-r from-violet-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <h2 class="text-2xl font-bold mb-4">최고의 배잘알을 가려라!</h2>
            <p class="mb-4">다른 유저와 경쟁하여 최고가 되어보세요!</p>
            <div class="flex w-full">
                <button class="ml-auto bg-white text-blue-600 font-bold py-2 px-4 rounded">랭킹보기</button>
            </div>
        </div>

        <!-- Pick Your Squad 카드 -->
        <div class="bg-gradient-to-r from-red-500 to-violet-600  rounded-lg shadow-lg p-6 text-white">
            <h2 class="text-2xl font-bold mb-4">선수단을 모집해보세요!</h2>
            <p class="mb-4">주어진 예산안에서 최고의 선수단을 구성하세요. </p>
            <div class="flex w-full">
                <button class="ml-auto bg-white text-red-600 font-bold py-2 px-4 rounded">시작하기</button>
            </div>
        </div>
    </div>

    <!-- 선수 카드 섹션 -->
    <h2 class="text-3xl font-bold mb-6 text-center">Most Picked!</h2>
    <div class="grid grid-cols-2 mobile:grid-cols-4 gap-4">
        <!-- 김연경 카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="isHoveredEgg ? hoverImage1 : defaultImage1" 
                class="w-full aspect-square object-cover"/>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">김연경</h3>
                <p class="text-gray-600"></p>
            </div>
        </div>

        <!-- 이다현 카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden"
            @mouseenter="isHoveredEgg = true" 
            @mouseleave="isHoveredEgg = false">
            <img :src="isHoveredEgg ? hoverImage2 : defaultImage2" 
                class="w-full aspect-square object-cover"/>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">이다현</h3>
                <p class="text-gray-600"></p>
            </div>
        </div>
        
        <!-- 허수봉  카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/players/skywalkers/sky_OP_허수봉.png" alt="Pickford" class="w-full aspect-square object-cover"/>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">허수봉</h3>
                <p class="text-gray-600"></p>
            </div>
        </div>

        <!-- 정지석 카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/players/jumbos/jum_OH_정지석.png" alt="Raya" class="w-full aspect-square object-cover"/>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">정지석 <div class="text-white">stop stone</div> </h3>
                <p class="text-gray-600"></p>
            </div>
        </div>
        
    </div>
</div>
</div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {useCacheStore} from '@/stores/cacheStore'
import {useModalStore} from '@/stores/modalStore'
import {usePersistStore} from '@/stores/persistStore'

export default {
    components: {
        
    },
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const persistStore = usePersistStore()

        const isHovered = ref(false)
        const isHoveredEgg = ref(false)
        const currentTextIndex = ref(0)
        const texts = ref(['Fantasy KOVO League', '최고의 팀을 만들어보세요', '화면을 클릭하여 시작하기!'])
        let intervalId = null

        const defaultImage1 = './assets/players/pinkspiders/pin_OH_김연경.png'
        const hoverImage1 = './assets/egg/easteregg2.gif'
        const defaultImage2 = './assets/players/hillstate/hil_MB_이다현.png'
        const hoverImage2 = './assets/egg/easteregg1.gif'

        const rotateText = () => {
        currentTextIndex.value = (currentTextIndex.value + 1) % texts.value.length
        }

        onMounted(() => {
        intervalId = setInterval(rotateText, 3000)
        })

        onBeforeUnmount(() => {
        if (intervalId) clearInterval(intervalId)
        })

        return {
            isHovered,
            isHoveredEgg,
            defaultImage1,
            defaultImage2,
            hoverImage1,
            hoverImage2,
            currentTextIndex,
            texts,
            cacheStore,
            modalStore,
            persistStore
        }
    },
    data(){
        return {

        }
    },
    methods: {
        goBuild(){
            this.$router.push({ name: 'build' });
        }
    },
}
</script>
<style scoped>
.text-outline {
  text-shadow: 
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}


</style>