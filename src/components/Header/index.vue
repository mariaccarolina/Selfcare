<script setup></script>

<template>
  <header>
    <img class="logo" src="../../assets/logo.svg" alt="Logo" />

    <figure>
      <img src="../../assets/lupa.svg" alt="Lupa" />
      <img src="../../assets/usuario.svg" alt="Usuario" />

      <router-link to="/carrinho">
        <img src="../../assets/carrinho.svg" alt="Carrinho" />
      </router-link>
    </figure>
  </header>
  <div></div>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
}

div {
  background-image: url("/banner.png");
  height: 50vh;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    background-image: url("/banner1.png");
    background-position: center;
  }
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
