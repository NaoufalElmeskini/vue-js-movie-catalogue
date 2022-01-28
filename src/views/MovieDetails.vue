<template>
  <div class="container">
    <div class="movie-details">
      <p>Hello from movie details!</p>
      <div class="movie-description">{{movie}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  computed: {
    movie() {
      console.log('router.params.id: ');
      console.log(this.$route.params.id);
      return this.$store.getters.getMovieById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}

.movie-details {
  padding: 15px 25px;
  display: flex;
  gap: 30px;
  max-width: 1000px;
  margin: auto;
}

.movie-details .poster {
  width: 342px;
  height: auto;
}

.movie-details .top {
  display: flex;
}

.movie-details .rating {
  margin-left: auto;
}

.movie-description {
  flex: 1;
}

.content-description {
  margin: 20px 0;
}
</style>
