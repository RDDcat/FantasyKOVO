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
                    position: {
                        name:"리베로",
                        img:"./assets/icon/libero.svg",
                    },
                    team: { name: "대전 삼성화재 블루팡스" }
                },
                {
                    id:3,
                    name: "김재휘",
                    img: './assets/players/bluefangs/blu_MB_김재휘.png',
                    position: {
                        name:"미들 블로커",
                        img:"./assets/icon/middle-blocker.svg",
                    },
                    team: { name: "대전 삼성화재 블루팡스" }
                },
                {
                    id:21,
                    name: "김민재",
                    img: './assets/players/jumbos/jum_MB_김민재.png',
                    position: {
                        name:"미들 블로커",
                        img:"./assets/icon/middle-blocker.svg",
                    },
                    team: { name: "인천 대한항공 점보스" }
                },
                {
                    id:27,
                    name: "정지석",
                    img: './assets/players/jumbos/jum_OH_정지석.png',
                    position: {
                        name:"아웃사이드 히터",
                        img:"./assets/icon/outside-hitter.svg",
                    },
                    team: { name: "인천 대한항공 점보스" }
                },
                {
                    id:13,
                    name: "이현진",
                    img: './assets/players/bluefangs/blu_OP_이현진.png',
                    position: {
                        name:"아포짓 스파이커",
                        img:"./assets/icon/opposite-spiker.svg",
                    },
                    team: { name: "대전 삼성화재 블루팡스" }
                },
                {
                    id:32,
                    name: "한선수",
                    img: './assets/players/jumbos/jum_S_한선수.png',
                    position: {
                        name:"세터",
                        img:"./assets/icon/setter.svg",
                    },
                    team: { name: "인천 대한항공 점보스" }
                },
            ],
        },
        players:[
            {
                id:0,
                name: "박유현",
                img: './assets/players/bluefangs/blu_L_박유현.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:1,
                name: "안지원",
                img: './assets/players/bluefangs/blu_L_안지원.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:2,
                name: "조국기",
                img: './assets/players/bluefangs/blu_L_조국기.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:3,
                name: "김재휘",
                img: './assets/players/bluefangs/blu_MB_김재휘.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:4,
                name: "김정윤",
                img: './assets/players/bluefangs/blu_MB_김정윤.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:5,
                name: "김준우",
                img: './assets/players/bluefangs/blu_MB_김준우.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:6,
                name: "손태훈",
                img: './assets/players/bluefangs/blu_MB_손태훈.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:7,
                name: "양수현",
                img: './assets/players/bluefangs/blu_MB_양수현.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:8,
                name: "김우진",
                img: './assets/players/bluefangs/blu_OH_김우진.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:9,
                name: "김정호",
                img: './assets/players/bluefangs/blu_OH_김정호.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:10,
                name: "손현종",
                img: './assets/players/bluefangs/blu_OH_손현종.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:11,
                name: "이시몬",
                img: './assets/players/bluefangs/blu_OH_이시몬.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:12,
                name: "이윤수",
                img: './assets/players/bluefangs/blu_OH_이윤수.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:13,
                name: "이현진",
                img: './assets/players/bluefangs/blu_OP_이현진.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:14,
                name: "노재욱",
                img: './assets/players/bluefangs/blu_S_노재욱.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:15,
                name: "이재현",
                img: './assets/players/bluefangs/blu_S_이재현.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            {
                id:16,
                name: "이호건",
                img: './assets/players/bluefangs/blu_S_이호건.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "대전 삼성화재 블루팡스" }
            },
            // 인천 대한항공 점보스
            {
                id:17,
                name: "강승일",
                img: './assets/players/jumbos/jum_L_강승일.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:18,
                name: "송민근",
                img: './assets/players/jumbos/jum_L_송민근.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:19,
                name: "정성민",
                img: './assets/players/jumbos/jum_L_정성민.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:20,
                name: "김규민",
                img: './assets/players/jumbos/jum_MB_김규민.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:21,
                name: "김민재",
                img: './assets/players/jumbos/jum_MB_김민재.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:22,
                name: "이수황",
                img: './assets/players/jumbos/jum_MB_이수황.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:23,
                name: "조재영",
                img: './assets/players/jumbos/jum_MB_조재영.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:24,
                name: "진지위",
                img: './assets/players/jumbos/jum_MB_진지위.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:25,
                name: "곽승석",
                img: './assets/players/jumbos/jum_OH_곽승석.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:26,
                name: "이준",
                img: './assets/players/jumbos/jum_OH_이준.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:27,
                name: "정지석",
                img: './assets/players/jumbos/jum_OH_정지석.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:28,
                name: "정한용",
                img: './assets/players/jumbos/jum_OH_정한용.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:29,
                name: "김준호",
                img: './assets/players/jumbos/jum_OP_김준호.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:30,
                name: "김형진",
                img: './assets/players/jumbos/jum_S_김형진.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:31,
                name: "유광우",
                img: './assets/players/jumbos/jum_S_유광우.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            {
                id:32,
                name: "한선수",
                img: './assets/players/jumbos/jum_S_한선수.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "인천 대한항공 점보스" }
            },
            // 천안 현대캐피탈 스카이워커스
            {
                id:33,
                name: "허수봉",
                img: './assets/players/skywalkers/sky_OP_허수봉.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:34,
                name: "문성빈",
                img: './assets/players/skywalkers/sky_OP_문성빈.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:35,
                name: "김선호",
                img: './assets/players/skywalkers/sky_OH_김선호.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:36,
                name: "전광인",
                img: './assets/players/skywalkers/sky_OH_전광인.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:37,
                name: "이승준",
                img: './assets/players/skywalkers/sky_OH_이승준.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:38,
                name: "이시우",
                img: './assets/players/skywalkers/sky_OH_이시우.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:39,
                name: "이현승",
                img: './assets/players/skywalkers/sky_S_이현승.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:40,
                name: "이준협",
                img: './assets/players/skywalkers/sky_S_이준협.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:41,
                name: "차영석",
                img: './assets/players/skywalkers/sky_MB_차영석.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:42,
                name: "김진영",
                img: './assets/players/skywalkers/sky_MB_김진영.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:43,
                name: "최민호",
                img: './assets/players/skywalkers/sky_MB_최민호.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:44,
                name: "정태준",
                img: './assets/players/skywalkers/sky_MB_정태준.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:45,
                name: "박경민",
                img: './assets/players/skywalkers/sky_R_박경민.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            {
                id:46,
                name: "오은렬",
                img: './assets/players/skywalkers/sky_R_오은렬.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "천안 현대캐피탈 스카이워커스" }
            },
            // 수원 한국전력 VIXTORM
            {
                id:47,
                name: "김동영",
                img: './assets/players/skywalkers/sky_OP_김동영.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:48,
                name: "이태호",
                img: './assets/players/skywalkers/sky_OP_이태호.png',
                position: {
                    name:"아포짓 스파이커",
                    img:"./assets/icon/opposite-spiker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:49,
                name: "서재덕",
                img: './assets/players/skywalkers/sky_OH_서재덕.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:50,
                name: "구교혁",
                img: './assets/players/skywalkers/sky_OH_구교혁.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:51,
                name: "신성호",
                img: './assets/players/skywalkers/sky_OH_신성호.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:52,
                name: "박승수",
                img: './assets/players/skywalkers/sky_OH_박승수.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:53,
                name: "임성진",
                img: './assets/players/skywalkers/sky_OH_임성진.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:54,
                name: "강우석",
                img: './assets/players/skywalkers/sky_OH_강우석.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:55,
                name: "김건희",
                img: './assets/players/skywalkers/sky_OH_김건희.png',
                position: {
                    name:"아웃사이드 히터",
                    img:"./assets/icon/outside-hitter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:56,
                name: "김주영",
                img: './assets/players/skywalkers/sky_S_김주영.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:57,
                name: "이원중",
                img: './assets/players/skywalkers/sky_S_이원중.png',
                position: {
                    name:"세터",
                    img:"./assets/icon/setter.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:58,
                name: "조근호",
                img: './assets/players/skywalkers/sky_MB_조근호.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:59,
                name: "전진선",
                img: './assets/players/skywalkers/sky_MB_전진선.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:60,
                name: "정성환",
                img: './assets/players/skywalkers/sky_MB_정성환.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:61,
                name: "신영석",
                img: './assets/players/skywalkers/sky_MB_신영석.png',
                position: {
                    name:"미들 블로커",
                    img:"./assets/icon/middle-blocker.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            {
                id:62,
                name: "이지석",
                img: './assets/players/skywalkers/sky_L_이지석.png',
                position: {
                    name:"리베로",
                    img:"./assets/icon/libero.svg",
                },
                team: { name: "수원 한국전력 VIXTORM" }
            },
            // 
        ],
    }),
})
