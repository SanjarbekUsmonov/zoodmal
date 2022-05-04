<template >
  <div>
      <div class="container fit row  justify-center items-center content-center">
        <div class="content bg-grey-1">
            <div style="width:100%;height:70px" class=" row  justify-around items-center content-center ">
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Ayollar kiyimlari" to="/ayollar"/>
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Erkaklar kiyimlari" />
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Telefonlar va aksessuarlar" />
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Kompyuter va ofis" />
              </div>
              <div>
                  <q-btn flat style="color: #333" class="text-overline" label="Maishiy elektronika" />
              </div>
           </div>
            <CompAyollar/>
        </div>
     </div>
  </div>
</template>
<script>
import CompAyollar from "../components/CompAyollar";
export default {
    components: {
     CompAyollar
    }
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 1300px;
}
.content{
  width: 70%;
  height: 1300px;
}
.row{
 width:100%;
 height: 70px;
}
</style>
