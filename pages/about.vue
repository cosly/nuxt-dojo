<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quis voluptate blanditiis non libero fugiat omnis nobis consequatur! Vel consequuntur nobis fugit harum quae minima! Pariatur ratione consectetur quasi eveniet!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quis voluptate blanditiis non libero fugiat omnis nobis consequatur! Vel consequuntur nobis fugit harum quae minima! Pariatur ratione consectetur quasi eveniet!</p>
        <div>Currency: {{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>