<script setup></script>

<template>
  <header>
    <img class="logo" src="../../assets/logo.svg" alt="Logo" />

    <figure>
      <img src="../../assets/lupa.svg" alt="Lupa" />
      <img src="../../assets/usuario.svg" alt="Usuario" />
      <img src="../../assets/carrinho.svg" alt="Carrinho" />
    </figure>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
}

img {
  cursor: pointer;
}

.logo {
  margin-left: 20px;
}

figure {
  width: 15vw;
  display: flex;
  max-width: 200px;
  justify-content: space-evenly;
}
</style>
