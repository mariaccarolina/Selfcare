<template>
    <section @click.self="emit('fechar')">
        <h1>Modal</h1>
        <h2>{{ produto.name }}</h2>
        <img :src="produto.image" :alt="produto.name">
        <p>{{ produto.description }}</p>
        <button @click="emit('fechar')">x</button>
    </section>
</template>

<script setup>
const emit = defineEmits(['fechar'])
defineProps(['produto'])
</script>