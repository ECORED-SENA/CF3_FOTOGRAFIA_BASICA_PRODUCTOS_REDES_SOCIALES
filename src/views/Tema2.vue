<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 2
      h1 Corrección de color
      
    .d-flex.flex-wrap.flex-xl-nowrap.mb-5
      .col-xl-7.pe-xl-4.order-2.order-xl-1
        p La corrección de color en fotografía es el ejercicio de tomar una imagen y editarla pensando en su proceso de edición específica, los escenarios de color de la fotografía digital son el resultado de una combinación de diferentes tecnologías y conceptos que deben tenerse en cuenta, algunos de los cuales son más importantes que otros escenarios en determinadas situaciones. Por ejemplo, al usar RAW, el balance de blancos es menos importante que en otros formatos, se debe tener en cuenta el tipo de formato a utilizar el cual podrá ser JPG, PNG o RAW a la hora de hacer este ajuste tal como lo dice Domestika (2020):
        .text-decorator-right-bottom
          p.fw-bold La corrección de color es una actividad sumamente creativa, el editor puede contar una historia y aportar narrativa a la misma, el colorista tiene la capacidad de evocar emociones a través de la manipulación de imágenes mediante el color, modificando digitalmente la exposición, el balance de blancos, el contraste, la tonalidad, etcétera, mediante el uso de software y herramientas especializadas.
      img(src="@/assets/curso/temas/tema2/img-1.png").col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0
    
    .bloque-texto-g.color-secundario.container-box-bloque-img.p-3.p-sm-4.p-md-5.col-lg-10.mx-auto.mb-5
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Durante un proceso de edición fotográfica el enfoque para trabajar con los colores está ligado a ampliar u optimizar el contraste, corregir inconvenientes de balance de blancos, ajustar los puntos de partida de negros y blanco de la paleta, reparación del ruido excesivo de los ajustes de ISO complejos, ajustar las dificultades de exposición.

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5
      p.col-xl-7.pe-xl-4 Por lo general, en casi todas las fotos, sin importar lo bien que se tomen, se requieren algunas acciones correctivas. Este es el primer escenario para comenzar antes de pensar en hacer algo con color. Después de realizar los ajustes necesarios, se avanza de nivel, esto significa que puede manipular los colores para conseguir colores más realistas, o puede obtener un terminado específico que mantenga una coincidencia entre todas las fotos que edito.
        br
        br
        | Los histogramas son herramientas gráficas importantes para saber qué tan correcta es la exposición de una imagen. Por lo tanto, una foto subexpuesta, el gráfico tiende a desplazarse hacia la izquierda para fotos subexpuestas y hacia la derecha para fotos sobreexpuestas como se ve en la siguiente imagen:
      img(src="@/assets/curso/temas/tema2/img-3.png").col-xl-5
    
    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.flex-wrap.flex-lg-nowrap.mb-5
      .col-lg-4.pe-xl-4.d-flex.align-items-center
        .bloque-texto-d.color-acento-botones.p-4.p-lg-0.container-bg-text(style="border-color: transparent")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #FFD947")
            h4.fw-bold.text-regular El color en la imagen digital se refiere a qué cantidad de datos suministrados a un pixel para establecer su color.
            i.fas.fa-quote-right.float-end.mt-3(style="color: #FFD947")
          .bloque-texto-d__autor.w-100.mt-3
            .h5.mb-0.float-start.fw-normal Domínguez, 2021
      p.col-lg-8 Se debe recordar que un pixel no solo tiene alto × ancho; también tiene una profundidad y desde ahí se puede interpretar que, dentro del pixel hay un contenedor que permite agregar color.
        br
        br
        | Cuando se hace referencia a los modos de color para ser visto desde una pantalla de cualquier dispositivo electrónico, como lo sería una pantalla de computador, tablet, teléfono móvil, cualquier equipo que tenga la capacidad de proyectar imágenes a color; se denominan RGB, siglas en inglés de Red, Green, Blue. Lo que quiere decir que el rojo, verde y azul son colores básicos en estas retículas digitales (pantallas), que una vez sus cargas electrónicas que combinadas toman otros colores ampliando la gama tonal. Cuando se hace referencia al modo de color de una imagen que va a ser impresa sea una fotografía o cualquier otro tipo, se conoce como CMYK y corresponde a los colores Cian, Magenta, Yellow y Black. Este modo de color debe saberse que está vinculado con la impresión y será esto lo que defina el modo CMYK.

    .cajon.color-acento-botones.p-4.mb-5.bg-cajon-edit.col-lg-10.mx-auto.mb-5
      p.mb-0 No se debe pasar por alto que los modos de color RGB y CMYK, tanto en la imagen digital como en la impresa, tienen en su configuración tono, luminosidad y saturación (HLS) que darán contrastes y diferencias entre los colores, las correcciones de color son procesos complejos y depende mucho de la foto y de las necesidades específicas de cada proceso y se pueden usar individualmente o en conjunto para buscar los resultados esperados, a continuación se explica brevemente en que consiste cada uno:

    .d-flex.flex-wrap.justify-content-center.mb-5
      img(src="@/assets/curso/temas/tema2/img-4.png" style="max-width: 295px; width: 100%").mt-md-5.me-md-3.mb-4.mb-md-0
      img(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 295px; width: 100%").mb-md-5.ms-md-3
    
    AcordionA.mb-5.acordeon-a(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center.col-xl-11.mx-auto(titulo="Curvas de colores")
        img(src='@/assets/curso/temas/tema2/img-6.png' style="max-width: 356px").col-xl-3.mx-auto.mb-4.mb-xl-0.px-lg-0.ms-auto
        .col-xl-9.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Las curvas de color permiten manipular la imagen para estabilizar las relaciones entre cada canal RGB y obtener una foto con colores lo más cercanos posible a la escena original.

      .row.align-items-center.col-xl-11.mx-auto(titulo="Brillo y contraste")
        img(src='@/assets/curso/temas/tema2/img-7.png' style="max-width: 356px").col-xl-3.mx-auto.mb-4.mb-xl-0.px-lg-0.ms-auto
        .col-xl-9.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Aquí se pueden corregir las alteraciones en las imágenes brillantes u oscuras causadas por errores en la exposición de la foto, la iluminación y otros parámetros. Al agrandar el contraste le da a la imagen un aspecto dramático y expresivo.
      
      .row.align-items-center.col-xl-11.mx-auto(titulo="Tono, saturación y luminosidad")
        img(src='@/assets/curso/temas/tema2/img-8.png' style="max-width: 356px").col-xl-3.mx-auto.mb-4.mb-xl-0.px-lg-0.ms-auto
        .col-xl-9.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Esto permite cambiar una foto desde tres aspectos básicos., se Puede cambiar el tono de color de la imagen dentro del rango de tono y espectro. La saturación indica la cantidad de color que contiene la imagen (cuando la saturación es mínima, la foto será en blanco y negro). La intensidad luminosa indica la cantidad de luz.
      
      .row.align-items-center.col-xl-11.mx-auto(titulo="Balance de color")
        img(src='@/assets/curso/temas/tema2/img-9.png' style="max-width: 356px").col-xl-3.mx-auto.mb-4.mb-xl-0.px-lg-0.ms-auto
        .col-xl-9.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Puede ser similar a una curva de color. La presencia de cada color se puede aumentar, disminuir o aumentar, lo que lo hace ideal para corregir rápidamente tonos claros, medios tonos y sombras individualmente y entre canales.
      
      .row.align-items-center.col-xl-11.mx-auto(titulo="Niveles de color")
        img(src='@/assets/curso/temas/tema2/img-10.png' style="max-width: 356px").col-xl-3.mx-auto.mb-4.mb-xl-0.px-lg-0.ms-auto
        .col-xl-9.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Su comportamiento es similar al balance de color, pero se diferencia de este último porque se puede ajustar no solo la intensidad de cada color, sino también el brillo y el rango de toda la imagen o de cada canal que la compone. Esto es ideal para corregir imágenes muy oscuras o brillantes, que generalmente también tienen problemas de tonalidad.

    P.mb-5 Usar color en las imágenes es una de las mejores formas de trabajar las fotografías, sin embargo es muy usado el blanco y negro con la escala de grises para dar detalles sorprendentes a las imágenes, es por eso que se requiere para este momento de su proceso formativo que se rete haciendo el siguiente ejercicio. <b>Comparta con su grupo de trabajo el resultado del ejercicio y comente qué le pareció.</b>

    .tarjeta.color-primario.p-3.mb-5.col-xl-10.mx-auto(style="background: linear-gradient(0deg, rgba(103,235,253,1) 0%, rgba(131,239,254,1) 25%, rgba(167,244,255,1) 75%, rgba(180,246,255,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img-11.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: black !important") Tutorial
              p.text-small(style="color: black !important") Ahora se le reta a convertir una imagen de su elección a blanco y negro sin perder detalles visuales siguiendo el tutorial de Cerebrote (2019).
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="'https://www.youtube.com/watch?v=5Cmn3O7kEgQ&t'" target="_blank")
                span(style="color: black !important") Ver más
                i.fas.fa-link(style="color: black !important")

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

<style lang="sass">
.text-decorator-right-bottom
  position: relative
  p
    position: relative
    margin-bottom: 0
    z-index: 1
  &::before
    content: ''
    position: absolute
    z-index: 0
    width: 356px
    height: 98px
    background-color: #FFF2BE
    bottom: -3.5rem
    right: 0
.container-box-bloque-img
  @media (min-width: 992px)
    .bloque-texto-g__img
      width: 45%
    .bloque-texto-g__texto
      width: 76%
.container-bg-text
  &.bloque-texto-d.color-acento-botones:before
    background-color: #EEF5FA !important
.bg-cajon-edit
  display: flex
  align-items: center
  &.cajon.color-acento-botones
    background-color: #FFF2BE
.acordeon-a
  .tarjeta
    transition: all .4s linear
  .acordion__activo
    background-color: #F0F8FF
</style>
