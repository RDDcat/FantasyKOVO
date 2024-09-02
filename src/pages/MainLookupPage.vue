<template>
<!-- 메인페이지에서 유저 팀 정보 조회 페이지 -->
    <div class="sample">this page for copy</div>
</template>
<script>
import {useCacheStore} from '@/stores/cacheStore'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()

        return { cacheStore }
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