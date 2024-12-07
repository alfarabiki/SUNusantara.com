<template>
  <section id="product-detail" class="container mx-auto px-6 py-16 section fade-in-on-scroll">
    <!-- Judul Produk -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-primary">{{ productDetails.name }}</h2>
      <p class="text-lg text-gray-600 mt-8">
        Premium quality product for agriculture and sustainable development.
      </p>
    </div>

    <!-- Product Specifications -->
    <div id="specifications" class="section py-18 px-8 md:px-25">
      <div
        class="flex flex-col md:flex-row items-center bg-gradient-to-r from-primary to-secondary rounded-lg p-8 shadow-x5">
        <!-- Product Image -->
        <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img :src="productDetails.productPhoto" alt="Product Image"
            class="w-3/4 h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
        </div>

        <!-- Product Specifications -->
        <div class="w-full md:w-1/2 md:pl-8">
          <h2 class="text-4xl font-extrabold text-white mb-6">
            Product Specifications
          </h2>
          <ul class="list-disc list-inside text-lg text-white space-y-1">
            <li v-for="spec in productDetails.specifications" :key="spec"
              class="hover:text-yellow-400 transition-colors duration-200">
              {{ spec }}
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 1. Tempat Produk Dibuat -->
    <div id="location" class="section flex flex-col md:flex-row items-center">
      <!-- Text -->
      <div class="w-full md:w-1/2 pr-0 md:pr-8">
        <h2 class="text-3xl font-bold text-primary mb-4">Where It Is Made</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-4">
          East Java is renowned as one of the top producers of premium spices, including turmeric of exceptional quality. Grown at high altitudes, our turmeric benefits from optimal natural conditions, resulting in a rich curcumin content and vibrant color. Carefully cultivated by experienced farmers, every step of the process is designed to deliver freshness and potency straight to your doorstep.
          Experience the golden touch of East Java’s finest turmeric—perfect for enhancing health, flavor, and tradition.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          Our production facilities in this area leverage modern techniques combined with the expertise
          of local farmers, ensuring only the finest quality materials for our customers worldwide.
        </p>
      </div>
      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img :src="productDetails.locationImage" alt="Location Image" class="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>

    <!-- 2. Processing Method -->
    <div id="processing" class="section flex flex-col md:flex-row items-center">
      <!-- Image -->
      <!-- <div class="w-full md:w-1/2 mb-8 md:mb-0">
        <img :src="productDetails.processingImage" alt="Processing Image" class="w-full h-auto rounded-lg shadow-md" />
      </div> -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
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
      <!-- Text -->
      <div class="w-full md:w-1/2 pl-0 md:pl-8">
        <h2 class="text-3xl font-bold text-primary mb-4">Processing Method</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-4">
          Our Premium Turmeric is grown at high altitudes, ensuring exceptional quality and a rich curcumin content. The crops are carefully handled by experienced farmers who use sustainable practices to maintain their natural freshness and potency.

          The product is packaged using durable polyester bags and food wrap, specially designed to preserve quality and freshness during storage and transit. The eco-friendly packaging is suitable for both local and international shipping, catering to environmentally conscious markets.  </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          Advanced drying techniques, including sun drying and controlled mechanical methods, are employed to preserve the pepper's natural essence. This meticulous process ensures our products meet the highest standards, delivering premium-grade black pepper suited for culinary and industrial applications worldwide.
        </p>
      </div>
    </div>

    <!-- 3. Packaging -->
    <div id="packaging" class="section flex flex-col md:flex-row items-center">
      <!-- Text -->
      <div class="w-full md:w-1/2 pr-0 md:pr-8">
        <h2 class="text-3xl font-bold text-primary mb-4">Packaging</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-4">
        Our Premium Turmeric is packaged using durable polyester bags and food-grade plastic to maintain its quality and freshness. The packaging is designed to be eco-friendly and suitable for both local and international shipping.

        We offer turmeric in various forms to suit your needs, including Raw Turmeric and Turmeric Powder. Customized packaging options are available upon request to meet specific requirements.  
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          Each package is carefully inspected before dispatch, ensuring it meets the highest standards of hygiene and
          safety.
          This guarantees that our products arrive in excellent condition, ready for use.
        </p>
      </div>
      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img :src="productDetails.packagingImage" alt="Packaging Image" class="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>

    <!-- 4. TNC for Payment and Shipping -->
    <div id="tnc" class="section flex justify-center">
      <div class="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-2/3">
        <h1 class="text-3xl font-bold text-primary mb-4">Terms and Conditions</h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-4">
          We prioritize customer satisfaction by ensuring seamless payment processes and reliable shipping
          services. Please read the terms and conditions carefully to understand the policies for payments,
          shipping, and returns.
        </p>
        <ul class="list-disc list-inside text-gray-600 space-y-4">
          <li>
            <strong>Payment Terms:</strong>
            We require a 40-50% down payment to proceed with the order, with the remaining balance to be paid upon confirmation that all products are loaded onto the container. We accept bank transfers and trusted digital payment systems. Please ensure that the payment receipt is sent promptly to avoid delays in processing your order..
          </li>
          <li>
            <strong>Order Processing:</strong>
            Orders will be processed once payment has been verified. This typically takes 1-2 business days
            depending on the payment method chosen.
          </li>
          <li>
            <strong>Shipping Policy:</strong>
            Products are shipped through reliable logistic partners to ensure timely delivery.
            Shipping timelines will be based on the first agreement made during the order process and will commence after payment confirmation.
            Customers will receive a tracking number to monitor the shipment status.
          </li>
          <li>
            <strong>Return and Refund Policy:</strong>
            - Purchased items cannot be returned unless they arrive damaged or defective.
            - Customers must report any damages within 24 hours of receiving the product.
            - Refunds or replacements are subject to verification and may take up to 7 business days to process.
          </li>
          <li>
            <strong>International Shipping:</strong>
            - For international orders, additional customs duties or taxes may apply and are the responsibility
            of the buyer.
            - Delivery times may vary based on the destination country's customs processing time.
          </li>
          <li>
            <strong>Customer Support:</strong>
            If you have any questions or need assistance, our customer service team is available via email or
            phone. Please do not hesitate to contact us for further clarification on any of the above terms.
          </li>
        </ul>
      </div>
    </div>


  </section>
