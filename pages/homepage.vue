<template>
    <section id="homepage" class="py-1 px-8 section">
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :modules="modules" :speed="2000" class="mySwiper">
            <swiper-slide v-for="(slide, index) in slides" :key="index"
                class="flex flex-col lg:flex-row items-center justify-between px-8 py-8">
                <div class="flex flex-col lg:flex-row items-center justify-between px-8 py-8">
                    <div class="w-full lg:w-1/3 space-y-4 mb-8 lg:mb-0 pr-1 text-center lg:text-left">
                        <h1 class="text-2xl lg:text-1xl font-bold">
                            {{ slide.text }} <br />
                            <span class="font-bold text-primary">{{ slide.textBold }}</span>
                        </h1>
                        <p class="text-lg text-gray-600">
                            {{ slide.desc }}
                        </p>
                        <!-- <button
                            class="mt-6 px-4 py-2 bg-black text-white font-semibold rounded-full flex items-center justify-center hover:bg-primary transition-all duration-1500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5l7.5 7.5m0 0l-7.5 7.5m7.5-7.5H3" />
                            </svg>
                        </button> -->
                    </div>
                    <div class="w-full lg:w-2/3">
                        <NuxtImg :src="slide.image" :alt="'Rempah Slide ' + (index + 1)"
                            class="rounded-lg w-full h-auto object-cover" loading="lazy"/>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import gambar
import Rempah1 from '/images/AsianFoodIngridient.webp';
import Rempah2 from '/images/rempah2.webp';
import Rempah3 from '/images/rempah3.webp';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            slides: [
                {
                    text: "Welcome to",
                    textBold: "PT. Sumberdaya Unggul Nusantara",
                    desc: "We provide high-quality spice export services from Indonesia to the world.",
                    image: Rempah1,
                },
                {
                    text: "The Future of Global Trade",
                    textBold: "Begins with Indonesian Spices",
                    desc: "Sumberdaya Unggul Nusantara connects Indonesia to the world through premium, sustainable resources, sharing happiness and kindness through the wealth of Indonesia for the world.",
                    image: Rempah2,
                },
                {
                    text: "From the Land of Nusantara",
                    textBold: "To the World",
                    desc: "We bring the finest resources from across Indonesia to you. Each resource is a symbol of dedication, passion, and the rich traditions of the Nusantara.",
                    image: Rempah3,
                },
            ],
        };
    },
    mounted() {
        this.addScrollAnimation();
    },
    methods: {
        addScrollAnimation() {
            const section = document.querySelector('#homepage');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            observer.observe(section);
        }
    }
};
</script>

<style scoped>
section {
    min-height: 60vh;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.text-primary {
    font-family: "Libre", cursive;
    color: #b78d5b;
    font-size: 30px;
}
</style>
