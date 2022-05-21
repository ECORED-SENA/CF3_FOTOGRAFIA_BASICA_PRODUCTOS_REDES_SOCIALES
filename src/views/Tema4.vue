<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Exportación de fotografías

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.col-xl-10.mx-auto
      img(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 400px").col-xl-5.mb-5.mb-xl-0.mb-xl-auto.mx-auto
      .col-xl-7.ps-xl-5.pt-xl-4
        .text-decorator-top-left
          p En la fotografía es muy común la exportación de los productos gráficos los cuales pueden usarse para una variedad de propósitos, el propósito más popular para este programa es publicar productos en redes sociales, foros, blogs e incluso subir fotos a su sitio web o enviarlas por correo electrónico, aquí se tomará como referencia el software Lightroom, que le permitirá entender de qué trata el contexto de la exportación de imágenes.
            br
            br
            | Se deben tener en cuenta las siguientes indicaciones al momento de exportar una imagen: 

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.col-xl-11.mx-auto(titulo="Paso 01")
          .col-md-6.px-0.px-md-2
            figure
              img(src='@/assets/curso/temas/tema4/img-2.png', alt='Formato JPEG').mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p Guardar los archivos originales en el formato que vengan de manera original, nunca se edita sobre la imagen original por si después se requiere una modificación adicional, crear una carpeta para guardar los archivos exportados.

        .row.col-xl-11.mx-auto(titulo="Paso 02")
          .col-md-6.px-0.px-md-2
            figure
              img(src='@/assets/curso/temas/tema4/img-3.png', alt='Formato JPEG').mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p El formato a utilizar en la red social es JPEG (la mejor calidad) o TIFF (impresos), ya que archivos de imagen que no cuentan con compresión y permiten un mayor almacenamiento de información, contrario a un archivo JPG que es un formato de imagen con compresión, cualquiera de los dos archivos nombrados le servirá para una excelente impresión, si el final del archivo es digital o red social es mejor trabajar JPEG.

        .row.col-xl-11.mx-auto(titulo="Paso 03")
          .col-md-6.px-0.px-md-2
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png', alt='Formato JPEG').mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p Es importante tener en cuenta que la fotografía se debe redimensionar a un tamaño aproximado de 800px y 1200px, el cual es un tamaño adecuado teniendo en cuenta que es muy funcional para las redes sociales, con esta información se procede a establecer un parámetro denominado ppp (puntos por pulgada) los cuales se deben que modificar y establecer a 72ppp como mínimo, y 240ppp hacia arriba si es para impresión. Al momento de exportar se pueden seleccionar una o varias fotografías, luego se debe pulsar con el botón derecho en la opción exportar, se abrirá una ventana la cual cuenta con una serie de opciones que permiten predeterminar algunas funciones con el fin de hacer el trabajo de forma más rápida.
        
        .row.col-xl-11.mx-auto(titulo="Paso 04")
          .mb-4.mb-md-0.d-flex.align-items-center
            p Es muy importante darle una ubicación al archivo para poder exportarlo, este paso es muy sencillo ya que se pueden generar carpetas las cuales de forma automática quedarán establecidas al momento de exportar los archivos, en ocasiones con el archivo anteriormente guardado, debe indicarle al programa si se debe sobrescribir el archivo, no hacer nada o simplemente verificar cada vez que desee exportar. Al momento de nombrar un archivo el software permitirá ordenarlos con una secuencia automática numérica de cada foto, dándole nombre y fecha.

        .row.col-xl-11.mx-auto(titulo="Paso 05")
          .col-md-6.px-0.px-md-2
            figure
              img(src='@/assets/curso/temas/tema4/img-5.png', alt='Formato JPEG').mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p Seleccionar el espacio de color adecuado, ya que por lo general en internet las fotografías se exportan en sRGB, o, en Adobe RGB, los navegadores tradicionales cuentan con una particular forma de interpretación de la fotografía utilizando un espacio de color adecuado en sRG, en caso de estar en Adobe RGB, cualquier navegador interpretara los colores de una forma equivocada y su resultado mostrara unos clores no acordes al cómo se observan en pantalla. Finalmente, hay una opción para limitar el tamaño del archivo. Esto es útil cuando se necesita cumplir con ciertas especificaciones la foto no debe exceder un cierto tamaño. Por ejemplo, si no desea ocupar más de 500 KB, debe asignar 500. Si no necesita exceder los 2 MB, se le asigna 2000.

    p.mb-5 El proceso con los pasos es claro con lo que debe hacer, sin embargo, en el siguiente video puede ver a una experta trabajar Lightroom para exportar una imagen:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
.text-decorator-top-left
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
    top: -1.5rem
    left: -1.5rem
</style>
