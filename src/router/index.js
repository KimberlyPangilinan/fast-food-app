import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/authenticated/HomePage.vue'
import ProductsPage from '../views/authenticated/Products/ProductsPage.vue'
import ProductPage from '../views/authenticated/Products/ProductPage.vue'
import LoginPage from '../views/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/products:id",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
