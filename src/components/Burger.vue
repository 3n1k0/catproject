<template>

      <div class="burger-menu">
        <div class="stripe"></div>
        <div class="stripe"></div>
        <div class="stripe"></div>
        </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>


.stripe{
  background: white;
  width: 100%;
  height: 100%;
    width: 30px;
  height: 3px;
}

.burger-menu{
  display: grid;
  height: 30px;
  align-items: space-between;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
}

</style>
