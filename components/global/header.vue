<template>
    <header class="bg-black text-white shadow-md">
        <div class="container mx-auto flex justify-between items-center p-1">
            <a href="/" class="flex items-center space-x-2">
            <NuxtImg src="/images/logo.webp" alt="Logo PT Ekspor Rempah" class="h-20" />
            <span class="text-lg font-bold logo-text">Sumberdaya Unggul Nusantara</span>
            </a>


            <div class="flex items-center">
                <Navbar class="hidden md:flex" />

                <button @click="toggleMenu" class="md:hidden focus:outline-none focus:ring-2 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="isMenuOpen" class="bg-primary md:hidden">
            <ul class="space-y-2 p-4">
                <li>
                    <NuxtLink to="/" @click="closeMenu" class="block hover:text-primary">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#about" @click="closeMenu" class="block hover:text-primary">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#products" @click="closeMenu" class="block hover:text-primary">Products</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#team" @click="closeMenu" class="block hover:text-primary">Team</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#contact" @click="closeMenu" class="block hover:text-primary">Contact</NuxtLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/global/navbar.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<style scoped>
.logo-text {
    font-family: "Poppins", cursive;
    color: white;
    font-size: 20px;
}
</style>
