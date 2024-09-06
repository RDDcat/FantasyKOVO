import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useCacheStore = defineStore('cacheStore', {
    state: ()=>({
        myTeam:{
            players:[
                {
                    id:0,
                    name: "박유현",
                    img: './assets/players/bluefangs/blu_L_박유현.png',
                    position: '리베로',
                    team: { name: "대전 삼성화재 블루팡스" }
                },
            ],
        },
        players:[
            {
                id:0,
                name: "박유현",
                img: './assets/players/bluefangs/blu_L_박유현.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:1,
                name: "안지원",
                img: './assets/players/bluefangs/blu_L_안지원.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:2,
                name: "조국기",
                img: './assets/players/bluefangs/blu_L_조국기.png',
                position: '리베로',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:3,
                name: "김재휘",
                img: './assets/players/bluefangs/blu_MB_김재휘.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:4,
                name: "김정윤",
                img: './assets/players/bluefangs/blu_MB_김정윤.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:5,
                name: "김준우",
                img: './assets/players/bluefangs/blu_MB_김준우.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:6,
                name: "손태훈",
                img: './assets/players/bluefangs/blu_MB_손태훈.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:7,
                name: "양수현",
                img: './assets/players/bluefangs/blu_MB_양수현.png',
                position: '미들 블로커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:8,
                name: "김우진",
                img: './assets/players/bluefangs/blu_OH_김우진.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:9,
                name: "김정호",
                img: './assets/players/bluefangs/blu_OH_김정호.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:10,
                name: "손현종",
                img: './assets/players/bluefangs/blu_OH_손현종.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:11,
                name: "이시몬",
                img: './assets/players/bluefangs/blu_OH_이시몬.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:12,
                name: "이윤수",
                img: './assets/players/bluefangs/blu_OH_이윤수.png',
                position: '아웃사이드 히터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:13,
                name: "이현진",
                img: './assets/players/bluefangs/blu_OP_이현진.png',
                position: '아포짓 스파이커',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:14,
                name: "노재욱",
                img: './assets/players/bluefangs/blu_S_노재욱.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:15,
                name: "이재현",
                img: './assets/players/bluefangs/blu_S_이재현.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:16,
                name: "이호건",
                img: './assets/players/bluefangs/blu_S_이호건.png',
                position: '세터',
                team: { name: "대전 삼성화재 블루팡스" }
            },
            // 인천 대한항공 점보스
            {
                id:17,
                name: "강승일",
                img: './assets/players/jumbos/jum_L_강승일.png',
                position: '리베로',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:18,
                name: "송민근",
                img: './assets/players/jumbos/jum_L_송민근.png',
                position: '리베로',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:19,
                name: "정성민",
                img: './assets/players/jumbos/jum_L_정성민.png',
                position: '리베로',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:20,
                name: "김규민",
                img: './assets/players/jumbos/jum_MB_김규민.png',
                position: '미들 블로커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:21,
                name: "김민재",
                img: './assets/players/jumbos/jum_MB_김민재.png',
                position: '미들 블로커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:22,
                name: "이수황",
                img: './assets/players/jumbos/jum_MB_이수황.png',
                position: '미들 블로커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:23,
                name: "조재영",
                img: './assets/players/jumbos/jum_MB_조재영.png',
                position: '미들 블로커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:24,
                name: "진지위",
                img: './assets/players/jumbos/jum_MB_진지위.png',
                position: '미들 블로커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:25,
                name: "곽승석",
                img: './assets/players/jumbos/jum_OH_곽승석.png',
                position: '아웃사이드 히터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:26,
                name: "이준",
                img: './assets/players/jumbos/jum_OH_이준.png',
                position: '아웃사이드 히터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:27,
                name: "정지석",
                img: './assets/players/jumbos/jum_OH_정지석.png',
                position: '아웃사이드 히터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:28,
                name: "정한용",
                img: './assets/players/jumbos/jum_OH_정한용.png',
                position: '아웃사이드 히터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:29,
                name: "김준호",
                img: './assets/players/jumbos/jum_OP_김준호.png',
                position: '아포짓 스파이커',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:30,
                name: "김형진",
                img: './assets/players/jumbos/jum_S_김형진.png',
                position: '세터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:31,
                name: "유광우",
                img: './assets/players/jumbos/jum_S_유광우.png',
                position: '세터',
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:32,
                name: "한선수",
                img: './assets/players/jumbos/jum_S_한선수.png',
                position: '세터',
                team: { name: "인천 대한항공 점보스" }
            },
        ],
    }),
})
