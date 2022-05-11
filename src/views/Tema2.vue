<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 2
      h1 Corrección de color
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    actionSlideRight() {
      if (this.indexSlider >= 8) {
        this.indexSlider = 1
      } else {
        this.indexSlider += 1
      }
    },
    actionSlideLeft() {
      if (this.indexSlider == 1) {
        this.indexSlider = 8
      } else {
        this.indexSlider -= 1
      }
    },
  },
}
</script>

<style lang="sass"></style>
