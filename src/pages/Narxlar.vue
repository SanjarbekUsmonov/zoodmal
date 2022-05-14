<template >
  <div>
      <div class="container fit row  justify-center items-center content-center bg-grey-1">
        <div class="content bg-grey-1 q-mt-md">
                 <q-btn color="primary" label="Zoodmall" to="/"/>  <span class="text-h7 text-grey"> / Kopmpyuter va ofis</span>
         <div  class=" row  justify-around items-center content-center ">
             <q-btn flat style="color: #333" class="text-overline" label="Ayollar kiyimlari" to="/ayollar"/>
             <q-btn flat style="color: #333" class="text-overline" label="Erkaklar kiyimlari" to="/erkaklar" />
             <q-btn flat style="color: #333" class="text-overline" label="Telefonlar va aksessuarlar" to="/telefonlar"/>
             <q-btn flat style="color: #333" class="text-overline" label="Kompyuter va ofis" to="/kompyuter"/>
            <q-btn flat style="color: #333" class="text-overline" label="Maishiy elektronika" to="maishiy"/>
        </div>

           <div class="section  row  justify-between items-start content-start">
              <CompNarxlar/>
              <CompNarxlar2/>
           </div>

            <div class="foter">

            </div>
        </div>
     </div>
  </div>
</template>
<script>
import CompNarxlar from 'src/components/CompNarxlar'
import CompNarxlar2 from 'src/components/CompNarxlar2'
export default ({
  components: { CompNarxlar, CompNarxlar2 },


})
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
.section{
  width: 100%;
  height: auto;

}
</style>
