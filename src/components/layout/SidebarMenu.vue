<template>
<!-- 메인 페이지 팀 등록 -->
    <div  class="fixed right-0 top-0 w-4/5 h-full bg-black opacity-95 z-40">
        <!-- 메뉴 내용 -->
        <div class="text-white my-12 space-y-6 p-4 flex flex-col">
            <!-- 메뉴1 -->
            <button class="mx-auto w-28 text-center " :class="index===0?'text-red-600':'hover:text-gray-400'" @click="nav(0)">
                MY선수단
            </button>
            <!-- 메뉴2 -->
            <button class="mx-auto w-28 text-center" :class="index===3?'text-red-600':'hover:text-gray-400'" @click="nav(1)">
                마이페이지
            </button>
            <!-- 메뉴3 -->
            <button class="mx-auto w-28 text-center" :class="index===3?'text-red-600':'hover:text-gray-400'" @click="nav(2)">
                랭킹
            </button>
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
        nav(index) {
            this.index = index;
            if(index === 0)
                this.$router.push({ name: 'team' });
            if(index === 1)
                this.$router.push({ name: 'my' });
            if(index === 2)
                this.$router.push({ name: 'rank' });
        },
    },
}
</script>
<style scoped>



</style>