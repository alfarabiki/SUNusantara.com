<template>
    <section id="team" class="py-16 px-8 section fade-in-on-scroll">
        <div class="mt-16 text-center">
            <h2 class="text-3xl font-semibold text-primary">Meet Our Team</h2>
            <p class="text-lg text-gray-600 mt-4">
              Driven by dedication and expertise, our team is here to provide exceptional solutions for our valued clients.
            </p>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(member, index) in teamMembers" :key="index" class="text-center">
                    <img :src="member.image" :alt="member.name" class="rounded-full w-32 h-32 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold text-team-name">{{ member.name }}</h3>
                    <p class="text-gray-500">{{ member.position }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import member1 from '~/assets/images/member1.jpg';
import member2 from '~/assets/images/member2.jpg';
import member3 from '~/assets/images/member3.jpg';

const teamMembers = [
    {
        name: "Muhammad Rizqi Al Farabi",
        position: "CEO & Founder",
        image: member1,
    },
    {
        name: "Bella Shania",
        position: "Chief Operating Officer",
        image: member2,
    },
    {
        name: "Cory S. Reynolds",
        position: "Marketing Manager",
        image: member3,
    },
];
onMounted(() => {
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.5, // Elemen harus terlihat setidaknya 50% di viewport
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
.text-primary {
    font-family: "Libre", cursive;
    color: #b78d5b;
    font-size: 30px;
}

.text-team-name {
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
    color: #b78d5b;
    font-size: 16px;
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
</style>