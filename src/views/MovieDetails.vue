<template>
  <div class="container">
    <div class="movie-details">
      <div class="movie-description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
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
