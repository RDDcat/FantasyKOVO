<template>
<!-- 메인 페이지 첫 랜딩 페이지 -->
    <div class="sample">this page for copy</div>
    <NavigationMenu />
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