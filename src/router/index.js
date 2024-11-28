import { createRouter, createWebHistory } from 'vue-router';
import ShortSleevePage from '../pages/ShortSleevePage/ShortSleevePage.vue';
import LongSleevePage from '../pages/LongSleevePage/LongSleevePage.vue';
import LongPantsPage from '../pages/LongPantsPage/LongPantsPage.vue';
import ShortPantsPage from '../pages/ShortPantsPage/ShortPantsPage.vue';
import CoatPage from '../pages/CoatPage/CoatPage.vue';
import ShoesPage from '../pages/ShoesPage/ShoesPage.vue';
import testPage from '../pages/TestPage/testPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        redirect: '/shortSleeve'
        },
        {
            path: '/shortSleeve',
            name: 'ShortSleeve',
            component: ShortSleevePage
        },
        {
            path: '/longSleeve',
            name: 'LongSleeve',
            component: LongSleevePage
        },
        {
            path: '/longPants',
            name: 'LongPants',
            component: LongPantsPage
        },
        {
            path: '/shortPants',
            name: 'ShortPants',
            component: ShortPantsPage
        },
        {
            path: '/coat',
            name: 'Coat',
            component: CoatPage
        },
        {
            path: '/shoes',
            name: 'Shoes',
            component: ShoesPage
        },
        {
            path: '/test',
            name: 'test',
            component: testPage
        },
    ]
});

export default router;