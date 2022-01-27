<template>
  <div class="container">
    <div class="movie-details">
      <div class="poster">
        <img :src="movie.poster" />
      </div>
      <div class="movie-description">
        <div class="top">
          <div>{{ `${movie.title} (${movie.imdbRating})` }}</div>
          <StarRating
            class="stars"
            star-size="15"
            :increment="0.1"
            :rating="movie.imdbRating / 2"
            :show-rating="false"
            :read-only="true"
          />
        </div>
        <div class="content-description">
          <div>
            {{ movie.releasedDate | getYear }} | {{ movie.duration }} |
            {{ movie.director }}
          </div>
          <div>Cast: {{ movie.cast.join(", ") }}</div>
        </div>
        <div>{{ movie.overview }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "MovieDetails",
  components: {
    StarRating,
  },
  computed: {
    movie() {
      return this.$store.getters.getMovieById(this.$route.params.id) || {};
    },
  },
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
.stars {
  margin-left: auto;
}
</style>
