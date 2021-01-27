<template>
   <div class="flex pt-16 items-center justify-center p-4">
     <router-link v-for="link in links" :key="link.id" :to="link.to">
      <div class="rounded w-40 h-24 m-2 bg-gray-50 text-center transform hover:translate-x-3 transition font-semibold hover:shadow-lg">
         {{link.text}}
      </div>
     </router-link>
   </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
   setup () {
      const state = reactive({
         links:[
            {  
               id: 1,
               to: '/healty-card',
               text: 'Healty Card'
            },
            {  
               id: 2,
               to: '/food-card',
               text: 'Foods Card'
            },
            {  
               id: 3,
               to: '/property-card',
               text: 'Properties Card'
            },
            {  
               id: 4,
               to: '/animal-card',
               text: 'Animals Card'
            },
            {  
               id: 5,
               to: '/drink-card',
               text: 'Drinks Card'
            },

         ]
      })

      return {
         ...toRefs(state)
      }
   }
}
</script>