<template>
    <div class="w-full flex bg-gray-700 text-white">
        <div class="container mx-auto px-4 py-10">
            <h2>
                &copy; fantasy kovo / 판타지 배구리그
            </h2>
            <p>
                
            </p>
        </div>
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