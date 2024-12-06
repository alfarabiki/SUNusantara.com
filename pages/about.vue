<template>
    <section id="about" class="py-16 px-8 section">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-primary">About Us</h1>
            <p class="text-lg text-gray-600 mt-4">We are a spice export company with a vision and mission to bring the natural wealth of Indonesia to the world.</p>
        </div>

        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-primary text-center md:text-left">
                    Vision 
                </h2>
                <p class="text-lg text-gray-600 text-center md:text-left">
                    Our vision is to share the wealth and joy of nature from the Nusantara with the world by providing the finest quality products. These products are grown with care and precision, ensuring premium standards for our global customers.</p>
                <h2 class="text-2xl font-semibold text-primary text-center md:text-left">
                    Mission 
                </h2>
                <p class="text-lg text-gray-600 text-center md:text-left">
                    Our mission is to support local economic growth by marketing high-value Indonesian resources to international markets, while also sharing smiles and laughter with the people of this rich and beautiful Nusantara.
                </p>
            </div>

            <div>
                <img src="../assets/images/team.jpg" alt="Team" class="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    addScrollAnimation();
});

const addScrollAnimation = () => {
    const section = document.querySelector('#about');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    observer.observe(section);
};
</script>

<style scoped>
.section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.text-primary {
    font-family: "Open Sans", cursive;
    color: #b78d5b;
    font-size: 30px;
}
</style>
