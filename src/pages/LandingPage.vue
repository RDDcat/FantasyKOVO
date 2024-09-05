<template>
<!-- 메인 페이지 첫 랜딩 페이지 -->    
    <div class="flex p-4 md:p-8 lg:p-12">
        <div class="mx-auto text-2xl mobile:text-lg desktop:text-3xl">
            랜딩페이지
        </div>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ.
        </p>
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