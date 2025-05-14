<script setup>
import produtos from "../../data/produtos.json";

import Card from "../Card/index.vue";
</script>

<template>
  <div class="container">
    <Card
      v-for="(produto, index) in produtos"
      :key="index"
      :nome="produto.nome"
      :imagem="produto.imagem"
      :preco="produto.preco"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
