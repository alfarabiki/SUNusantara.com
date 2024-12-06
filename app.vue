<template>
  <div>
    <Header />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/global/header.vue'
import Footer from './components/global/footer.vue'
</script>

<style>
body {
  margin: 0;
  background-color: #f9f9f9;
  font-family: "Open Sans", sans-serif;
}
</style>
