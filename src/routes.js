import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from '@/pages/MainPage.vue'
import MainBuildPage from './pages/MainBuildPage.vue'
import MainLookupPage from './pages/MainLookupPage.vue'
import MyPage from './pages/MyPage.vue'
import RankingPage from './pages/RankingPage.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/", component: MainPage},
        { path: "/build", component: MainBuildPage},
        { path: "/look", component: MainLookupPage},
        { path: "/my", component: MyPage},
        { path: "/rank", component: RankingPage},
    ]
});

export default router;