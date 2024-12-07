<template>
    <section id="banner" class="parallax-banner section fade-in-on-scroll">
        <div class="overlay"></div>
        <div class="banner-content">
            <!-- <button @click="playVideo"
                class="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 3l14 9-14 9V3z" />
                </svg>
            </button> -->
        </div>

        <div v-if="isVideoPlaying"
            class="video-modal fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div class="relative w-full max-w-4xl">
                <iframe width="100%" height="400" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
                <button @click="closeVideo" class="absolute top-0 right-0 m-4 text-white text-2xl">
                    ✖
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ParallaxBanner",
    data() {
        return {
            isVideoPlaying: false,
            videoUrl: "",
        };
    },
    methods: {
        playVideo() {
            this.videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1";
            this.isVideoPlaying = false;
        },
        closeVideo() {
            this.isVideoPlaying = false;
            this.videoUrl = "";
        },
    },
};
</script>

<style scoped>
.parallax-banner {
    position: relative;
    background: url('~/assets/images/banner1.webp') center center/cover no-repeat;
    height: 300px;
    background-attachment: fixed;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
}

.video-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
}

button {
    font-size: 1.5rem;
    text-transform: uppercase;
}

button:hover {
    background-color: #b78d5b;
}
</style>
