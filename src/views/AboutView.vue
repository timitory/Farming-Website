<template>
  <div class="bg-gray-100">
    <div class="mx-auto">
      <nav aria-label="breadcrumb">
        <ol class="flex px-0">
          <li class="">
            <RouterLink to="/" class="text-gray-600 hover:text-gray-800">Home</RouterLink>
          </li> /
          <li class="active" aria-current="page">SignUp</li>
        </ol> 
      </nav>
    </div>

    <div class="flex w-full px-32 mt-9">
      <!-- Left part - 20% width -->
      <div class="w-1/5 pr-6 space-y-6 mb-3">
        <form>
          <div class="relative">
            <span class="absolute left-4 inset-y-0 flex items-center">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
            <input
              type="search"
              placeholder="Search Products"
              class="search py-2 pl-10 pr-4 border-gray-600 outline-0 w-full"
            />
          </div>
        </form>

        <div class="bg-gray-300 py-3 px-4">
          <h1 class="text-lg text-slate-500">Filter By Price</h1>
        </div>

        <div>
          <div class="relative mx-4">
            <input
              type="range"
              v-model="ranger"
              min="1"
              max="1000"
              class="w-full bg-gray-500 opacity-70 outline-0"
            />
            <input
              type="range"
              v-model="rangering"
              min="1"
              max="1000"
              class="w-full bg-gray-500 opacity-70 outline-0 absolute top-0 left-0"
            />
            <div class="flex justify-between">
              <p>Value: <span>{{ ranger }}</span></p>
              <p>Value: <span>{{ rangering }}</span></p>
            </div>
          </div>
        </div>

        <div class="bg-gray-300 py-3 px-4">
          <h1 class="text-lg text-slate-500">Product Categories</h1>
        </div>

        <ul class="space-y-2 text-left mx-4">
          <li v-for="category in categories" :key="category.name">
            <RouterLink to="/" class="text-gray-700 hover:text-red-500">
              <font-awesome-icon :icon="['fas', 'circle']" class="mr-2" />{{ category.name }}
            </RouterLink>
          </li>
        </ul>

        <div class="bg-gray-300 py-3 px-4">
          <h1 class="text-lg text-slate-500">Top Rated Products</h1>
        </div>

        <div v-for="(slider, index) in slide" :key="index" class="flex space-x-3 mx-4">
          <div class="w-2/5">
            <router-link to="/">
              <img :src="slider.Image" alt="none" class="w-full" />
            </router-link>
          </div>
          <div class="w-3/5">
            <router-link to="/">
              <h5 class="text-sm text-gray-800 font-bold">{{ slider.name }}</h5>
            </router-link>
            <p class="text-sm text-red-600 font-bold">{{ slider.price }}</p>
          </div>
        </div>
      </div>

      <!-- Right part - 80% width -->
      <div class="w-4/5">
        <div class="flex items-center justify-between mb-4">
          <form>
            <select class="search py-3 px-11 border-gray-600 outline-0">
              <option value="" selected>default sorting</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </select>
          </form>
          <div class="flex space-x-3">
            <div class="border-2 border-red-400 p-2 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white">
              <font-awesome-icon :icon="['fas', 'list']" />
            </div>
            <div class="border-2 border-red-400 p-2 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white">
              <font-awesome-icon :icon="['fas', 'list']" />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div v-for="(slider, index) in slide" :key="index" class="w-1/3 p-2">
            <div class="border border-gray-400 p-4 relative">
              <div class="relative">
                <img :src="slider.Image" alt="" class="w-full">
                <div class="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                  <ul class="nav space-x-3">
                    <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fas', 'eye']" /></RouterLink></li>
                    <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fas', 'arrows']" /></RouterLink></li>
                    <li><button class="text-white"><font-awesome-icon :icon="['fas', 'heart']" /></button></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <h5 class="text-left font-bold text-2xl text-black">Dress fashion</h5>
                <p class="text-left font-semibold text-xl text-gray-400">{{ slider.name }}</p>
                <p class="text-sm text-red-400 text-left">{{ slider.price }}</p>
                <router-link to="/" class="flex items-center justify-center border-2 border-red-500 py-2 ml-11 rounded-3xl hover:bg-red-600 hover:text-white w-3/5">
                  <span class="pr-2"><font-awesome-icon :icon="['fas', 'list']" /></span>
                  <span class="text-sm">ADD TO CART</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
    FontAwesomeIcon,
  },
  setup() {
    const ranger = ref(500);
    const rangering = ref(500);
    const slide = ref([
      { Image: Image1, name: 'Product 1', price: '$100' },
      { Image: Image2, name: 'Product 2', price: '$200' },
      { Image: Image3, name: 'Product 3', price: '$300' },
      { Image: Image4, name: 'Product 4', price: '$400' },
      { Image: Image5, name: 'Product 5', price: '$500' },
      { Image: Image6, name: 'Product 6', price: '$600' },
      { Image: Image7, name: 'Product 7', price: '$700' },
      { Image: Image8, name: 'Product 8', price: '$800' },
      { Image: Image9, name: 'Product 9', price: '$900' },
    ]);
    const categories = ref([
      { name: 'Belt' },
      { name: 'Spoon' },
      { name: 'Blazers' },
      { name: 'Cardigan' },
      { name: 'Footwears' },
      { name: 'Shoes' },
      { name: 'Stockings' },
      { name: 'More' },
    ]);

    return {
      ranger,
      rangering,
      slide,
      categories,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
.nav {
  display: flex;
}
.nav li {
  margin: 0 0.5rem;
}
.nav a,
.nav button {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


<style scoped>
/* Add any custom styles here */
</style>

<style>
.search{
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.fables-img-overlay{
    position: absolute;
    left: 15px;
    right: 15px;
    text-align: center;
    top: 0;
    bottom: 0;
    transition: all ease-in-out .3s;
    -webkit-transition: all ease-in-out .3s;
    -o-transition: all ease-in-out .3s;
    -moz-transition: all ease-in-out .3s;
    overflow: hidden;
}
.fables-img-overlay:hover {
    background-color: rgba(92,106,119,.6);    
}
.fables-product-btns {
    display: flex;
    justify-content: center;
    margin-top: 0;
    opacity: 0;
    transition: all ease-in-out .3s;
    -webkit-transition: all ease-in-out .3s;
    -o-transition: all ease-in-out .3s;
    -moz-transition: all ease-in-out .3s;
}
.fables-img-overlay:hover .fables-product-btns{
    opacity: 1;
    margin-top: 29%;
}
.fables-product-btn {
    border: 0;
    background-color: rgba(255,255,255,.6);
    color: #fff;
    border-radius: 50%;
    margin: 0 3px;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 43px;
    margin: 0 7px;
    cursor: pointer;
    transition: all ease-in-out .3s;
    -webkit-transition: all ease-in-out .3s;
    -o-transition: all ease-in-out .3s;
    -moz-transition: all ease-in-out .3s;
}
.fables-product-btn:hover {
    color: #E54D42;
}
</style>


















































































<!-- <template>
  <div class="about mb-64">
    <!-- <div class="fables-header fables-after-overlay">
    <div class="container"> 
         <h2 class="fables-page-title fables-second-border-color">Store Grid List</h2>
    </div>
</div>   -->
<!-- /End Header -->
     
<!-- Start Breadcrumbs -->
<!-- /End Breadcrumbs -->
     
<!-- Start page content --> 
<!-- <div class="w-full px-8 mx-auto mt-7">
     <div class="flex flex-wrap mx-10">
           <div class="flex relative w-full px-7">
               <div class="mb-4 mt-4">
                   <form> 
                         <div class="flex relative">
                             <span class="flex absolute bg-slate-400"></span>
                             <input type="text" class="py-2 px-5 border-orange-900" placeholder="Search Product">
                         </div>
 
                  </form>
               </div>
               <div class="rage-slider">
                    <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">Filter by price</h2> 
                    <form> 
                         <div class="range-slider fables-forth-text-color" id="facet-price-range-slider" data-options='{"output":{"prefix":""},"maxSymbol":"+"}'>
                             <input name="range-1" value="0" min="0" max="10000" step="1" type="range">
                             <input name="range-2" value="10000" min="0" max="10000" step="1" type="range">
                         </div> 
                         <button type="submit" class="btn btn-block fables-second-background-color rounded-0 white-color white-color-hover p-2 font-15 mb-4">Filter</button>
                    </form>
               </div>
               <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">Product Categories</h2>
               <ul class="nav fables-forth-text-color fables-forth-before fables-store-left-list">
                   <li><a href="#">BELTS</a></li>
                   <li><a href="#">BLAZERS</a></li>
                   <li><a href="#">COATS & JACKETS</a></li>
                   <li><a href="#">BAGS & PURSES</a></li>
                   <li><a href="#">WALLETS</a></li>
                   <li><a href="#">KNITWEAR</a></li>
                   <li><a href="#">BLAZERS</a></li>
                   <li><a href="#">JACKETS</a></li>
               </ul>

               <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 my-4">Top Rated Products</h2> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml1.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml2.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml3.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml4.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml1.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml2.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml3.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
               <div class="row mb-3">
                   <div class="col-4 pr-0">
                       <a href="#"><img src="assets/custom/images/sml4.jpg" alt="" class="w-100"></a>
                   </div>
                   <div class="col-8">
                       <a href="#" class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text">LUIS LEATHER DRIVING MOCCASINS FROM ... </a>
                       <p class="font-weight-bold fables-second-text-color ">$ 98.00</p>
                   </div>
               </div> 
           </div>
           <div class="col-12 col-md-8 col-lg-9"> 
                   <div class="row mb-4">
                       <div class="col-12 col-lg-4">
                           <form> 
                              <div class="form-group mb-0"> 
                                <select class="form-control rounded-0">
                                  <option value="" selected>default sorting</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div> 
                            </form> -->
                       <!-- </div>
                       <div class="col-4 col-md-6 col-lg-2 offset-lg-6 text-center pl-0 d-none d-lg-block">
                           <span class="fables-iconlist fa-fw fables-view-btn fables-list-btn fables-third-border-color fables-third-text-color"></span>
                           <span class="fables-icongrid active fa-fw fables-view-btn fables-grid-btn fables-third-border-color fables-third-text-color"></span>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product1.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product2.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product3.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product4.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product5.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product6.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product7.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product8.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                           <div class="card rounded-0 mb-4">
                               <div class="row">
                                   <div class="fables-product-img col-12">
                                      <img class="card-img-top rounded-0" src="assets/custom/images/product9.jpg" alt="dress fashion">
                                      <div class="fables-img-overlay">                                          
                                          <ul class="nav fables-product-btns">
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconeye"></span></a></li>
                                              <li><a href="" class="fables-product-btn"><span class="fables-iconcompare"></span></a></li>
                                              <li><button class="fables-product-btn"><span class="fables-iconheart"></span></button></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card-body col-12">
                                    <h5 class="card-title mx-xl-3">
                                        <a href="#" class="fables-main-text-color fables-store-product-title fables-second-hover-color">dress fashion</a>
                                    </h5>
                                    <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE</p>
                                    <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">$ 98.00</p>
                                    <p class="fables-product-info"><a href="#" class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4">
                                    <span class="fables-iconcart"></span> 
                                    <span class="fables-btn-value">ADD TO CART</span></a></p>
                                  </div>
                               </div>
                            </div>
                       </div>                                
                   </div> 
               <nav aria-label="Page navigation">
                      <ul class="pagination justify-content-center">                                 
                        <li class="page-item"><a class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color" href="#">1</a></li>
                        <li class="page-item"><a class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color" href="#">2</a></li>
                        <li class="page-item"><a class="page-link rounded-circle fables-forth-text-color fables-page-link fables-page-link fables-second-hover-background-color" href="#">3</a></li>  
                        <li><span class="fables-pagi-dots fables-forth-text-color"> .... </span></li>
                        <li class="page-item"><a class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color" href="#">20</a></li>                                
                      </ul>
                    </nav> 
           </div>
     </div>

</div> 
</div>
</template> --> -->
