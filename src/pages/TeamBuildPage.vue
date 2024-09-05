<template>
<!-- 메인 페이지 팀 등록 -->
    <div class="sample">this page for copy</div>
    
    <img class="p-4 aspect-square
        mobile:w-full 
        desktop:w-[800px]" 
        src="@/assets/court.png" alt="">
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