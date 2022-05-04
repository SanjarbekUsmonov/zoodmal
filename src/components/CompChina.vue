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
      <q-carousel-slide :name="1" img-src="https://images.zoodmall.uz/app/banner/main_banner_6255178a083ae.png" />
      <q-carousel-slide :name="2" img-src="https://images.zoodmall.uz/app/banner/main_banner_62596bc6bb906.jpg" />

    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
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
