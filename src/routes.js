import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from '@/pages/LandingPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import TeamBuildPage from './pages/TeamBuildPage.vue'
import TeamLookupPage from './pages/TeamLookupPage.vue'
import MyPage from './pages/MyPage.vue'
import RankingPage from './pages/RankingPage.vue'
import AdminPage from './pages/AdminPage.vue'
import MailingPage from './pages/MailingPage.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: 'main', component: LandingPage },
        { path: "/team", name: 'team', component: TeamPage },
        { path: "/build", name: 'build', component: TeamBuildPage },
        { path: "/look", name: 'look', component: TeamLookupPage },
        { path: "/my", name: 'my', component: MyPage },
        { path: "/rank", name: 'rank', component: RankingPage },
        { path: "/mailing", name: 'mailing', component: MailingPage },

        { path: "/admin/admin", name: 'admin', component: AdminPage },
    ]
});

export default router;