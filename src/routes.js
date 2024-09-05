import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from '@/pages/MainPage.vue'
import MainBuildPage from './pages/MainBuildPage.vue'
import MainLookupPage from './pages/MainLookupPage.vue'
import MyPage from './pages/MyPage.vue'
import RankingPage from './pages/RankingPage.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/", name:'main', component: MainPage},
        { path: "/build", name:'build', component: MainBuildPage},
        { path: "/look", name:'look', component: MainLookupPage},
        { path: "/my", name:'my', component: MyPage},
        { path: "/rank", name:'rank', component: RankingPage},
    ]
});

export default router;