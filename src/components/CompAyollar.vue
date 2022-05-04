<template>
  <div>
    <div class="start bg-grey-1"
      v-for="start in starts"
      :key="start">
        <div class="text-h4">
            {{start.text}}
        </div>
    </div>

    <div class="container bg-grey   row wrap justify-around items-start content-start " >
        <div class="big-cart q-mt-md"
          v-for="cart in carts"
          :key="cart">
          <div class="cart bg-white ">
          <div class="img row justify-center">
              <q-img
              :src="cart.src" class="imgs"/>
          </div>
           <div class="text  row justify-center content-center">
             <div class="text-smal">
              <div>
                {{cart.text}}
              </div>
              <div class="text-subtitle2">
                  {{cart.sena}}
              </div>
              <div>
                 <mark>{{cart.mark}}</mark> <span>{{cart.mark}}</span>
              </div>
              <div>
                 <q-img style="width: 28px; height: 15px;"
                  :src="cart.img">

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
    data() {
      return {
          starts:[
            {text:'Ayollar kiyimlari'}
          ],
          carts:[
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},{src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},
            {src:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/93/20044993/164562791387247500176.jpeg',
            text:' Ayyollar uchun dvoyka bejeviy ran...',
            sena:' UZS 690,000',
            mark:'UZS 172,500',
            span:'x4',
            img:'https://images.zoodmall.uz/app/appImages/UZ.png'},

          ]
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
