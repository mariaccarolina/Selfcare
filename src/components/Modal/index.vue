<template>
  <section class="modal-overlay" @click.self="emit('fechar')">
    <div class="modal-container">
      <button class="fechar" @click="emit('fechar')">x</button>
      <h2>{{ produto.name }}</h2>
      <img :src="produto.image" :alt="produto.name" />
      <h4>R$:{{ produto.price }}</h4>
      <p>{{ produto.description }}</p>
      <div>
        <button class="btnComprar">Comprar</button>
        <button class="btnCarrinho">Adicionar Carrinho</button>
      </div>
      <h4>Avaliações:</h4>
      <div v-if="produto.reviews && produto.reviews.length" class="avaliacao">
        <ul>
          <li v-for="(review, index) in produto.reviews" :key="index">
            {{ review }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["fechar"]);
defineProps(["produto"]);
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* escurece o fundo */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.modal-container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
 text-align: center;
  img {
    margin: 20px;
  }
}

.fechar {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #064603;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.avaliacao{
    border: solid 1px  #5ca720;
    border-radius: 10px;
    padding: 0 2.5rem;
    text-align: left;
    ul{
        list-style: none;
    }
}
button{
    border: none;
    padding: 10px 0;
    margin: 10px;
    border-radius: 10px;
    color: white;
}
.btnComprar{
    width: 10vw;
    background-color: #5ca720;
}

.btnCarrinho{
    width: 11vw;
    background-color: #064603;
}
</style>
