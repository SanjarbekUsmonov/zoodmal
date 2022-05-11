<template>
  <div>
    <div class="container bg-white">
      <div class="text-h6">
          Lenovo L340-15API, 15.6HD, ATHLON 300U, 4GB DDR4, 1TB HDD, NO DVD, INTG VGA, NO OS
      </div>
        <button class="button q-mt-xl">Aslini ko'rsatish</button>
      <div class="text-h6">
        UZS 4,799,000
        <del class="text-orange text-subtitle1"> UZS 5,632,000</del>
        <span class="bg-orange text-subtitle1 q-ml-md">-15%</span>
      </div>
      <div class="text-subtitle2 text-blue q-mt-md">
          Tezkor yetkazib berish da O'zbekiston
        <div>
          <img style="width: 25px;height: 25px;" src="https://images.zoodmall.uz/app/appImages/shipping.png" alt="">
          <span class="text-grey">... dan yetkazish UZS 17,250</span>
        </div>
        <div>
          <img style="width: 25px;height: 25px;" src="https://images.zoodmall.uz/app/appImages/clock_new.png" alt="">
          <span class="text-grey">Taxminiy yetkazib berish-May 11 - May 12</span>
        </div>
        <div>
          <img style="width: 25px;height: 25px;" src="https://images.zoodmall.uz/app/appImages/delivery.png" alt="">
          <span class="text-grey">Eshikkacha -orqali - Fargo</span>
        </div>
      </div>

        <div class="miqdor q-mt-xl">
            <div class="buyurtma row  justify-between items-center content-center">
              <div>
                  Miqdor:
              </div>
              <div class="soni" style="display: flex;">
                  <div class="kamroq bg-red row justify-center content-center" style="width: 50px;height:50px">
                      <div>
                        -
                      </div>
                  </div>
                  <div class="nechta bg-blue" style="width: 80px;height: 50px;">

                  </div>
                  <div class="koproq bg-yellow row justify-center content-center" style="width: 50px;height:50px">
                      <div>
                        +
                      </div>
                  </div>
              </div>
              <div class="text-orange">
                  omborda mavjud
              </div>
           </div>

           <div class="q-mt-md">
               <q-btn padding="15px 28px" color="primary" label="SAVATGA QO'SHISH" />
               <q-btn  class="q-ml-md" text-color="dark" padding="15px 32px" color="yellow" label="HOZIROQ HARID QILISH 4,799,000" />
           </div>
        </div>
        <div>
          <q-img src="">

          </q-img>
        </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container{
  width: 555px;
  height: 500px;
  border: none;
}
.button{
  background-color: rgb(252, 210, 210);
  color:orange;
  font-size: 13px;
  padding: 5px 15px;
  border: solid 1px orange;
}
.button:hover{
  background-color: orange;
  color: rgb(248, 242, 242);
  cursor: pointer;
}
.miqdor{
  width: 100%;
  height: 50px;
}
.buyurtma{
  width: 70%;
  height: 50px;
}
.soni{
  width: 180px;
  height: 50px;
}
</style>
