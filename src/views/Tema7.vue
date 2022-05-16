<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 7
      h1 Publicación de fotografías

    p.mb-4 Las redes sociales son un puente de comunicación entre los emprendedores y los potenciales clientes, por ello la importancia de que esta conexión sea lo más duradera posible ya que día a día los mercados evolucionan y se fortalecen con una imagen de marca, la estructura debe ser fuerte, para que perdure en el tiempo. La fotografía es la herramienta básica de este proceso, y las imágenes son tan importantes como la forma en que se comunica, dando vida al proyecto, ordenándolo y definiéndolo. Un perfil que contiene fotos profesionales y debidamente iluminadas no da la misma impresión que un perfil que contiene fotos oscuras y de baja definición. Todo pasa por el mundo del marketing digital.

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
      p.col-xl-7.pe-xl-4.order-2.order-xl-1 La imagen lo es todo, representa la identidad de la marca, de igual forma determina sus potenciales seguidores. Es importante determinar el tipo de personas a las que está destinada la publicación de un bien, servicio o producto. Por esta razón, las fotos son muy importantes. Determine muy bien su nicho de intervención es importante que la foto sea lo más auténtica posible, con el fin de que el consumidor no se desligue del producto original. Vale la pena señalar que la transparencia y la comunicación son las bases para conectarse con los seguidores. 
        br
        br
        |Por ejemplo, en Instagram, es importante tener un feed (espacio visual) bien organizado y ordenado que transmita los ideales de la marca y su simbología de colores. En este caso, si se maneja una paleta de colores es importante que esta sea armoniosa y consistente
      img(src="@/assets/curso/temas/tema7/img-1.png" style="max-width: 504px").order-1.order-xl-2.mb-4.mb-xl-0.mx-auto

    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5.col-lg-8.mx-auto
      img(src="@/assets/curso/temas/tema7/img-2.png" style="max-width: 63px").mb-4.mb-md-0.mb-4.mb-md-0.mx-auto
      .ps-md-4
        .text-decorator-top-right
          p En este aparte se tomará como referencia la red social Instagram y cómo se puede subir una imagen desde un dispositivo móvil y desde un ordenador.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.text-decorator-top-right
  position: relative
  p
    position: relative
    margin-bottom: 0
    z-index: 1
  &::before
    content: ''
    position: absolute
    z-index: 0
    width: 85px
    height: 49px
    background-color: #FFF2BE
    top: -.7rem
    right: -.5rem
</style>
