<template>
<!-- 메인 페이지 팀 등록 -->
    <transition name="slide" v-if="modalStore.isSidebarMenu">
        <SidebarMenu />
    </transition>
    <!-- 사이드 메뉴 모달 -->
    <div v-if="modalStore.isSidebarMenu" class="fixed left-0 top-0 w-1/5 h-full z-30" @click="toggleMenu()"></div>

    <div class="flex py-4 px-6 w-full z-20 bg-white"
        :class="modalStore.isLoginWarnModal ? 'fixed' : ''">
        <!-- 로고 -->
        <div class="flex font-bold " @click="this.$router.push({ name: 'main' });">
            <img class="my-auto w-8 h-8" src="@/assets/logo-beta.svg" />
        </div>

        <!-- 버거메뉴 -->
        <a class="ml-auto my-auto menu-trigger z-40"
            :class="{'active-2': modalStore.isSidebarMenu }"
            @click.prevent="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
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
            index:0,
        }
    },
    methods: {
        toggleMenu() {
            this.modalStore.isSidebarMenu = !this.modalStore.isSidebarMenu;
        },
    },
}
</script>
<style scoped>

.menu-trigger {
    display: inline-block;
    cursor: pointer;
}
.menu-trigger span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #333;
    transition: all 0.3s;
}
.menu-trigger.active-2 span:nth-of-type(1) {
    transform: translateY(8px) rotate(-45deg);
    background-color: white;
}
.menu-trigger.active-2 span:nth-of-type(2) {
    opacity: 0;
}
.menu-trigger.active-2 span:nth-of-type(3) {
    transform: translateY(-8px) rotate(45deg);
    background-color: white;
}
/* Vue 트랜지션 */
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(30%);
    opacity: 0;
}

</style>