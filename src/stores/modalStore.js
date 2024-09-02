import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useModalStore = defineStore('modalStore', {
    state: ()=>({
        // 네비게이션 사이드 바
        isSidebarMenu:false,

        // 네비게이션
        isMain:true,
        isMainBuild:false,
        isMainLookup:false,
        isMy:false,
        isRanking:false,
    }),
})
