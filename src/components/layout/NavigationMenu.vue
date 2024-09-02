<template>
<!-- 메인 페이지 팀 등록 -->
    <div class="sample">this page for copy</div>
    <SidebarMenu />
</template>
<script>
import SidebarMenu from '@/components/layout/SidebarMenu.vue'

import {useCacheStore} from '@/stores/cacheStore'
import {useModalStore} from '@/stores/modalStore'
import {usePersistStore} from '@/stores/persistStore'

export default {
    components: {
        SidebarMenu,
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