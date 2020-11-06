<template>
  <q-page>
    <div class="animate__animated animate__fadeIn">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        control-color="cyan-9"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="1" class="bg-grey-3 column no-wrap">
          <div class="row flex flex-center">
            <div class="text-center">
              <div class="text-h4 text-bold text-grey-7">
                Nome do produto
              </div>
              <div class="text-h3 text-cyan-8 text-bold q-mt-xl">
                R$400,00
              </div>
            </div>
            <q-img
              src="~assets/peca1.png"
              class="q-pa-md col-4 full-height"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="bg-grey-3 column no-wrap">
          <div class="row flex-center">
            <div class="text-center">
              <div class="text-h4 text-bold text-grey-7">
                Nome do produto
              </div>
              <div class="text-h3 text-cyan-8 text-bold q-mt-xl">
                R$400,00
              </div>
            </div>
            <q-img
              src="~assets/peca2.png"
              class="q-pa-md col-4 full-height"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="bg-grey-3 column no-wrap">
          <div class="row flex-center">
            <div class="text-center">
              <div class="text-h4 text-bold text-grey-7">
                Nome do produto
              </div>
              <div class="text-h3 text-cyan-8 text-bold q-mt-xl">
                R$400,00
              </div>
            </div>
            <q-img
              src="~assets/peça3.png"
              class="q-pa-md col-3 full-height"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="row">
      <div class="bg-grey-1 q-pa-md col-3" style="width: 20%">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-model="expanded"
            expand-separator
            label="Categorias"
            header-class="text-cyan-8 text-bold"
            >
            <q-card>
              <q-scroll-area style="height: 300px">
              <q-card-section>
                <q-item clickable v-ripple v-for="n in 10" :key="n">
                  <q-item-section>Categoria</q-item-section>
                </q-item>
              </q-card-section>
              </q-scroll-area>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            v-model="expanded"
            expand-separator
            label="Marcas"
            header-class="text-cyan-8 text-bold"
            >
            <q-card>
              <q-scroll-area style="height: 300px">
              <q-card-section>
                <q-item clickable v-ripple v-for="n in 10" :key="n">
                  <q-item-section>Marca</q-item-section>
                </q-item>
              </q-card-section>
              </q-scroll-area>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            v-model="expanded"
            expand-separator
            label="Ano"
            header-class="text-cyan-8 text-bold"
            >
            <q-card>
              <q-scroll-area style="height: 300px">
              <q-card-section>
                <q-item clickable v-ripple v-for="n in 10" :key="n">
                  <q-item-section>Ano</q-item-section>
                </q-item>
              </q-card-section>
              </q-scroll-area>
            </q-card>
          </q-expansion-item>
          <q-item-label header class="text-cyan-8 text-bold">Preço</q-item-label>
          <q-item>
            <q-item-section side>
            </q-item-section>
            <q-item-section>
              <q-range
                v-model="label"
                :min="0"
                :max="2000"
                :step="4"
                label
                color="cyan-8"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-9 flex flex-center">
        <div class="row q-mt-md">
          <div class="col-6">
            <q-input
              outlined
              dense
              v-model="search"
              color="cyan-8"
              placeholder="Pesquisar produto"
              class="col-4">
              <template v-slot:append>
                <q-icon name="las la-search" color="grey" />
              </template>
            </q-input>
          </div>
          <div class="q-ml-sm col-5">
          <q-select
            outlined
            dense
            v-model="ordenar"
            :options="opcoesOrdenar"
            behavior="menu"
            label="Ordenar"
          />
        </div>
        </div>
        <div class="row q-gutter-xl q-ma-xs flex flex-center">
          <q-card v-for="n in 9" :key="n"  class="my-card-products col-3">
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
        <div class="flex flex-center q-mt-md q-mb-md">
          <q-pagination
            v-model="current"
            :max="5"
            :direction-links="true"
            color="cyan-8"
            >
          </q-pagination>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const opcoesOrdenar = [
  'Menor Preço', 'Maior Preço', 'A - Z', 'Z - A'
]
export default {
  name: 'PageSobre',
  data () {
    return {
      slide: 1,
      autoplay: true,
      expanded: true,
      label: {
        min: 0,
        max: 2000
      },
      search: '',
      ordenar: '',
      opcoesOrdenar,
      options: 'opcoesOrdenar',
      items: [{}, {}, {}, {}, {}, {}, {}],
      current: 1
    }
  },

  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    }
  }
}
</script>

<style>

.banner-produtos {
  background-image: linear-gradient( 109.6deg,  rgba(44,83,131,1) 18.9%, rgba(95,175,201,1) 91.1% );  width: 100%;
  height: 30vh;
  top: -50px;
  position: absolute;
  z-index: 1;
}

.q-page {
  min-height: 1px !important;
}

.q-page-container {
  min-height: 1px !important;
  max-height: 2700px !important;
}

.text-titulo {
  position: relative;
  z-index: 2;
}

.my-card-products {
  width: 10px ;
  height: 10px;
  max-width: 20px;
}

</style>
