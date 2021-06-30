import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SwaggerApiDoc from '../views/SwaggerApiDoc.vue'
import JsonFormatter from '../views/JsonFormatter.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/swagger-api-doc',
    name: 'SwaggerApiDoc',
    component: SwaggerApiDoc
  },
  {
    path: '/jsonformatter',
    name: 'JsonFormatter',
    component: JsonFormatter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
