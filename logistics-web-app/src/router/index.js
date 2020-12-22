import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/add-product',
    name: 'AddProducts',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/delivery-tours',
    name: 'DeliveryTours',
    component: () => import('../views/DeliveryTours.vue')
  },
  {
    path: '/add-delivery-tour',
    name: 'AddDeliveryTour',
    component: () => import('../views/AddDeliveryTour.vue')
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import('../views/Vehicles.vue')
  },
  {
    path: '/add-vehicle',
    name: 'AddVehicle',
    component: () => import('../views/AddVehicle.vue')
  },
  {
    path: '/vehicles-maps',
    name: 'VehiclesMaps',
    component: () => import('../views/VehiclesMaps.vue')
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/Staff.vue')
  },
  {
    path: '/add-staff',
    name: 'AddStaff',
    component: () => import('../views/AddStaff.vue')
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../views/Customers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'Login' && store.state.token == null) next({name: 'Login'})
  else if(to.path == '/') next({name: 'Dashboard'})
  else next()
})

export default router
