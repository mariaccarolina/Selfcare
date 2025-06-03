<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from "../Card/index.vue";
import Modal from "../Modal/index.vue"

const produtos = ref([]);

const modalAberto = ref(false);
const produtoSelecionado = ref(null);

onMounted(async () => {
  try {
    const resposta = await axios.get("https://simple-selfcare-api.onrender.com/");
    produtos.value = resposta.data;
    console.log(resposta.data)
  } catch (erro) {
    console.error("Erro ao buscar os produtos:", erro);
  }
});

function abrirModal(produto) {
  produtoSelecionado.value = produto;
  modalAberto.value = true;
  console.log("batata");
  console.log(produto)
}

function fecharModal() {
  modalAberto.value = false;
  produtoSelecionado.value = null
}
async function captureId(id){
  const resp = await axios.post(`https://simple-selfcare-api.onrender.com/carrinho/${id}`);
  const dados = resp.data
  console.log(dados)
}

</script>

<template>

  <div class="container">
    <Modal v-if="modalAberto" 
    :produto="produtoSelecionado"
    @click="fecharModal"/>
    <Card
      v-for="(produto, index) in produtos"
      :key="index"
      :nome="produto.name"
      :imagem="produto.image"
      :preco="produto.price"
      :id="produto.id"
      @click="abrirModal(produto)"
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
