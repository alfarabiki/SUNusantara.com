<template>
    <Homepage />
    <About />
    <Banner />
    <Products />
    <Team />
    <Contact />
</template>

<script>
import Homepage from '~/pages/homepage.vue'
import About from '~/pages/about.vue';
import Banner from './banner.vue';
import Products from './products.vue';
import Team from './team.vue';
import Contact from '~/pages/contact.vue';

export default {
    components: {
        Homepage,
        About,
        Banner,
        Products,
        Team,
        Contact,
    },
};
</script>