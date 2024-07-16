<template>
    <div class="mx-8 pt-7 pb-0">
        <h2 class="text-bold opacity-3 mb-5 text-left ml-9 text-2xl text-black leading-32">Shop by Crop</h2>
        </div>
    <div class="duration-5000 mt-6 pb-5 mx-2 px-4">
      <div class="max-w-none w-full">
        <div class="overflow-x-auto duration-5000 py-1 px-0 translate-y-px">
          <swiper
            :modules="modules"
            :slidesPerView="7"
            :centeredSlides="false"
            :spaceBetween="10"
            :navigation="true"
            :virtual="true"
            class="mySwiper custom-swipe pb-2"
            @swiper="setSwiperRef"
          >
            <swiper-slide
              v-for="(slideContent, index) in slides"
              class="shadow-md rounded-lg h-40"
              :key="index"
              :virtualIndex="index"
            >
              <RouterLink to="/about">
                <img :src="slideContent.image" alt="Slide Image" class="w-full h-full object-cover" />
                <h5 class="description">{{ slideContent.description }}</h5>
              </RouterLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/virtual';
  import { Pagination, Navigation, Virtual } from 'swiper/modules';
  import Image1 from '../assets/Image/Logoimage.png';
  import Image2 from '../assets/Image/Logoimage.png';
  import Image3 from '../assets/IMG-20240127-WA0004.jpg';
  import Image4 from '../assets/Image/Logoimage.png';
  import Image5 from '../assets/Image/Logoimage.png';
  import Image6 from '../assets/IMG-20240127-WA0004.jpg';
  import Image7 from '../assets/Image/Logoimage.png';
  import Image8 from '../assets/Image/Logoimage.png';
  import Image9 from '../assets/IMG-20240127-WA0004.jpg';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const slides = ref([
        { image: Image1, description: 'Fish' },
        { image: Image2, description: 'Food' },
        { image: Image3, description: 'Rice' },
        { image: Image4, description: 'Egg' },
        { image: Image5, description: 'Meat' },
        { image: Image6, description: 'Milk' },
        { image: Image7, description: 'Vegetable' },
        { image: Image8, description: 'Fertilizers' },
        { image: Image9, description: 'Animal Feeds' },
      ]);
  
      let swiperRef = null;
      const appendNumber = slides.value.length;
      const prependNumber = 1;
  
      const setSwiperRef = (swiper) => {
        swiperRef = swiper;
      };
  
      const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
      };
  
      const append = () => {
        slides.value = [...slides.value, `Image ${++appendNumber}`];
      };
  
      const prepend = () => {
        slides.value = [
          `Image ${prependNumber - 2}`,
          `Image ${prependNumber - 1}`,
          ...slides.value,
        ];
        prependNumber -= 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
      };
  
      return {
        slides,
        swiperRef,
        setSwiperRef,
        slideTo,
        append,
        prepend,
        modules: [Pagination, Navigation, Virtual],
      };
    },
  };
  </script>
  
  
  <style>
  .custom-swipe .my-swiper {
    width: 100%;
    height: 100%;
  }
  
  /* Custom styles for navigation buttons */
  .custom-swipe .swiper-button-next,
  .custom-swipe .swiper-button-prev {
    color: red; /* Change the color of the navigation buttons */
    background-color: white; /* Add a background color with transparency */
    border-radius: 10%; /* Make the buttons round */
    width: 30px; /* Set width */
    height: 70px; /* Set height */
    display: flex;
    top:70px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Add some shadow for a better look */
    transition: background-color 0.3s; /* Smooth transition on hover */
  }
  
  .custom-swipe .swiper-button-next{
    /* float:right;
    right:-5px; */
  }
 .custom-swipe .swiper-button-prev{
    /* float:left;
    left:-5px; */
    /* Darken background on hover */
  }
  
  .custom-swipe .swiper-button-next:after,
  .custom-swipe .swiper-button-prev:after {
    font-size: 16px; /* Increase icon size */
    color: black; /* Icon color */
  }
  
 .custom-swipe .swiper-button-next:after {
    content: '>'; /* Customize next button icon */
  }
  
  .custom-swipe .swiper-button-prev:after {
    content: '<'; /* Customize previous button icon */
  }
  
  .custom-swipe .slide-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .custom-swipe .my-swiper img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  
  .custom-swipe .description {
    font-size: 14px;
  }
  
  .custom-swipe .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
  }
  
  .custom-swipe .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fdfcfc;
    padding: 1rem;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .custom-swipe .swiper-slide img {
    display: block;
    width: 100%;
    height: 80%;
    padding: 1rem;
  }
  </style>
  