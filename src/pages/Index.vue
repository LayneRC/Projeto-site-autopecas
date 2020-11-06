<template>
  <q-page>
    <div class="banner elevated shadow-4 animate__animated animate__fadeIn">
    </div>
    <div class="text-h1 text-grey-4 text-center text-banner">
      Banner
    </div>
    <div class="text-h5 text-grey-4 text-center text-banner">
      Slogan da empresa (caso houver)
    </div>
    <div class="btn-banner row justify-center" >
      <q-btn color="grey-1" text-color="cyan-9" label="Faça um orçamento" @click="alert = true" />
    </div>
    <q-dialog v-model="alert">
      <q-card class="dialog-orcamento bg-grey-2">
        <q-card-section>
          <div class="text-h6 text-center text-cyan-9">Solicite um Orçamento</div>
        </q-card-section>
        <form @submit.prevent="orcamentoSubmit" class="q-mt-md q-pb-md flex-center">
          <q-card-section class="q-pt-none">
            <div>
              <q-input class="col-6" color="cyan-8" label-color="cyan-8" v-model="textNome" outlined label="Nome"/>
              <q-input class="col-6 q-mt-md" color="cyan-8" label-color="cyan-8" v-model="textTelefone" outlined label="Telefone"/>
              <q-input class="col-6 q-mt-md" color="cyan-8" label-color="cyan-8" v-model="textVeiculoOrc" outlined label="Veículo"/>
              <q-input class="col-6 q-mt-md" color="cyan-8" label-color="cyan-8" v-model="textDescricao" outlined type="textarea" label="Descreva os produtos"/>
            </div>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              type="submit"
              :loading="submittingOrcamento"
              label="Enviar"
              color="cyan-8"
              >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="btn-whats">
      <q-btn fab color="green" class="btn-whats">
        <q-icon name="lab la-whatsapp" size="40px" color="white"/>
      </q-btn>
    </q-page-sticky>
    <div class="bg-grey-3 div-busca">
      <div class="q-pa-md text-h6 text-grey-7 text-center">
        Busque seu produto
      </div>
      <form @submit.prevent="buscaSubmit" class="row flex-center q-pb-md">
        <q-input class="col-2" color="cyan-8" label-color="cyan-8" v-model="textMarca" outlined label="Marca">
          <template v-slot:append>
            <q-icon name="las la-tags" color="cyan-8" />
          </template>
        </q-input>
        <q-input class="col-2 q-ml-md" color="cyan-8" label-color="cyan-8" v-model="textVeiculo" outlined label="Veículo">
          <template v-slot:append>
            <q-icon name="las la-car-side" color="cyan-8" />
          </template>
        </q-input>
        <q-input class="col-2 q-ml-md" color="cyan-8" label-color="cyan-8" v-model="textAno" outlined label="Ano">
          <template v-slot:append>
            <q-icon name="las la-calendar" color="cyan-8" />
          </template>
        </q-input>
        <q-btn
          type="submit"
          :loading="submitting"
          class="q-ml-md"
          color="cyan-8"
          >
          <q-icon name="las la-search" color="white"/>
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </form>
    </div>
    <div class="div-categorias row text-center ">
      <q-intersection
        v-for="index in 8"
        :key="index"
        :threshold="0.7"
        once
        transition="scale"
        class="example-item"
      >
      <div class="q-pl-xl q-ma-xl q-ml-xl q-mr-lg">
        <div
          class="animate__pulse flex inline shadow-box flex-center bg-cyan-8"
          :class="`shadow-5`">
          <q-icon name="las la-tools" size="30px" color="white"/>
        </div>
        <div class="text-center text-grey-7 app-font-light q-mt-sm" style="font-size: 14px">Categoria</div>
      </div>
      </q-intersection>
    </div>
    <div class="div-promo bg-blue-1">
      <div class="text-h4 text-center q-pa-md text-grey-9">
        Ofertas
      </div>
      <q-carousel
        v-model="slidePromo"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        arrows
        height="400px"
        class=" transparent"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap q-mb-xl">
            <q-card class="my-card col-3">
              <img src="~assets/img-exemplo.jpeg">
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card col-3 q-ml-md">
              <img src="~assets/img-exemplo.jpeg">
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
           <q-card class="my-card col-3 q-ml-md">
              <img src="~assets/img-exemplo.jpeg" >
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap q-mb-xl">
            <q-card class="my-card col-3">
              <img src="~assets/img-exemplo.jpeg" >
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card col-3 q-ml-md">
              <img src="~assets/img-exemplo.jpeg" >
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card col-3 q-ml-md">
              <img src="~assets/img-exemplo.jpeg" >
              <q-card-section>
                <div class="text-h6">Nome do Produto</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class=" text-h5 text-cyan-8">
                  R$ 100,00
                </div>
                <div class="text-h7 text-grey-7">
                  ou em até 10x de R$10,00
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      textMarca: '',
      textVeiculo: '',
      textAno: '',
      submitting: false,
      slidePromo: 1,
      alert: false,
      qtdOrcamento: '1',
      textNome: '',
      textTelefone: '',
      textVeiculoOrc: '',
      textDescricao: '',
      submittingOrcamento: false
    }
  },

  methods: {
    orcamentoSubmit () {
      this.submittingOrcamento = true
      setTimeout(() => {
        this.submittingOrcamento = false
      }, 3000)
    },

    buscaSubmit () {
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
      }, 3000)
    }
  }
}
</script>

<style>

.q-page {
  min-height: 1px !important;
}

.q-page-container {
  min-height: 1px !important;
  max-height: 2700px !important;
}
.banner {
  background-image: linear-gradient( 109.6deg,  rgba(44,83,131,1) 18.9%, rgba(95,175,201,1) 91.1% );  width: 100%;
  height: 100vh;
  position: relative;
  top: -190px;
  z-index: 1;
}

.text-banner {
  position: relative;
  z-index: 2;
  top: -550px;
}

.btn-banner {
  position: relative;
  z-index: 3;
  top: -480px;
}

.dialog-orcamento {
  width: 500px;
  height: 550px;
}

.btn-whats {
  border-radius: 100%;
  z-index: 3;
}

.my-card {
  width: 40vh;
  height: 30vh;
  max-width: 250px;
  position: relative;
}

.div-cards {
  max-width: 80%;
  position: relative;
  top: -200px;
}

.div-busca {
  position: relative;
  top: -355px;
  z-index: 0;
}

.shadow-box{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 12px;
}

.div-categorias {
  position: relative;
  top: -350px;
  max-width: 70%;
  margin: 0 auto;
}

.div-promo {
  position: relative;
  top: -350px;
}

.example-item {
  max-width: 70%
}
</style>
