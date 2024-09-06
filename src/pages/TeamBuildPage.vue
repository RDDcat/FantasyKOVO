<template>
<!-- 메인 페이지 팀 등록 -->    
<div class="flex-col items-center">
        <!-- 팀이 들어갈 수 있는 지도 -->
        <div class="relative mx-auto desktop:w-[800px]">
            <!-- 지도 -->
            <img class="aspect-square 
                mobile:w-full 
                desktop:w-[800px] z-0" src="@/assets/court.png" alt="">
            <!-- 포지션 -->
            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-16 mobile:left-[22%] mobile:w-12 mobile:h-12
                        desktop:top-32 desktop:left-[22%] desktop:w-24 desktop:h-24"></div>
            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-16 mobile:left-[45%] mobile:w-12 mobile:h-12
                        desktop:top-32 desktop:left-[45%] desktop:w-24 desktop:h-24"></div>
            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-16 mobile:left-[68%] mobile:w-12 mobile:h-12
                        desktop:top-32 desktop:left-[68%] desktop:w-24 desktop:h-24"></div>

            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-60 mobile:left-[22%] mobile:w-12 mobile:h-12
                        desktop:top-[440px] desktop:left-[22%] desktop:w-24 desktop:h-24"></div>
            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-60 mobile:left-[45%] mobile:w-12 mobile:h-12
                        desktop:top-[440px] desktop:left-[45%] desktop:w-24 desktop:h-24"></div>
            <div class="absolute z-10 w-2 h-2 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-60 mobile:left-[68%] mobile:w-12 mobile:h-12
                        desktop:top-[440px] desktop:left-[68%] desktop:w-24 desktop:h-24"></div>

        </div>
    
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
</div>
</template>
<script>
import {useCacheStore} from '@/stores/cacheStore'
import {useModalStore} from '@/stores/modalStore'
import {usePersistStore} from '@/stores/persistStore'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const persistStore = usePersistStore()

        return { cacheStore, modalStore, persistStore }
    },
    data(){
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>