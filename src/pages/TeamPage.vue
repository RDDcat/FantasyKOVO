<template>
<!-- 메인 페이지 첫 랜딩 페이지 -->    
    <div class="flex">
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
    mounted(){
        // 유저가 팀이 등록되어있다면
        if(this.persistStore.haveTeam){
            // 팀 조회 페이지
            this.$router.push({ name: 'look' });
        }
        else{
            // 팀 만들기 페이지
            this.$router.push({ name: 'build' })
        }
        
    }
}
</script>
<style scoped>



</style>