<template>
  <div>
    <div class="start bg-grey-1"
      v-for="starts in com"
      :key="starts.index">
        <div class="text-h4">
            {{starts.text}}
        </div>
    </div>

    <div class="container bg-grey   row wrap justify-around items-start content-start " >
        <div class="big-cart q-mt-md"
          v-for="carts in content"
          :key="carts.index">
          <div class="cart bg-white ">
          <div class="img row justify-center">
              <q-img
              :src="carts.src" class="imgs"/>
          </div>
           <div class="text  row justify-center content-center">
             <div class="text-smal">
               <div>
                {{carts.text}}
               </div>
               <div class="text-subtitle2">
                  {{carts.sena}}
               </div>
               <div>
                 <mark>{{carts.mark}}</mark> <span>{{carts.mark}}</span>
               </div>
               <div>
                 <q-img style="width: 28px; height: 15px;"
                  :src="carts.img">

                 </q-img>
               </div>
             </div>
          </div>
         </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['content','com'],
    data() {
      return {

      }
    },
}
</script>
<style scoped>
.start{
  width: 100%;
  height: 70px;
}
.container{
  width: 100%;
  height: 1110px ;
}
.cart{
  width: 250px;
  height: 330px;
  border-radius: 12px;
}
.img{
  width: 100%;
  height: 220px;
}
.imgs{
  width: 70%;
  height: 220px;
}
.text{
  width: 100%;
  height: 109px;
}
.text-smal{
  width: 90%;
  height: 90px;
}
.big-cart{
  width: 253px;
  height: 335px;
}
</style>
