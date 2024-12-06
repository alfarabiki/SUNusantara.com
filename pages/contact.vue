<template>
    <section id="contact" class="container mx-auto px-6 py-16 flex flex-col md:flex-row section fade-in-on-scroll">
        <!-- Image Section -->
        <div class="w-full md:w-1/2 flex justify-center items-center">
            <div class="relative">
                <img :src="images[currentImageIndex]" alt="Contact Us"
                    class="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500"
                    style="height: calc(100vh - 10rem);" />
                <button @click="prevImage"
                    class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75">
                    ‹
                </button>
                <button @click="nextImage"
                    class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75">
                    ›
                </button>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="w-full md:w-1/2 md:pl-12 flex flex-col justify-center items-center">
            <h2 class="text-3xl font-semibold text-primary text-center mb-6">Contact Us</h2>
            <p class="text-lg text-gray-600 mb-8 text-center">
                Let’s Build Connections! Feel free to reach out for partnerships, export inquiries, or any collaboration opportunities.
            </p>

            <!-- WhatsApp Button -->
            <!-- <a href="https://wa.me/yourwhatsappnumber" target="_blank"
                class="inline-flex items-center bg-green-500 text-white py-3 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300 mb-8">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
                        <path
                            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <span class="text-lg">Chat with us on WhatsApp</span>
                </div>
            </a> -->

            <!-- Contact Form -->
            <form @submit.prevent="submitForm" class="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" v-model="form.name"
                        class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" v-model="form.email"
                        class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary">
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" v-model="form.message" rows="4"
                        class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary"></textarea>
                </div>
                <button type="submit" :disabled="isLoading"
                    class="w-full bg-primary text-white py-2 px-4 rounded-lg transition duration-300 flex justify-center items-center">
                    <span v-if="isLoading" class="loader mr-2"></span>
                    {{ isLoading ? 'Sending...' : 'Send Message' }}
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(false);

// Form data
const form = ref({
    name: "",
    email: "",
    message: "",
});

const submitForm = async () => {
    if (isLoading.value) return;

    isLoading.value = true;
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz939QIdEmbXzVm-bXK3Zys9OcvyibBE3d1iUQic4Wu7XlfoH6vNQGyI_0Q9JWu4bVj/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form.value),
        }).then(() => {
            alert('Data submitted successfully!');
        }).catch((error) => {
            console.error('Error:', error);
        });
        form.value = { name: "", email: "", message: "" };
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    } finally {
        isLoading.value = false;
    }
};

// Slideshow logic
import delivery1 from "~/assets/images/rempah1.jpg";
import delivery2 from "~/assets/images/rempah2.jpg";
import delivery3 from "~/assets/images/delivery.jpg";

const images = [delivery1, delivery2, delivery3];
const currentImageIndex = ref(0);

const prevImage = () => {
    currentImageIndex.value =
        (currentImageIndex.value - 1 + images.length) % images.length;
};

const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};
onMounted(() => {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing setelah animasi dimulai
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
</script>

<style scoped>
section {
    min-height: 60vh;
}

.text-primary {
    font-family: "Open Sans", cursive;
    color: #b78d5b;
    font-size: 30px;
}

a {
    display: inline-block;
}

button {
    cursor: pointer;
}

.section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.loader {
    border: 2px solid #f3f3f3;
    /* Warna luar */
    border-top: 2px solid #fff;
    /* Warna bagian atas */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
