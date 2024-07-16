<template>
    <div class="w-full m-auto max-w-screen-2xl">
    <div class="mx-8 pt-7 pb-0">
        <h2 class="text-bold opacity-3 mb-5 text-left ml-9 text-2xl text-black leading-32">Deals Of The Day</h2>
        </div>
    <div class="flex justify-center items-center ml-4 mr-4 mb-8 cursor-pointer relative">
        <div class="flex flex-wrap ml-8 float-left relative min-h-auto gap-4">
            <div v-for="(sliding,index) in slide" :key="index" class="flex flex-col justify-center shadow-lg rounded-lg items-center overflow-hidden p-2">
            <RouterLink to="/about"><img :src="sliding.Image" alt="image" class="object-contain w-56 p-8"></RouterLink>
             <div class="flex flex-col justify-center items-start">
             <div class=" flex justify-start items-start float-left">
                <h1 class="">{{ sliding.name }}</h1>
             </div>
             <div class=" flex justify-start items-start float-left">
             <h1 class="line-through text-amber-950 mr-2 float-start text-start">{{ sliding.price }}</h1>
             <h1>{{ sliding.NewPrice }}</h1>
             </div>
             <div class=" flex bg-yellow-600 rounded-full absolute top-0">
                <h5 class="text-white p-1 text-sm">{{sliding.discount}}</h5>
             </div>
             <div class=" flex justify-start items-start float-left">
             <button class="bg-green-500 py-1.5 px-14 text-center text-sm rounded-md text-white">ADD TO BAG</button>
             </div>
            </div>
             
            </div>
            <div>

            </div>

        </div>
    </div>
    </div>
</template>
<script>
import Image1 from '../assets/Image/Logoimage.png';
import Image2 from '../assets/Image/Logoimage.png';
import Image3 from '../assets/Image/Logoimage.png';
import Image4 from '../assets/Image/Logoimage.png';
import Image5 from '../assets/Image/Logoimage.png';
import Image6 from '../assets/Image/Logoimage.png';
import Image7 from '../assets/Image/Logoimage.png';
import Image8 from '../assets/Image/Logoimage.png';
import Image9 from '../assets/Image/Logoimage.png';
import Image10 from '../assets/Image/Logoimage.png';

export default{
    
    data(){
        return{
            slide:[
                {Image:Image1,name:'Zobo Drink',price:`# ${300}`,NewPrice:`# ${200}`, discount:'Nil'},
                {Image:Image2,name:'Zobo Drink',price:`# ${300}`,NewPrice:`# ${200}`, discount:'-4%'},
                {Image:Image3,name:'Zobo Drink',price:`# ${300}`,NewPrice:`# ${200}`, discount:'-49%'},
                {Image:Image4,name:'Zobo Drink',price:`# ${300}`,NewPrice:`# ${200}`, discount:'-4%'},
                {Image:Image5,name:'Zobo Drink',price:`# ${300}`,NewPrice:`# ${200}`, discount:'-4%'},
                // {Image:Image6,name:'Zobo Drink',price:`# ${300}`},
                // {Image:Image7,name:'Zobo Drink',price:`# ${300}`},
                // {Image:Image8,name:'Zobo Drink',price:`# ${300}`},
                // {Image:Image9,name:'Zobo Drink',price:`# ${300}`},
                // {Image:Image10,name:'Zobo Drink',price:`# ${300}`},

            ]
        }
    }
}
</script>
<style>

</style>