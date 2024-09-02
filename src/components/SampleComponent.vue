<template>
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