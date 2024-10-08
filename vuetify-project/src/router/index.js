import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/admin',
    component: () => import(/* webChunkName: admin */ "@/views/Dashboard.vue")
  },
  {
    path: '/admin/manager-category',
    component: () => import(/* webpackChunkName: dashboard */ "@/views/ManageCategory.vue")
  },
  {
    path: '/admin/manager-product',
    component: () => import(/* webpackChunkName: dashboard */ "@/views/ManageProduct.vue")
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})