<template >
  <div>
     <div class="bg-grey-1 fit row  justify-center items-center content-center">
        <div class="bg-grey-1 q-mt-md" >
                 <q-btn color="primary" label="Zoodmall" to="/"/>
            <div style="width:100%;height:70px" class=" row  justify-around items-center content-center ">
                <q-btn flat style="color: #333" class="text-overline" label="Ayollar kiyimlari" to="/ayollar"/>
                <q-btn flat style="color: #333" class="text-overline" label="Erkaklar kiyimlari" to="/erkaklar" />
                <q-btn flat style="color: #333" class="text-overline" label="Telefonlar va aksessuarlar" to="/telefonlar"/>
                <q-btn flat style="color: #333" class="text-overline" label="Kompyuter va ofis" to="/kompyuter"/>
               <q-btn flat style="color: #333" class="text-overline" label="Maishiy elektronika" to="/maishiy"/>
            </div>
        <!--buttonlar uchun div tugashi-->
               <comp-carusel :massage="cars1"/>
               <comp-foto class="q-mt-xl"/>
               <CompMuddatli/>
               <CompChina class="q-mt-xl"/>
               <CompKichikCart :div="contents1" :com="fotos1"/>
               <CompElktronik :row="electronics1" :end="carts1"/>
               <CompMuddatli2/>
               <comp-carusel class="q-mt-lg" :massage="cars2"/>
               <CompElktronik :row="electronics2" :end="carts2"/>
               <comp-carusel class="q-mt-lg" :massage="cars2"/>
               <CompKichikCart :div="contents2" :com="fotos2"/>
               <CompText/>
         </div>
      </div>

  </div>
</template>
<script>
import  CompMuddatli from '../components/CompMuddatli'
import  CompCarusel from '../components/CompCarusel'
import  CompFoto from '../components/CompFoto'
import  CompChina from '../components/CompChina'
import CompKichikCart from '../components/CompKichikCart'
import  CompElktronik from '../components/CompElktronik'
import  CompMuddatli2 from '../components/CompMuddatli2'
import CompText from '../components/CompText'
export default {
    components:{
    CompCarusel,
    CompFoto,
    CompMuddatli,
    CompChina,
    CompKichikCart,
    CompElktronik,
    CompMuddatli2,
    CompText
},
    data() {
        return {
              // 3 - carusel
           cars1:[
              {names: 1, img: 'https://images.zoodmall.uz/app/banner/main_banner_62468a0f81ef9.jpg'},
              {names: 2, img: 'https://images.zoodmall.uz/app/banner/main_banner_625fe68a07492.png  '}
           ],
           cars2:[
              {names: 1, img: 'https://images.zoodmall.uz/app/banner/main_banner_625970054ba7e.jpg'},
              {names: 2, img: 'https://images.zoodmall.uz/app/banner/main_banner_6259710a7fd6b.jpg  '}
           ],
           cars3:[
              {names: 1, img: 'https://images.zoodmall.uz/app/banner/main_banner_625970054ba7e.jpg'},
              {names: 2, img: 'https://images.zoodmall.uz/app/banner/main_banner_6259710a7fd6b.jpg  '}
           ],
            // 3 - carusel tugashi
           contents1:[
              {span:'Mashhur toifalar',href:'Barchasini korish >'},

           ],
           contents2:[
              {span:'Mashhur brendlar',},
           ],
          fotos1:[
             {img:'https://images.zoodmall.com/app/homePageLayout/164642572289.png',text:'Quloqchinlar'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1648183863555.png',text:'Televizorlar'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1649233219938.png',text:'Asboblar toplami'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1649233051543.png',text:'soch soqol olish'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1646425750143.png',text:'Smart soatlar'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1648787611930.png',text:'Noutbuklar'},
             {img:'https://images.zoodmall.com/app/homePageLayout/1649655364434.png',text:'Fitnes bodybilding'}
          ],
          fotos2:[
            {img:'https://images.zoodmall.com/app/homePageLayout/1628177496379.png',text:'Xiaomi'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1594989896296.png',text:'Samsung'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1613723411561.png',text:'Apple'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1605625688424.png',text:'Artel'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1638774921287.png',text:'Lenovo'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1625573759483.png',text:'Vivo'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1607920423960.png',text:'Nokia'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1594993982190.png',text:'Huawei'},
            // {img:'https://images.zoodmall.com/app/homePageLayout/1622007040166.jpg',text:'Infinix'}
         ],
         carts1:[
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/47/20339847/164853531100620100652.jpeg',
               text:' Lenovo ideapad 1 noutboklari',uzs:'UZS 4,882,000',sena:'UZS 1,220,500 ',span:'x4'},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://radius.uz/upload/iblock/6b2/ox3ed08go4w4q5uzl4l53ye2t28pa4dl.jpg',
               text:'Smart soat Huawei GT-3',uzs:'UZS 2,500,000',sena:' ',span:''},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/30/17874930/165063171923819800900.jpeg',
               text:'Gaz plitasi Ferre BT60F',uzs:'UZS 3,540,000',sena:'UZS 885,000 ',span:'x4'},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://tezz.uz/uploads/images/product/521/97751_1.png',
               text:'Televizor Artel-UA 32 H1200',uzs:'UZS 2,242,000',sena:'',span:''},
             ],
         electronics1:[
              {span:'Elektronika x12 muddatli tolovga ',a:'Barchasini korish >',}
            ],
           carts2:[
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/47/20339847/164853531100620100652.jpeg',
               text:' Lenovo ideapad 1 noutboklari',uzs:'UZS 4,882,000',sena:'UZS 1,220,500 ',span:'x4'},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://radius.uz/upload/iblock/6b2/ox3ed08go4w4q5uzl4l53ye2t28pa4dl.jpg',
               text:'Smart soat Huawei GT-3',uzs:'UZS 2,500,000',sena:' ',span:''},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://upload.zoodmall.com/web/product/picture/30/17874930/165063171923819800900.jpeg',
               text:'Gaz plitasi Ferre BT60F',uzs:'UZS 3,540,000',sena:'UZS 885,000 ',span:'x4'},
              {img:'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://tezz.uz/uploads/images/product/521/97751_1.png',
               text:'Televizor Artel-UA 32 H1200',uzs:'UZS 2,242,000',sena:'',span:''},
             ],
         electronics2:[
              {span:'Elektronika x12 muddatli tolovga ',a:'Barchasini korish >',}
            ]
        }
    },

}
</script>
<style scoped>
.bg-dark{
  width: 100%;
  height:300px
}
.fit{
  width: 100%;
  height: auto;
}
.bg-grey-1{
 width:80%;
 height: auto;
}
.row{
 width:100%;
 height: 70px;
}

</style>
