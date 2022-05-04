<template >
  <div>

    <div class="bg-white fit row wrap justify-around items-center content-center " >
      <div  v-for="foto in fotos" :key="foto" class="text-center" >
        <div>
           <img :src="foto.img" alt="">
        </div>
        <div>
           {{foto.rasmlar}}
        </div>
      </div>
   </div>

  </div>
</template>
<script>
export default {
      data() {
        return {
          fotos:[
            {img:'https://images.zoodmall.com/app/homePageLayout/164878526236.png',rasmlar:' Mahalliy sotuvchilar'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1649053123232.png',rasmlar:'Muddatli tolov x12'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1650258437476.png',rasmlar:'Top ekektronika'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1650258515633.png',rasmlar:'Bepul yetkazib berish'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1648785800294.png',rasmlar:'Smartfonlar x12'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1650258635974.png',rasmlar:'Chegirma 60% gacha'},
            {img:'https://images.zoodmall.com/app/homePageLayout/165025872538.png',rasmlar:'Xitoydan eng yaxshisi'},
            {img:'https://images.zoodmall.com/app/homePageLayout/1650258814283.png',rasmlar:'Avtomahsulotlar'}
          ]
        }
      },
}
</script>
<style scoped>
.bg-white{
  width:100%;
  height:300px;
}
.text-center{
  width: 250px;
  height: 130px;
}

</style>
