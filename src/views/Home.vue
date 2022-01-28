<template>
  <div class="home">
    <div style="margin: 20px;">
      <input v-model="searchText" type="text" placeholder="search" @keyup="handleKeyup">

      <ul v-show="searchText && searchResult.length">
        <li v-for="movie in searchResult" :key="movie.id" @click="handleClickMovieResult(movie.id)">
          {{movie.title}}
        </li>
      </ul>
    </div>

    <Category v-for="cat in categories" :key="cat.name" :category="cat" />
  </div>
</template>

<script>
import movieApi from "../api/index";
import Category from "../components/Category.vue";
import Movie from "../models/movie";

export default {
  components: { Category },
  name: "Home",
  data() {
    return {
      searchText: '',
      movies: [],
      searchResult: []
    };
  },
  computed: {
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
  methods: {
    handleKeyup: function() {
      movieApi.search(this.searchText).then((res) => {
        this.searchResult = res.data.movies.map((m) => new Movie(m));
      });

      console.log('resultat: ');
      console.log(this.searchResult);
    },
    handleClickMovieResult: function (id) {
      console.log('search result clicked!');
      console.log({id});
    }
  },
  created() {
    movieApi.getAll().then((res) => {
      this.movies = res.data.movies.map((m) => new Movie(m));
    });
  },
};
</script>
