<template>
  <div class="header">
    <div class="logo">wookie movies</div>
    <div class="search"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
}

.header .search ul {
  position: absolute;
  top: 60px;
  width: 100%;
  background: darkgray;
}
</style>
