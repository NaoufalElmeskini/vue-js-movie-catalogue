<template>
  <div className="category">
    <div className="title"></div>
    <div className="category-movies"></div>
  </div>
</template>

<script>
export default {
  name: "Category",
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
  min-width: 250px;
  height: 140px;
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;
}

.movie-tuile:hover {
  transform: scale(1.1);
}
</style>
