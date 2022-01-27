<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Movie from "./models/movie";
import movieApi from "./api/index";
export default {
  components: {
    Header,
  },
  created() {
    movieApi.getAll().then((res) => {
      const movies = res.data.movies.map((m) => new Movie(m));
      this.$store.dispatch("setMovies", movies);
    });
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
