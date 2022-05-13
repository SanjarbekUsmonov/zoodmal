<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class=" navbar bg-yellow text-white  ">

          <div class="row  justify-center items-start content-start">
              <div class="nav bg-yellow row  justify-between items-center content-center " >
                 <div style="width: 200px; height: 50px;" class="bg-yellow row  items-start content-center ">
                    <q-img
                      src="https://static.zoodmall.uz/_nuxt/img/zoodmall-logo.1688b2e.svg">
                    </q-img>
                 </div>
                 <div class="input">
                    <q-input
                    borderless
                    bg-color="grey-1"
                    v-model="search"
                    debounce="500"
                    filled
                    placeholder="Search"

                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                 </div>
                 <div style="width:120px; height:30px; display: flex;">
                   <div style="width: 25px; height: 25px;" class="icon">
                      <q-img src="	https://static.zoodmall.uz/_nuxt/img/heart.b7368f4.svg">

                   </q-img>
                   </div>
                   <div style="width: 25px; height: 25px;" class="icon q-ml-md">
                     <q-img src="https://static.zoodmall.uz/_nuxt/img/card.86e0a1d.svg">

                   </q-img>
                   </div>
                   <span class="q-ml-md text-dark ">
                     savat
                   </span>

                 </div>
            </div>
          </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey text-white">
      <q-toolbar>
        <q-toolbar-title>
              <div class="text-h6 text-center">
                  © 2020 ZoodMall quvonchli xaridlar
              </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

</script>

<style scoped>
.nav{
  height: 70px;
}
.nav{
  width: 80%;
  height: 60px;
}
.input{
  width: 440px;
}
.icon:hover{
 margin-top: 3px;
}
</style>
