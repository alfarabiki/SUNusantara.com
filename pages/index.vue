<template>
    <Homepage />
    <client-only>
      <LazyLoadComponent componentName="about" />
    </client-only>
    <client-only>
      <LazyLoadComponent componentName="banner" />
    </client-only>
    <client-only>
      <LazyLoadComponent componentName="products" />
    </client-only>
    <client-only>
      <LazyLoadComponent componentName="team" />
    </client-only>
    <client-only>
      <LazyLoadComponent componentName="contact" />
    </client-only>
  </template>
  
  <script>
  import Homepage from '~/pages/homepage.vue';
  import LazyLoadComponent from '~/pages/LazyLoadComponent.vue';
  
  export default {
    components: {
      Homepage,
      LazyLoadComponent,
    },
  };
  </script>
  