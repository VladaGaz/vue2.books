import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  },
  mutations: {
    addBooks(state, books) {
      state.books = books
    },
    addFavorites(state, favorit) {
      state.favorites.push(favorit)

      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    deleteFavorit(state, id) {
      const idx = state.favorites.findIndex(favorit => favorit.id === id)

      state.favorites.splice(idx, 1)
      localStorage.removeItem(idx)

      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    deleteBooks(state) {
      state.books = []
    },
  },
  actions: {
  },
  getters: {
    allBooks(state) {
      return state.books
    },
    getBook: (state) => (id) => {
      return state.books.find(book => book.id === id)
    },
    getFavorites(state) {
      return state.favorites
    },
  }
})
