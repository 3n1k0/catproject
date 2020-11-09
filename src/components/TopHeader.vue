<template>
  <nav>
    <a class="brand" href="/">Catcyclopedia <i class="fas fa-paw"></i></a>
    <div class="navbar-right">
      <div class="nav-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/random">Random</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background: rgb(104, 67, 104);
  opacity: 0.7;
}

.navbar-right {
  display: flex;
  justify-content: flex-end;
}

.nav-item {
  margin: 10px;
  padding: 10px;
}

.brand {
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0px 30px 0px 20px;
  min-width: 200px;
}

@media only screen and (min-width: 1200px) {
  nav {
    padding: 0px 50px;
    justify-content: space-between;
  }

  .navbar-right {
    padding-right: 60px;
  }

  .brand {
    font-size: 25px;
  }
}
</style>
