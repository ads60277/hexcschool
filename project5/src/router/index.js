import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue')
      }
    ]
  },
  {
    path: '/backhome',
    component: () => import('../views/backend/BackHome.vue'),
    children: [
      {
        path: '/backend/orders',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: '/backend/coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: '/backend/products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: '/backend/picstorage',
        component: () => import('../views/backend/Picstorage.vue')
      }]
  }
]

const router = new VueRouter({
  routes
})

export default router
