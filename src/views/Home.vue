<template>
  <div class="home">
    <Category v-for="cat in categories" :key="cat.name" :category="cat" />
  </div>
</template>

<script>
import Category from "../components/Category.vue";
import Movie from "../models/movie";

export default {
  components: { Category },
  name: "Home",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
    categories() {
      return this.movies.reduce((categories, movie) => {
        movie.genres.forEach((genre) => {
          const category = categories.find((c) => c.name === genre);
          if (category) {
            category.movies.push(movie);
          } else {
            categories.push({ name: genre, movies: [movie] });
          }
        });
        return categories;
      }, []);
    },
  },
};
</script>
