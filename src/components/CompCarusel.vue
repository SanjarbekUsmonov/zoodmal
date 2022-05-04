<template>
  <div class="q-pa-md">
    <q-carousel class="carusel"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide v-for="cars in massage" :key="cars.index" :name="cars.names" :img-src="cars.img" />

    </q-carousel>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  props:['massage'],
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>
.carusel{
 border-radius: 30px;
}

</style>
