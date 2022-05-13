<template >
  <div>
      <div class="container fit row  justify-center items-center content-center bg-grey-1">
        <div class="content bg-grey-1 q-mt-md">
              <div>
                 <q-btn color="primary" label="Zoodmall" to="/"/>  <span class="text-h7 text-grey"> / Maishiy elektronika</span>
              </div>
            <div style="width:100%;height:70px" class=" row  justify-around items-center content-center ">
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Ayollar kiyimlari" to="/ayollar"/>
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Erkaklar kiyimlari" to="/erkaklar"/>
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Telefonlar va aksessuarlar" to="/telefonlar"/>
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Kompyuter va ofis" to="/kompyuter"/>
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Maishiy elektronika" to="maishiy"/>
              </div>
           </div>
            <CompAyollar :content="carts4" :com="starts4"/>
            <CompText/>

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
       starts4:[
          {text:'Ayollar kiyimlari'}
          ],
          carts4:[
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
  width: 70%;
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
