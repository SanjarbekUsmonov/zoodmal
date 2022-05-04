<template>
  <div>
    <!-- Sarlavha va link uchun -->
      <div v-for="electronics in row" :key="electronics.index" class="nav fit row wrap justify-between items-center content-center q-mt-xl">
          <div class="text-h4">
           <span>{{ electronics.span}}</span>
          </div >
          <div class="text-subtitle2">
            <a href="">{{ electronics.a}}</a>
          </div>
      </div>
      <!-- Sarlavha va link tugashi -->
      <div class="bg bg-white q-mt-md row  justify-around items-center contr">
            <div v-for="carts in end" :key="carts.index" class="dark  ">
              <!-- rasm boshlanishi -->
                <div class="red">
                    <div>
                        <img class="img" :src="carts.img" alt="">
                    </div>
                </div>
              <!-- rasm boshlanishi tugashi-->

             <!-- narxlar boshlanishi-->
             <div class="q-mt-md">
                {{carts.text}}
             </div>
             <div>
               <span class="text-subtitle2">{{carts.uzs}}</span>
             </div>
             <div class="bg-yellow text-gark" style="width:110px">
               {{carts.sena}} <span>{{carts.span}}</span>
             </div>

            </div>
            <!-- narxlar boshlanishi tugashi-->
      </div>
  </div>
</template>
<script>
export default {
  props:['row','end'],
      data() {
        return {


        }
      },
}
</script>
<style scoped>
 /* Sarlavha va link uchun */
.naw{
  width: 100%;
  height: 90px;
} /* Sarlavha va link tugashi */
.bg{
  width: 100%;
  height: 370px;
  border-radius: 20px;
}
.dark{
  width: 270px;
  height: 100%;
  border: 1.5px solid rgb(243, 243, 243);
}
.red{
  width: 100%;
  height: 70%;
}
.img{
  width: 100%;
  height: 60%;
}
</style>
