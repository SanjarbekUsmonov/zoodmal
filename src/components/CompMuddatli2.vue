<template>
  <div>
      <div class="bg-white q-mt-md fit row  justify-around items-center content-center">
          <!-- Yozga tayyorgarlik ko'ramiz boshlanishi -->
          <div class=" row  justify-center items-center content-center">
              <div class="img ">
                  <div>
                    <img src="https://images.zoodmall.com/app/homePageLayout/1650256255586.png" alt="" class="foto">
                  </div>
              </div>
          </div>
           <!-- Yozga tayyorgarlik ko'ramiz tugashi -->

           <div class="cart bg-yellow" v-for="cart in carts" :key="cart">
              <img :src="cart.img" alt="">
              <div>
                {{cart.text}}
              </div>
           </div>

     </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
          carts:[
            {img:'https://images.zoodmall.com/app/homePageLayout/1650256419613.jpg',text:'Konditsionerlar'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1650257219615.jpg',text:'Katta maishiy texnika'},
            {img:'https://images.zoodmall.com/app/homePageLayout/165025769589.jpg',text:'Kichik maishiy texnika'},
            {img:'https://images.zoodmall.com/app/homePageLayout/165025776366.jpg',text:'Velosiped va samokatlar'}
          ]
      }
    },
}
</script>
<style scoped >
.cart{
width: 285px;
height: 286px;
}
.bg-white{
  width: 100%;
  height: 420px;
}
.row{
  width: 100%;
  height: 100px;
}
.img{
  width: 400px;
  height: 50px;
  background-size:cover ;
}
.foto{
  width: 400px;
  height: 50px;
}
</style>
