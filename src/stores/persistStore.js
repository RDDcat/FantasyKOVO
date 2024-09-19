import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
// persist 적용되어있음
export const usePersistStore = defineStore('persistStore', {
    state: ()=>({
        haveTeam:false,
        likePlayerList: {},
        selectedTeam: null,

        // 포지션 데이터
        positions:{
            OH:{
                name:"아웃사이드 히터",
                img:"./assets/icon/outside-hitter.svg",
            },
            OP:{
                name:"아포짓 스파이커",
                img:"./assets/icon/opposite-spiker.svg",
            },
            MB:{
                name:"미들 블로커",
                img:"./assets/icon/middle-blocker.svg",
            },
            S:{
                name:"세터",
                img:"./assets/icon/setter.svg",
            },
            L:{
                name:"리베로",
                img:"./assets/icon/libero.svg",
            },
        },
    }),
    persist: true,
})
