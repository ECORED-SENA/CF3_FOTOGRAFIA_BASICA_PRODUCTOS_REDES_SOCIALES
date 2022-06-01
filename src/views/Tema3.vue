<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 3
      h1 Formatos de archivos fotográficos 

    .d-flex.flex-wrap.align-items-center.flex-lg-nowrap.mb-5
      .col-lg-5.pe-xl-4.d-flex.align-items-center
        .bloque-texto-d.color-acento-botones.p-4.p-lg-0.container-bg-text(style="border-color: transparent")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #FFD947")
            h4.fw-bold.text-regular Una imagen es una representación a nivel visual de un determinado elemento, lo cual se obtiene al emplear ciertas técnicas que están relacionadas con el arte, la fotografía, el vídeo, el diseño y demás disciplinas.
            i.fas.fa-quote-right.float-end.mt-3(style="color: #FFD947")
          .bloque-texto-d__autor.w-100.mt-3
            .h5.mb-0.float-start.fw-normal Crehana, 2019
      p.col-lg-7.mb-0 La digitalización de la imagen, la utilización de los diferentes dispositivos de almacenamiento y la circulación, hacen que los tipos de imágenes tengan diferencias significativas en su matriz. En las imágenes fotográficas digitales su matriz es una retícula de pixeles que se asume como un mapa de <em>bits</em>; la suma de pixeles para la construcción de la imagen latente. Con el fin de hablar acerca del tipo de imagen se tomará como referencia las imágenes de mapa <em>bits</em>.

    .bloque-texto-g.color-secundario.container-box-bloque-img.p-3.p-sm-4.p-md-5.col-lg-10.mx-auto.mb-5
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Imágenes de mapa de <em>bits</em>: también conocidas como imagen <em>bitmap</em>, son imágenes que se componen por un conjunto de los cuales se conocen como pixeles, cada uno de ellos tiene un color y luminosidad propia, y al momento de unirse en una composición construyen una imagen determinada. Este tipo de imagen cuenta con una gama mayor de colores y de tonos que las imágenes vectoriales, por tal su uso específico es en la fotografía. Es el tipo de imagen que se crea en los escáneres, cámaras fotográficas y programas de dibujo y de edición de fotos.

    p.mb-5 Esta categoría de imágenes que su matriz es un mapa de <em>bits</em> tiene los siguientes formatos de archivos siendo los más conocidos: JPG, PNG, TIF, BMP y RAW. Formatos donde cada uno tiene diferente capacidad de contener cierta cantidad de <em>bits</em> según su utilidad y circulación; es decir, visualización como se puede ver en el siguiente recurso:

    ImagenInfografica.color-acento-contenido.mb-5.col-md-10.col-xl-7.mx-auto.img-infografica
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-2.svg', alt='Formatos de imagen' )

      .tarjeta.color-acento-botones(x="58%" y="32%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #FFD947")
          .p-4.ps-5
            .h5.mb-2 JPG (<em>Joint Photographic Group</em>)
            br
            p Es el formato de imagen más común; permite comprimirse fácilmente en diversas aplicaciones con el fin de tener un archivo de menor tamaño y de aceptable calidad. Es un archivo compatible con la gran mayoría de dispositivos móviles del mercado.

      .tarjeta.color-acento-botones(x="65.5%" y="50%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #FFF2BE")
          .p-4.ps-5
            .h5.mb-2 JPGE (<em>Joint Photographis Experts Group</em>)
            br
            p Este es un formato muy flexible que permite almacenar imágenes con bajo peso y alta calidad con poca pérdida de información. Utiliza una distribución de 24 <em>bits</em>/pixel con lo cual cada imagen puede contener 16.777.216 colores.

      .tarjeta.color-acento-botones(x="58%" y="67.5%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #147DC4")
          .p-4.ps-5
            .h5.mb-2 PNG (<em>Portable Graphics Network</em>)
            br
            p Este formato fue diseñado para dar solución a las dificultades que ofrece el formato GIF, como referencia tiene una paleta de colores base la cual puede manipularse fácilmente, permite incluir algunas características de transparencias, este formato comprime de una forma adecuada y práctica las fotografías.

      .tarjeta.color-acento-botones(x="42%" y="67%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #E2F2FF")
          .p-4.ps-5
            .h5.mb-2 TIFF (<em>Tagged Image File Format</em>)
            br
            p Este formato es perfecto para la industria gráfica impresa, pues cuenta con la capacidad de almacenar una muy buena cantidad de datos (imágenes de buena calidad lo que permitirá ser utilizadas en cualquier pieza de trabajo gráfico impreso), cuando una imagen es comprimida en el formato TIFF esta no pierde la calidad, este formato es muy recomendado para trabajar en el contexto de la fotografía para fines comerciales impresos (vallas, pendones, pósteres, avisos, prensa…).

      .tarjeta.color-acento-botones(x="34%" y="50%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #67EBFD")
          .p-4.ps-5
            .h5.mb-2 BMP (<em>Bits Maps Protocole</em>)
            br
            p Es el formato hecho para los ambientes de trabajo del sistema operativo Windows, con el tiempo ha perdido uso pero es probable que en algún sitio <em>web</em> de descarga encuentre imágenes de este tipo que tienen buena calidad visual para pantallas de computadores Windows, no se recomienda su uso para más tareas.

      .tarjeta.color-acento-botones(x="42%" y="32%" numero="")
        .d-flex.position-relative
          .decorador-card(style="background-color: #A5F4FF")
          .p-4.ps-5
            .h5.mb-2 RAW (<em>Read After Write</em>)
            br
            p Este tipo de imagen cuenta con todos los datos que posee el sensor de una cámara fotográfica digital para procesar y almacenar la imagen sin alteración alguna al momento de ser expuesta (conserva todas las características originales de la imagen en alta calidad). Al ser la imagen de más Calidad, también es la de más peso en archivo.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaSlide: true,
    positionImgHover: 0,
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
.container-bg-text
  &.bloque-texto-d.color-acento-botones:before
    background-color: #EEF5FA !important
.container-box-bloque-img
  @media (min-width: 992px)
    .bloque-texto-g__img
      width: 45%
    .bloque-texto-g__texto
      width: 70%
.img-infografica
  .img-infografica__card, .img-infografica-b__card
    min-width: 650px !important
  .tarjeta.color-acento-botones
    background-color: #F6F6F6
    border-radius: 0
  .decorador-card
    width: 17px
    height: 137px
    position: absolute
    top: 0
    left: 0
  @media (max-width: 992px)
    .img-infografica__card, .img-infografica-b__card
      min-width: 0 !important
    .img-infografica__card
      width: 100%
      top: auto !important
      bottom: 0 !important
</style>
