<template>
    <q-page>
        <div class="banner-sobre shadow-4 flex flex-center full-width window-height">
          <div class="animate__animated animate__fadeInRight fixed-right div-fundo-img">
          </div>
          <div class="div-sobre row q-pa-md flex flex-center">
          <div class=" col-4 text-body2 q-mr-lg animate__animated animate__fadeIn">
            <div class="text-bold text-h4 text-cyan-8 q-mb-xl">
              Nossa loja
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <div class="animate__animated animate__fadeIn">
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
              :autoplay="autoplay"
              arrows
              height="300px"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              class="rounded-borders"
              style="width: 600px"
            >
              <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
          </div>
        </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'PageSobre',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  },

  methods: {
  }
}
</script>

<style>

.banner-sobre {
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

.div-sobre {
    height: 30em;
    position: relative;
}

.div-fundo-img {
  background-image: linear-gradient( 109.6deg,  rgba(44,83,131,1) 18.9%, rgba(95,175,201,1) 91.1% );  width: 100%;
  width: 35%;
  height: 100%;
  position: absolute;
  top: 0%;
}

</style>
