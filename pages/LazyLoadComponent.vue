<template>
  <div ref="observerTarget">
    <component v-if="isVisible" :is="asyncComponent" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';

export default {
  props: {
    componentName: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const isVisible = ref(false);
    const observerTarget = ref(null);
    const asyncComponent = ref(null);

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`[LazyLoadComponent] Component ${props.componentName} is visible, loading...`);

          isVisible.value = true;
          observer.disconnect();
          try {
            asyncComponent.value = defineAsyncComponent(() => {
              console.log(`[LazyLoadComponent] Start loading component: ${props.componentName}`);
              console.log(`${props.componentName}`);
              let component;
              switch (props.componentName) {
                case 'about':
                  component = import('./pages/about.vue');
                  break;
                case 'banner':
                  component = import('./pages/banner.vue');
                  break;
                case 'products':
                  component = import('./pages/products.vue');
                  break;
                case 'team':
                  component = import('./pages/team.vue');
                  break;
                case 'contact':
                  component = import('./pages/contact.vue');
                  break;
                // tambahkan case lainnya sesuai kebutuhan
                default:
                  component = import('./pages/default.vue'); // fallback jika tidak ada yang cocok
              }

              return component;

              return import(`./pages/${props.componentName}.vue`);
            });
            console.log(`[LazyLoadComponent] Component ${props.componentName} loaded successfully`);
          } catch (error) {
            console.error(`[LazyLoadComponent] Error in dynamic import for ${props.componentName}:`, error);
          }
        }
      });
    };

    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(handleIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
      });

      if (observerTarget.value) {
        console.log('[LazyLoadComponent] Observing target element');
        observer.observe(observerTarget.value);
      } else {
        console.error('[LazyLoadComponent] observerTarget element not found!');
      }
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
        console.log('[LazyLoadComponent] IntersectionObserver disconnected');
      }
    });

    return { isVisible, observerTarget, asyncComponent };
  },
};
</script>
