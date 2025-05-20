<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from "../Card/index.vue";

const produtos = ref([]);

onMounted(async () => {
  try {
    const resposta = await axios.get("https://simple-selfcare-api.onrender.com/");
    produtos.value = resposta.data;
    console.log(resposta.data)
  } catch (erro) {
    console.error("Erro ao buscar os produtos:", erro);
  }
});
</script>

<template>
  <div class="container">
    <Card
      v-for="(produto, index) in produtos"
      :key="index"
      :nome="produto.name"
      :imagem="produto.image"
      :preco="produto.price"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
