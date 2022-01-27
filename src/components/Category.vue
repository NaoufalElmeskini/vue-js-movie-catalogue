<template>
  <div class="category">
    <div class="title">{{ category.name }}</div>
    <div class="category-movies">
      <div
        class="movie-tuile"
        v-for="movie in category.movies"
        :key="movie.id"
        :style="{ backgroundImage: `url(${movie.backdrop})` }"
        @click="handleClick(movie.id)"
      >
        <div class="overlay"></div>
        <div class="title-movie">{{ movie.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: "movie-details", params: { id } });
    },
  },
};
</script>

<style scoped>
.category {
  padding: 0 20px;
}
.category .title {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.category-movies {
  display: flex;
  gap: 20px;
}
.movie-tuile {
  position: relative;
  min-width: 250px;
  height: 140px;
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
}

.movie-tuile:hover {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.title-movie {
  color: #fff;
  font-size: 14px;
  margin: 0 0 10px 15px;
}
</style>
