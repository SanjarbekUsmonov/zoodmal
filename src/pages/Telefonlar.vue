<template >
  <div>
      <div class="container fit row  justify-center items-center content-center bg-grey-1">
        <div class="content bg-grey-1 q-mt-md">
               <q-btn color="primary" label="Zoodmall" to="/"/>  <span class="text-h7 text-grey"> / Telefonlar va aksessuarlar</span>
           <div style="width:100%;height:70px" class=" row  justify-around items-center content-center ">
               <q-btn flat style="color: #333" class="text-overline" label="Ayollar kiyimlari" to="/ayollar"/>
               <q-btn flat style="color: #333" class="text-overline" label="Erkaklar kiyimlari" to="/erkaklar" />
               <q-btn flat style="color: #333" class="text-overline" label="Telefonlar va aksessuarlar" to="/telefonlar"/>
               <q-btn flat style="color: #333" class="text-overline" label="Kompyuter va ofis" to="/kompyuter"/>
               <q-btn flat style="color: #333" class="text-overline" label="Maishiy elektronika" to="maishiy"/>
           </div>
            <CompAyollar :content="carts5" :com="starts5"/>
            <CompText/>
            <div class="foter">

            </div>
        </div>
     </div>
  </div>
</template>
<script>
import CompAyollar from "../components/CompAyollar";
import CompText from "src/components/CompText.vue";
export default {
  data() {
    return {
       starts5:[
          {text:'Ayollar kiyimlari'}
          ],
          carts5:[
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
    components: {
    CompAyollar,
    CompText
}
}
</script>
<style scoped>
.container{
  width: 100%;
  height: auto;
}
.content{
  width: 80%;
  height: auto;
}
.row{
 width:100%;
 height: 70px;
}
.foter{
  width: 100px;
  height: 70px;
}
</style>
