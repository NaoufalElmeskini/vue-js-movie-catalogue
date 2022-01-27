<template>
  <div class="header">
    <div class="logo">wookie movies</div>
    <div class="search">
      <input type="text" v-model="searchText" />
      <ul v-show="searchText && searchResults.length">
        <li v-for="m in searchResults" :key="m.id" @click="handleClick(m.id)">
          {{ m.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import movieApi from "../api/index";

export default {
  name: "Header",
  data() {
    return {
      searchText: "",
      searchResults: [],
    };
  },
  watch: {
    searchText: function (text) {
      movieApi.search(text).then((res) => {
        this.searchResults = res.data.movies;
      });
    },
  },
  methods: {
    handleClick(id) {
      this.searchText = "";
      this.$router.push({ name: "movie-details", params: { id } });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  height: 100px;
  border-bottom: 3px solid;
  margin-bottom: 40px;
}

.header .logo {
  display: flex;
  width: 100px;
  align-self: center;
  font-size: 2rem;
  line-height: 1;
  text-transform: uppercase;
  margin-left: 25px;
}

.header .search {
  display: flex;
  align-self: flex-end;
  margin: 0 15px 10px auto;
  position: relative;
}

.header .search input {
  width: 300px !important;
  height: 28px;
}

.header .search ul {
  position: absolute;
  top: 25px;
  width: 100%;
  background: darkgray;
  padding: 10px 0 0 15px;
  list-style: none;
}
.header .search li {
  height: 25px;
  cursor: pointer;
}
</style>
