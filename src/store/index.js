import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    getMovies(store) {
      return store.movies;
    },
    getMovieById: store => id => {
      return store.movies.find(movie => movie.id === id);
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    setMovies(store, movies) {
      store.commit("setMovies", movies);
    }
  },
  modules: {},
});
