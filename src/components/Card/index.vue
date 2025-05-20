<script setup>
defineProps({
  nome: String,
  imagem: String,
  preco: [Number, String]
});
</script>

<template>
  <div class="card">
    <img :src="imagem" :alt="nome" />
    <h2>{{ nome }}</h2>
    <p>Preço: <span>R$ {{ preco }}</span></p>
  </div>
</template>



<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  transition: transform 0.2s;
  cursor: pointer;

  h2 {
    margin: 10px 0 10px 0;
  }

  p {
    font-weight: 600;
  }

  span {
  color: #5ca720;
  font-weight: 800;
}


  &:hover {
    transform: scale(1.02);
  }
}

img {
  width: 100%;
}
</style>
