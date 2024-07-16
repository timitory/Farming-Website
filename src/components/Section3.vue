<template>
    <div class="flex m-16 p-6 mt-6 w-auto justify-center items-center">
      <div class="big flex gap-3 items-center justify-center w-full mt-9">
        <!-- First Div -->
        <div class="flex items-center justify-center w-full bg-green-500 rounded-md">
          <img src="../assets/IMG-20240127-WA0004.jpg" alt="logo" class="object-cover w-full h-96 rounded-lg" style="height: 500px;">
        </div>
        <!-- Second Div -->
        <div class="small flex flex-col gap-3 w-full">
          <!-- First Image in Second Div -->
          <div class="small1 flex h-48 rounded-md relative" style="height: 245px;">
            <img src="../assets/IMG-20240127-WA0004.jpg" alt="gi" class="object-cover w-full h-full rounded-lg">
            <h1 class="flex absolute text-white text-lg bottom-16 ml-4 font-bold">You Can Join Us Here!</h1>
            <button class=" flex absolute bottom-7 px-5 py-2 rounded-md text-sm text-white bg-red-700 ml-4"><RouterLink to="/about"> Join Us</RouterLink></button>
          </div>
          <!-- Second Image in Second Div -->
          <div class="small2 flex h-48 rounded-md" style="height: 245px;">
            <img src="../assets/IMG-20240127-WA0004.jpg" alt="log" class="object-cover w-full h-full rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </template>
  <style>
.big{
    height: 500px;
}
.big{
    height: 500px;

}
.small{
    height: 500px;
}
.small1{
    height: 250px;
}
.small2{
    height: 250px;
}
</style>
  