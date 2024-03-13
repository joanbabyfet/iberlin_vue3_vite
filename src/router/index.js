import { createRouter, createWebHistory } from 'vue-router'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入路由组件
import home from '@/views/index.vue'
import about from '@/views/about.vue'
import news from '@/views/news/index.vue'
import news_detail from '@/views/news/detail.vue'
import products from '@/views/products.vue'
import application from '@/views/application.vue'
import contact from '@/views/contact.vue'
import contact_form from '@/views/contact_form.vue'
import not_found from '@/views/404.vue'
import maintenance from '@/views/maintenance.vue'

// 定义路由，每个路由都需要映射到一个组件
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'layout_home',
        },
        component: home,
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'layout_default',
            title: '興溢股份有限公司 关于我们',
        },
        component: about,
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            layout: 'layout_default',
        },
        component: news,
    },
    {
        path: '/news/:id',
        name: 'news_detail',
        meta: {
            layout: 'layout_default',
        },
        component: news_detail,
    },
    {
        path: '/application',
        name: 'application',
        meta: {
            layout: 'layout_default'
        },
        component: application,
    },
    {
        path: '/products',
        name: 'products',
        meta: {
            layout: 'layout_default'
        },
        component: products,
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
            layout: 'layout_default'
        },
        component: contact,
    },
    {
        path: '/contact_form',
        name: 'contact_form',
        meta: {
            layout: 'layout_default'
        },
        component: contact_form,
    },
    {
        // 404功能的路由建立
        path: '/:pathMatch(.*)',
        name: 'not_found',
        meta: {
            layout: 'layout_custom'
        },
        component: not_found,
    },
    {
        path: '/maintenance',
        name: 'maintenance',
        meta: {
            layout: 'layout_custom'
        },
        component: maintenance,
    },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//进度条配置
NProgress.configure({
    showSpinner: true //右上角显示转旋图标
})

//路由守卫
router.beforeEach((to) => {
    NProgress.start() // start progress bar
    if(to.meta.title) {
        document.title = to.meta.title
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.js` 挂载
export default router