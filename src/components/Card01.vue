<template>
   <div class="w-72 h-full m-2 bg-gray-50 group overflow-hidden rounded-t-lg shadow hover:shadow-lg cursor-pointer">
        <div class="w-full h-full relative">
          <button class="focus:outline-none absolute inline-flex bottom-3 right-4 opacity-0 group-hover:opacity-100 transition py-1 px-2 text-xs border hover:bg-opacity-30 border-gray-200 bg-gray-300 bg-opacity-20 text-yellow-200 rounded-3xl">
            <svg class="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Order</span>
          </button>
          <img class="w-full h-72 object-cover" :src="food.foodImage" />
        </div>
        <div class="w-full h-60 bg-white p-5">
          <span class="text-3xl font-semibold block">{{food.foodName}} <i class="text-xs text-gray-600">({{food.foodType}})</i></span>
          <span class="mt-2 block text-gray-600"> {{food.foodDescription}} </span>
          <div class="flex items-center justify-between mt-8">
            <span class="text-sm font-semibold"> Rate. <span class="text-xs font-extrabold text-yellow-400">{{food.foodRating}}</span> </span>
            <a href="#" class="font-extrabold text-2xl text-gray-700"> Rp.{{food.foodPrice}}K </a>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  props:{
    food: {
      type: Object,
      required: true
    }
  },
}
</script>