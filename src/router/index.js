import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prestamos',
    component: () => import("../components/Prestamos")
  },
  {
    path: '/libros',
    name: 'libros',
    component: () => import("../components/Libros")
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import("../components/Usuarios")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
