<template>
    <div class="flex pt-16 flex-wrap max-w-screen-xl mx-auto">
      <Card data-aos="fade-up" data-aos-duration="300" v-for="data in 20" :key="data"/>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
   components: { Card },
}
</script>