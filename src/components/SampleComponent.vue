<template>
    <div class="sample">this page for copy</div>
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