<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 1
      h1 Edición fotográfica

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-1.png").col-lg-4.mb-4.mb-lg-0.mx-auto
      p.col-lg-8.ps-lg-4.mb-0 Este es un método con el cual se pueden obtener resultados extraordinarios, <b>es una técnica que incide notablemente en el aspecto final de una fotografía</b>. Ofrece la posibilidad de alimentar una imagen con creatividad ilimitada. 
        br
        br
        | Es muy importante tener claros los conceptos más relevantes en edición fotográfica los cuales se enfocan directamente con los elementos de la luz en la fotografía y siendo necesaria para los trabajadores del sector como lo dice <b>Toomany Flash (2021) “ciertamente, saber de edición de fotos y retoque digital te posicionará como un artista integral en el mercado fotográfico sin importar en qué disciplina te especialices”.</b> A continuación, se invita a revisar, seis conceptos de importancia frente a la edición fotográfica.

    .d-flex.flex-wrap.mb-5
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-2.png")
          .container-body-text
            p.title.fw-bold La exposición
            p.content Está relacionada con la cantidad de luz recibida por el sensor de la cámara. Esto da como resultado tomas adecuadamente expuestas, es decir, con (con la cantidad correcta de luz), subexpuestas (bajo la exposición correcta) y sobreexpuestas (sobre la exposición correcta).
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-3.png")
          .container-body-text
            p.title.fw-bold El contraste
            p.content Es la diferencia que se produce entre los tonos claros y oscuros de una foto. Editar estos valores le dará una imagen más clara o un aura más etérea. En general, le ayudará a mejorar la definición y nitidez a una foto, mejorando los contornos con el fin de lograr efectos más artísticos.
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-4.png")
          .container-body-text
            p.title.fw-bold Altas luces, sombras y cantidad de blanco y negro
            p.content Son conceptos similares y parecen funcionar igual; sin embargo, en un contexto real son temas totalmente diferentes. Las luces altas funcionan para controlar el brillo de las partes más expuestas de una foto. De igual manera sucede con las sombras, dado que es una herramienta útil para controlar la luz en áreas subexpuestas.
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-5.png")
          .container-body-text
            p.title.fw-bold Balance de blancos temperatura y matiz
            p.content Es fundamental el balance de blancos plasmados en una fotografía, esto ayudará a manipular la superioridad de amarillos, este fenómeno es común en la fotografía digital. La temperatura está relacionada con el calor y el frío de la luz y puede compensar las bombillas incandescentes y otros factores que no se tuvieron en cuenta al tomar la fotografía.
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-6.png")
          .container-body-text
            p.title.fw-bold Saturación e intensidad 
            p.content Con la saturación se podrá manejar directamente la integridad del color, es decir la cantidad de pigmentación con la que puede contar un color. La intensidad realiza su acción sobre los colores con menos saturación y, de igual forma, modifica su cantidad de apariencia.
      .col-xl-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-7.png")
          .container-body-text
            p.title.fw-bold Nitidez
            p.content Se conoce también como estructura de acuerdo con el programa de edición que se utilice, esta herramienta permite trabajar con la variedad de luces y sombras en los tonos medios. Al momento de aumentar la nitidez se tendrá una mejor definición de fotos, se podrá quitar el suavizado de las tomas en RAW ya que es una característica de la nitidez.

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Técnicas de edición

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.mb-5
      p.col-lg-8.pe-lg-4.mb-0.order-2.order-lg-1 Editar fotografía es un proceso que muchos profesionales hacen con tanta naturalidad que permiten recomendar ciertas estrategias para intervenir una imagen antes de sacarla a la luz como lo dice <b>Rodríguez (2021) “actualmente, es muy común ver cómo los programas de edición de fotos se han convertido en algo tan importante y fundamental, al momento de revelar al mundo la imagen perfecta”</b>, el uso de un software de edición hace maravillas en el proceso. La mayoría de las técnicas de edición se basan en cierta medida en la iluminación, las fotos se escriben en la luz, sin una buena exposición de luz difícilmente se obtendría una buena fotografía, por eso, hay que editar estos valores a la hora de llevar la imagen un paso más allá. 
        br
        br
        | Un software se puede definir como un programa, o conjunto de programas, que permiten manipular una diversa cantidad de herramientas y elementos intangibles que permiten desarrollar diferentes tipos de acciones y tareas dentro de un sistema informático. Si bien es cierto existen diversidad de programas para el manejo y el uso de ilustración digital, <b>Adobe es una de las empresas más importantes</b> y especializadas en programas de software de diseño que integra muchas herramientas enfocadas a la ilustración, el video, el arte y la fotografía entre otros en su Suite Creative Cloud, es por eso que se hablará primero de un software para edición de imágenes en un ordenador, seguido se hablará de un editor de fotografías en un dispositivo móvil.
      img(src="@/assets/curso/temas/tema1/img-8.png" style="max-width: 400px").col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2.mx-auto
    
    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorImagenHover: true,
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
.container-interactive-hover-text
  position: relative
  overflow: hidden
  border-radius: 15px
  max-width: 400px
  img
    width: 100%
  .container-body-text
    position: absolute
    top: calc(100% - 50px)
    bottom: auto
    width: 100%
    height: 100%
    background-color: #A5F4FFD0
    padding-right: 1rem
    padding-left: 1rem
    transition: all .5s ease-in-out
    .title
      padding-top: 18px
      padding-bottom: 16px
      margin-bottom: 0
      widows: 100%
      text-align: left
  &:hover
    .container-body-text
      background-color: #A5F4FFD0
      top: 0
  @media (max-width: 768px)
    .container-body-text
      overflow: scroll
</style>
