<template >
  <div>
    <!-- Sarlavha va link uchun -->
      <div v-for="contents in div" :key=" contents.index" class="nav fit row wrap justify-between items-center content-center q-mt-lg">
          <div class="text-h4">
           <span> {{ contents.span}}</span>
          </div >
          <div class="text-subtitle2">
            <a href="djia">{{contents.href}}</a>
          </div>
      </div>
    <!-- Sarlavha va link tugashi -->

     <!-- Kichik cartlarning boshlanishi -->
    <div class="bg-white q-mt-md  row wrap justify-center items-center content-center">
        <div class="red bg-white row  justify-between items-center content-center ">
            <div v-for="fotos in com" :key="fotos.index" class="bg bg-grey-1 ">
              <div>
                  <img
                  class="img" :src="fotos.img" alt="">
              </div>
              <div
                 class="">
                {{fotos.text}}
              </div>
           </div>
        </div>
    </div>
     <!-- Kichik cartlarning tugashi -->
  </div>
</template>
<script>
export default {
  props:['div','com'],
   data() {
     return {


     }
   },

}
</script>
<style scoped>
.naw{
  width: 100%;
  height: 90px;
}
  .row{
    width: 100%;
    height: 200px;
    border-radius: 15px;
  }
  .red{
    width: 95%;
    height: 140px;
  }
  .bg{
    width: 120px;
    height: 140px;
    border-radius: 20px;
  }
  img{
    width: 100px;
    height: 100px;
  }
  .bg:hover{
    margin-bottom: 9px;
  }
</style>
