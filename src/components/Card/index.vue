<script setup>
const props = defineProps(['nome', 'imagem', 'preco']);
//const emit = defineEmits(['add-to-cart']);//defineEmits(['nome-do-evento'])

// function handleClick() {
//   emit('add-to-cart', props.id); //emit('nome-do-evento', dados/paramentros)
// }
</script>


<template>
  <section class="card">
    <img :src="imagem" :alt="nome" />
    <h2>{{ nome }}</h2>
    <div>
      <p>Preço: <span>R$ {{ preco }}</span></p>
      <!-- <button  @click="handleClick">Adicionar ao Carrinho</button> -->
    </div>
  </section>
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
    font-size: 18px;
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

button{
  background-color: #5ca720;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
