<template>
    <div class="flex px-6 pb-6 pt-16 flex-wrap max-w-screen-xl mx-auto">
      <Card01 data-aos="fade-up" data-aos-duration="300" v-for="food in foods" :key="food.foodId" :food="food"/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Card01 from '../components/Card01.vue'
export default {
   components: { Card01 },
   setup() {
    const state = reactive({
      foods: [
        {
          foodId: 1,
          foodName: 'Telor Asin',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '11.2',
          foodImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Roti Buah',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '13.0',
          foodImage: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Ikan Kecap',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '9.2',
          foodImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 1,
          foodName: 'Telor Asin',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '11.2',
          foodImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Roti Buah',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '13.0',
          foodImage: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Ikan Kecap',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '9.2',
          foodImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 1,
          foodName: 'Telor Asin',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '11.2',
          foodImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Roti Buah',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '13.0',
          foodImage: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          foodId: 2,
          foodName: 'Ikan Kecap',
          foodType: 'Original',
          foodDescription: '“tempting food words activate simulations of eating the food, including simulations of the taste and texture”',
          foodRating: '4.5/5',
          foodPrice: '9.2',
          foodImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>