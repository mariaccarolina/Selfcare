<script setup>
defineProps({
  nome: String,
  imagem: String,
  preco: Number,
});
</script>

<template>
  <div class="card">
    <img :src="imagem" :alt="nome" />
    <h2>{{ nome }}</h2>
    <span>{{ preco }},00</span>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
}

img {
  width: 100%;
}
</style>
