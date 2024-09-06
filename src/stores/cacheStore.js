import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useCacheStore = defineStore('cacheStore', {
    state: ()=>({
        players:[
            {
                name: "박유현",
                img: './assets/players/bluefangs/blu_L_박유현.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "안지원",
                img: './assets/players/bluefangs/blu_L_안지원.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "조국기",
                img: './assets/players/bluefangs/blu_L_조국기.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "김재휘",
                img: './assets/players/bluefangs/blu_MB_김재휘.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "김정윤",
                img: './assets/players/bluefangs/blu_MB_김정윤.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "김준우",
                img: './assets/players/bluefangs/blu_MB_김준우.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "손태훈",
                img: './assets/players/bluefangs/blu_MB_손태훈.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "양수현",
                img: './assets/players/bluefangs/blu_MB_양수현.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "김우진",
                img: './assets/players/bluefangs/blu_OH_김우진.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "김정호",
                img: './assets/players/bluefangs/blu_OH_김정호.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "손현종",
                img: './assets/players/bluefangs/blu_OH_손현종.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "이시몬",
                img: './assets/players/bluefangs/blu_OH_이시몬.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "이윤수",
                img: './assets/players/bluefangs/blu_OH_이윤수.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "이현진",
                img: './assets/players/bluefangs/blu_OP_이현진.png',
                position: '아포짓 스파이커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "노재욱",
                img: './assets/players/bluefangs/blu_S_노재욱.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "이재현",
                img: './assets/players/bluefangs/blu_S_이재현.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                name: "이호건",
                img: './assets/players/bluefangs/blu_S_이호건.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
        ],
    }),
})
