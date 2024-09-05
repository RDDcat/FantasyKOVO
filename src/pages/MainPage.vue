<template>
<!-- 메인 페이지 첫 랜딩 페이지 -->    
    <NavigationMenu />
    <div class="flex p-4 md:p-8 lg:p-12">
        <div class="mx-auto text-2xl mobile:text-lg desktop:text-3xl">
            반응형 제목
        </div>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            이 텍스트는 화면 크기에 따라 크기가 변합니다.
        </p>
    </div>
    <img class="p-4 aspect-square
        mobile:w-full 
        desktop:w-[800px]" 
        src="@/assets/court.png" alt="">
</template>
<script>
import NavigationMenu from '@/components/layout/NavigationMenu.vue'

import {useCacheStore} from '@/stores/cacheStore'
import {useModalStore} from '@/stores/modalStore'
import {usePersistStore} from '@/stores/persistStore'

export default {
    components: {
        NavigationMenu,
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