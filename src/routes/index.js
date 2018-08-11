import orderRegistPage from '../components/OrderRegistPage.vue'
import mainPage from '../components/MainPage.vue'
import orderCompletePage from '../components/OrderCompletePage.vue'
import orderAcceptanceListPage from '../components/OrderAcceptanceListPage.vue'
import orderAcceptanceCompletePage from '../components/OrderAcceptanceCompletePage.vue'

export default [
    {
        path: '/orderRegistPage',
        name: 'orderRegistPage',
        component: orderRegistPage
    },
    {
        path: '/',
        name: 'mainPage',
        component: mainPage
    },
    {
        path: '/orderCompletePage',
        name: 'orderCompletePage',
        component: orderCompletePage
    },
    {
        path: '/orderAcceptanceListPage',
        name: 'orderAcceptanceListPage',
        component: orderAcceptanceListPage
    },
    {
        path: '/orderAcceptanceCompletePage',
        name: 'orderAcceptanceCompletePage',
        component: orderAcceptanceCompletePage
    }
]
