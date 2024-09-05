<template>
<!-- 메인 페이지 팀 등록 -->    
<div class="flex-col items-center">
        <!-- 팀이 들어갈 수 있는 지도 -->
        <div class="relative aspect-square
                mobile:w-full 
                desktop:w-[800px]">
            <!-- 지도 -->
            <img class="aspect-square
                mobile:w-full 
                desktop:w-[800px] z-0" src="@/assets/court.png" alt="">
            <!-- 포지션 -->
            <div class="absolute z-10 w-24 h-24 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600
                        mobile:top-10 mobile:left-[22%]
                        desktop:top-32 desktop:left-[22%]"></div>
            <div class="absolute top-32 left-[45%] z-10 w-24 h-24 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600"></div>
            <div class="absolute top-32 left-[70%] z-10 w-24 h-24 rounded-full bg-white ring-4 ring-gray-800 hover:bg-gray-600"></div>
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