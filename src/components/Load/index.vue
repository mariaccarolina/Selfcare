<script setup></script>

<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  width: 100px;
  height: 100px;
  border: 10px solid #ccc;
  border-top: 10px solid #5ca720;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 50px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
