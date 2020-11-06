<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1 no-shadow">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
    >
    <q-header class="transparent no-shadow">
      <q-toolbar :class="{'scrolledBar' : !atTopOfPage}">
        <q-toolbar-title :class="{'scrolledTitle' : !atTopOfPage}" class="text-title q-ml-lg">
          LOGOTIPO
        </q-toolbar-title>
        <q-tabs
          v-model="tab"
          no-caps
          dense
          indicator-color="white"
          class="tabs-home"
          :class="{'scrolledTab' : !atTopOfPage}"
          >
          <q-route-tab name="Home" label="Home" to="/"/>
          <q-route-tab name="Produtos" label="Produtos" to="/produtos" />
          <q-route-tab name="Sobre" label="Sobre" to="/sobre" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class=" row bg-grey-7 div-rodape flex flex-center full-width">
      <div class="q-pa-xl">
        <div class="text-white text-subtitle2 q-pl-xl" style="font-size: 17px">
          Localização
        </div>
        <div class="text-white q-ml-xl q-mt-md text-body2">
          rua A <br> Bairro ABC <br> 123
        </div>
      </div>
      <div class="">
        <div class="text-white text-subtitle2 q-pl-xl" style="font-size: 17px">
          Contatos
        </div>
        <div class="text-white q-ml-xl q-mt-md text-body2">
          (77)99999-9999 <br> autopeças@autopeças.com
          <div class="row">
          <q-icon name="lab la-instagram" color="white" size="25px"/>
          <q-icon name="lab la-facebook" color="white" size="25px"/>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      tab: 'Home',
      atTopOfPage: true
    }
  },

  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      if (window.pageYOffset > 400) {
        if (this.atTopOfPage) this.atTopOfPage = false
      } else {
        if (!this.atTopOfPage) this.atTopOfPage = true
      }
    }
  }

}
</script>

<style lang="scss">
.q-page {
  min-height: 1px !important;
  max-height: 1450px !important;
}

.q-layout {
  min-height: 0px !important;
    max-height: 1500px !important;

}
.tabs-home{
  margin-right: 5vh;
  color: white;
}

.scrolledBar {
  background-color: white;
  box-shadow: 1px 0px 10px grey;
  color: black;
}

.scrolledTitle {
  color: $grey-7;
}

.scrolledTab {
  margin-right: 5vh;
  color: $grey-7 !important;
}

.scrolledTab a:active {
  color: blue !important;
}

.div-rodape {
  bottom: 0;
  height: 200px;
}

</style>
