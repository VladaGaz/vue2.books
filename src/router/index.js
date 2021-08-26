import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import Book from '../views/Book.vue'
import Favorites from '../views/Favorites.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
