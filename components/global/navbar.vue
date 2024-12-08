<template>
  <nav class="hidden md:flex space-x-6 items-center">
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/#about" class="nav-link">About Us</NuxtLink>
    <NuxtLink to="/#products" class="nav-link">Products</NuxtLink>
    <NuxtLink to="/#team" class="nav-link">Team</NuxtLink>
    <NuxtLink to="/#contact" class="nav-link">Contact</NuxtLink>
    <!-- <NuxtLink to="https://www.linkedin.com" target="_blank" class="nav-link flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin"
        viewBox="0 0 16 16">
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    </NuxtLink> -->
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-link {
  font-family: "San Fransisco", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #b78d5b;
}
</style>