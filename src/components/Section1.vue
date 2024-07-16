<template>
    <swiper
      :spaceBetween="30"
      :slidesPerView="1.2"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        // type:'fraction',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper shadow-md mt-3 p-9 w-full create-swipe"
    >
    <swiper-slide
            v-for="(slideContent, index) in slides"
            class="shadow-md rounded-lg h-30"
            :key="index"
            :virtualIndex="index"
          >
          <RouterLink to="/about">
            <img :src="slideContent.image" alt="Slide Image" class="w-full object-cover shadow-md rounded-md"/>
          
          
          </RouterLink>
          </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import {ref} from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image1 from '../assets/IMG-20240127-WA0004.jpg';
import Image2 from '../assets/IMG-20240127-WA0004.jpg';
import Image3 from '../assets/IMG-20240127-WA0004.jpg';
import Image4 from '../assets/IMG-20240127-WA0004.jpg';
import Image5 from '../assets/IMG-20240127-WA0004.jpg';
import Image6 from '../assets/IMG-20240127-WA0004.jpg' // Add more images as needed
import Image7 from '../assets/IMG-20240127-WA0004.jpg';
import Image8 from '../assets/IMG-20240127-WA0004.jpg';
import Image9 from '../assets/IMG-20240127-WA0004.jpg'
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const slides = ref([
   {image:Image1,description:'booluiui'},
   {image:Image2,description:'booluiui'},
   {image:Image3,description:'booluiui'},
   {image:Image4,description:'booluiui'},
   {image:Image5,description:'booluiui'},
   {image:Image6,description:'booluiui'},
   {image:Image7,description:'booluiui'},
   {image:Image8,description:'booluiui'},
   {image:Image9,description:'booluiui'},
      // Add more images as needed
    ]);
        return {
            slides,
          modules: [Autoplay, Pagination, Navigation],
        };
      },
    };
  </script>
  <style>
.create-swipe .mySwiper {
  width: 80%;
  height: 100%;
  margin-top:3rem;
}
/* Custom styles for navigation buttons */
.create-swipe .swiper-button-next,
.create-swipe .swiper-button-prev {
  color: red; /* Change the color of the navigation buttons */
  background-color: white; /* Add a background color with transparency */
  border-radius: 10%; /* Make the buttons round */
  width: 25px; /* Set width */
  height: 70px; /* Set height */
  display: flex;
  top:300px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Add some shadow for a better look */
  transition: background-color 0.3s; /* Smooth transition on hover */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  /* Darken background on hover */
}

.create-swipe .swiper-button-next:after,
.create-swipe .swiper-button-prev:after {
  font-size: 16px; /* Increase icon size */
  color: black; /* Icon color */
}

.create-swipe .swiper-button-next:after {
  content: '>'; /* Customize next button icon */
}

.create-swipe .swiper-button-prev:after {
  content: '<'; /* Customize previous button icon */
}

.create-swipe .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff;
  width:70%;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  /* height:600px; */
}

.create-swipe .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
  