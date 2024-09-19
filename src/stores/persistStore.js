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

            },
            OP:{

            },
            MB:{

            },
            S:{

            },
            L:{

            },
        },
    }),
    persist: true,
})