</template>


<script setup>
import { ref } from 'vue';
import PDPProduct from '~/assets/images/pdp/close-up-turmeric-powder-with-root-grunge-wooden-background_160084-2.jpg';
import PDPLocation from '~/assets/images/pdp/Turmeric-Location.jpg';
import PDPProcess from '~/assets/images/pdp/Harvest-Turmeric.jpg';
import PDPPackaging from '~/assets/images/pdp/Packaging-Blackpaper.jpg';

const productDetails = ref({
  name: 'Turmeric',
  specifications: ["Purity",
      "Moisture : <12% Dried & <8% Powder",
     "Size : Fresh 3-7cm ,Powder :80-120 mesh",
      "Colour : Bright Yellow to Natural Orange", 
      "Packaging : Polyester, Food-Grade Plastic"],
  productPhoto: PDPProduct,
  location: 'Lampung',
  locationImage: PDPLocation,
  processingImage: PDPProcess,
  packagingImage: PDPPackaging,
});

// Slideshow logic
import delivery1 from "~/assets/images/pdp/healthy-hand-holding-fresh-organic-root-vegetable-generated-by-ai_24640-80964.jpg";
import delivery2 from "~/assets/images/pdp/close-up-turmeric-powder-with-root-grunge-wooden-background_160084-2.jpg";

const images = [PDPProcess, delivery1, delivery2];
const currentImageIndex = ref(0);

const prevImage = () => {
    currentImageIndex.value =
        (currentImageIndex.value - 1 + images.length) % images.length;
};

const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};
</script>

<style scoped>
.section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.text-primary {
  font-family: "Poppins", cursive;
  color: #b78d5b;
  font-size: 40px;
}

img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .section {
    align-items: center;
  }
}
</style>