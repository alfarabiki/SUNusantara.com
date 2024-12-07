<template>
  <section id="products" class="py-16 px-8 section">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary">Our Products</h1>
      <p class="text-lg text-gray-600 mt-4">
        Discover our exceptional range of Indonesian spices and premium coconut products, crafted to share the richness
        of Indonesia’s natural resources with the world.
      </p>
    </div>

    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
        <img :src="product.image" :alt="product.name" class="w-full h-auto object-cover rounded-lg mb-4"
          :class="{ 'opacity-75': product.comingSoon }" loading="lazy" />

        <h2 class="text-lg font-bold text-gray-800 mb-2">{{ product.name }}</h2>
        <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li v-for="(spec, specIndex) in product.specifications" :key="specIndex">{{ spec }}</li>
        </ul>
        <a :href="product.comingSoon ? '#' : 'https://wa.me/6281294421232'" target="_blank" :class="[
          'mt-5 px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300',
          product.comingSoon ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'
        ]" :style="product.comingSoon ? { pointerEvents: 'none' } : {}">
          {{ product.comingSoon ? "Coming Soon" : "Get Quotation" }}
        </a>
        <a :href="`/${product.url}`"
          class="mt-5 px-6 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300">
          Detail Product
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Product1 from '/images/product/coconut.webp';
import Product2 from '/images/product/blackpaper.webp';
import Product3 from '/images/product/TumericPowder.jpg';

const products = [
  {
    name: "CocoFiber & Cocopeat",
    url: "coconut",
    image: Product1,
    specifications: ["Moisture: Maximum 40%", "pH: 4.5 to 6", "High EC : 1", "Fiber Length : 20-30cm", "Packaging : Polyester Bag, Block & BOR"],
    comingSoon: false,
  },
  {
    name: "Black Paper",
    url: "blackpaper",
    image: Product2,
    specifications: ["500/550/560 G/L", "Moisture : 12-14% Maximum", "Piperin 4%", "FAQ 3% & MC : 0,5% Maximum", "Packaging : Polyester Bag & BOR"],
    comingSoon: false,
  },
  {
    name: "Turmeric",
    url: "Turmeric",
    image: Product3,
    specifications: ["Purity",
      "Moisture : <12% Dried & <8% Powder",
      "Size : Fresh 3-7cm ,Powder :80-120 mesh",
      "Colour : Bright Yellow to Natural Orange",
      "Packaging : Polyester, Food-Grade Plastic"],
    comingSoon: false,
  },
];
</script>

<style scoped>
.text-primary {
  font-family: "Libre", cursive;
  color: #b78d5b;
  font-size: 30px;
}

.group:hover img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.container {
  padding: 2rem 0;
}

.bg-white {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.bg-white:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.text-gray-800 {
  font-family: "Open Sans", sans-serif;
}

.list-disc {
  margin-top: 1rem;
}

.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>
