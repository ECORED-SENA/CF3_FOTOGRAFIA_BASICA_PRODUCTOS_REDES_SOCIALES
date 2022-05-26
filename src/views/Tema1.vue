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
      p.col-lg-8.pe-lg-4.mb-0.order-2.order-lg-1 Editar fotografía es un proceso que muchos profesionales hacen con tanta naturalidad que permiten recomendar ciertas estrategias para intervenir una imagen antes de sacarla a la luz como lo dice <b>Rodríguez (2021) “actualmente, es muy común ver cómo los programas de edición de fotos se han convertido en algo tan importante y fundamental, al momento de revelar al mundo la imagen perfecta”</b>, el uso de un <em>software</em> de edición hace maravillas en el proceso. La mayoría de las técnicas de edición se basan en cierta medida en la iluminación, las fotos se escriben en la luz, sin una buena exposición de luz difícilmente se obtendría una buena fotografía, por eso, hay que editar estos valores a la hora de llevar la imagen un paso más allá. 
        br
        br
        | Un <em>software</em> se puede definir como un programa, o conjunto de programas, que permiten manipular una diversa cantidad de herramientas y elementos intangibles que permiten desarrollar diferentes tipos de acciones y tareas dentro de un sistema informático. Si bien es cierto existen diversidad de programas para el manejo y el uso de ilustración digital, <b>Adobe es una de las empresas más importantes</b> y especializadas en programas de <em>software</em> de diseño que integra muchas herramientas enfocadas a la ilustración, el video, el arte y la fotografía entre otros en su Suite Creative Cloud, es por eso que se hablará primero de un <em>software</em> para edición de imágenes en un ordenador, seguido se hablará de un editor de fotografías en un dispositivo móvil.
      img(src="@/assets/curso/temas/tema1/img-8.png" style="max-width: 400px").col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2.mx-auto
    
    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.col-lg-10.mx-auto.mb-5
      .text-decorator-left-bottom.order-2.order-lg-1
        p El <b><em>software</em> más popular en edición fotográfica</b> en el mundo occidental es Photoshop, elaborado por el fabricante de <em>software</em> Adobe. Es uno de los programas más importantes de edición de fotografías en la actualidad. Photoshop cuenta con grandes opciones y variabilidad, por lo tanto, se tiene posibilidades y opciones ilimitadas para la edición de imágenes, lo que la convierte en una de las mejores opciones en programas de edición del mundo. Cumple con todos los estándares y cuenta con las óptimas herramientas para una buena edición de fotografías e imágenes.
      img(src="@/assets/curso/temas/tema1/img-9.svg" style="max-width: 146px").order-1.order-lg-2.mb-4.mb-lg-0.mx-auto.ms-lg-4

    .cajon.color-acento-botones.p-4.mb-5.bg-cajon-edit.col-lg-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema1/img-10.svg" style="max-width: 80px").mx-2.mx-lg-4
      p.mb-0 La edición de imágenes es una opción para <b>alterar cualquier imagen</b>, ya sea un dibujo, fotografías y retratos digitales o analógicos. 
    
    p.mb-5 En <b>Photoshop</b> las técnicas de edición son variadas y van muy del gusto del editor, en el siguiente recurso podrá ver algunas de las opciones más populares a usar cuando se realiza edición en este <em>software</em>:

    .tarjeta.tarjeta--azul.col-xl-10.p-4.p-xl-5.mb-5.mx-auto
      SlyderA(tipo="b")
        .col-11.mx-auto
          p <span class="fw-bold">Afilado y suavizado</span>
          img(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 860px").mb-4
          p Con esta herramienta se puede generar un efecto más nítido o borroso en las imágenes. Para aplicarla, seleccione la imagen principal y elija efectos de suavizado. Esta opción se utiliza especialmente en los retratos para crear un mejor enfoque en el usuario.

        .col-11.mx-auto
          p <span class="fw-bold">Recortar</span>
          img(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 860px").mb-4
          p Esta herramienta permite seleccionar una parte de la imagen la cual se desea conservar, eliminando el resto de la imagen que no es útil dentro de una composición.
        
        .col-11.mx-auto
          p <span class="fw-bold">Alteración del tamaño de la imagen</span>
          img(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 860px").mb-4
          p Por lo general, la mayoría de programas de diseño la manejan, esta amplía o reduce una imagen según el gusto del usuario.

        .col-11.mx-auto
          p <span class="fw-bold">Fusión de imágenes</span>
          img(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 860px").mb-4
          p Esta herramienta permite que dos o más imágenes separadas se agrupen para crear una sola.


    p.mb-5 Adicional a las técnicas de edición mostradas anteriormente, Photoshop sirve para hacer varias cosas más, las personas usan Photoshop habitualmente en las siguientes tareas:

    .d-flex.flex-wrap.align-items-strtch.mb-5
      .col-md-6.col-xl-3.h-100d-flex.px-md-2.mb-4.pt-5.position-relative
        .card-hover-top.h-100.p-4
          img(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 104px").mb-4
          p <span class="fw-bold">Agregar filtros</span>
            br
            | Photoshop permite localizar filtros con los que se pueden realizar un efecto de desenfoque de movimiento, recrear una imagen como póster, permitir que la imagen se convierta en mosaico y adicionar un efecto de acuarela.

      .col-md-6.col-xl-3.h-100d-flex.px-md-2.mb-4.pt-5.position-relative
        .card-hover-top.h-100.p-4(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 104px").mb-4
          p <span class="fw-bold">Efectos de textura</span>
            br
            | Además de poder añadir filtros y editar la iluminación de las fotografías, el programa permite crear diversos efectos de textura que se pueden aplicar a toda la imagen o simplemente elegir una parte del diseño y emplear la textura únicamente a esa selección. 
      
      .col-md-6.col-xl-3.h-100d-flex.px-md-2.mb-4.pt-5.position-relative
        .card-hover-top.h-100.p-4
          img(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 104px").mb-4
          p <span class="fw-bold">Ilustraciones 3D</span>
            br
            | Desde la versión CS3, el programa permite editar imágenes en cada una de las tres dimensiones, de igual forma se pueden crear, editar y añadir sombras o texturas para aparentar diferentes percepciones y materiales.
      
      .col-md-6.col-xl-3.h-100d-flex.px-md-2.mb-4.pt-5.position-relative
        .card-hover-top.h-100.p-4
          img(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 104px").mb-4
          p <span class="fw-bold">Luces y efectos especiales</span>
            br
            | Es un instrumento útil para darle vida a una fotografía, ya que permite utilizar todos los filtros de iluminación y efectos especiales del programa, permitiendo simular el efecto de focos o reflectores de programas especializados en fotografía digital.
    
    p.mb-5 A manera de tutorial, se hace a continuación una edición en vivo en Photoshop, por favor revíselo a detalle y genere sus ediciones iniciales a manera de práctica:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vjni2ly0rg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.col-lg-10.mx-auto.mb-5
      .text-decorator-left-bottom.order-2.order-lg-1.mb-5
        p Al igual que Photoshop, la aplicación Lightroom; esto lo hace un editor avanzado que hace tareas complejas que con otras aplicaciones difícilmente se logren, entre ellas el cambio exacto de la curva de valor de tono.
          br
          br
          | Para aquellos que ya conocen el programa, es fácil de usar en dispositivos móviles. Es gratis y cuenta con funciones de pago disponibles para iOS y Android, simplemente debe ubicar la aplicación con el nombre de Lightroom en su tienda de aplicaciones y descargarla con sus datos. Hoy en día, gracias a los teléfonos inteligentes, la mayoría de las personas pueden tomar fotografías de manera fácil y rápida, sin embargo, a menudo hay muchas demandas en cuanto a la calidad de la imagen. Después de todo, las características de los teléfonos van en avance, pero siguen dependiendo de muchos elementos que tienen los equipos más robustos: esta aplicación también trabaja en computador como lo puede revisar más adelante.
      img(src="@/assets/curso/temas/tema1/img-16.svg" style="max-width: 146px").order-1.order-lg-2.mb-4.mb-lg-0.mx-auto.ms-lg-4

    .bloque-texto-g.color-secundario.container-box-bloque-img.p-3.p-sm-4.p-md-5.col-lg-10.mx-auto.mb-5
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-17.png')})`}")
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 En la realidad comercial las imágenes son la forma más poderosa de llegar a un posible comprador, todo depende de la forma y el canal para mostrarlas y <b>si se eligen las redes sociales la visibilidad será garantizada</b>, por eso se requieren imágenes de buena calidad; si no se obtienen imágenes con buenas características los resultados comerciales no serán  los mismos, llegando en muchos casos a afectar la vida comercial de los productos, por ejemplo la comida, si una foto de alimentos no deja ver la frescura y el buen sabor es probable que esa imagen esté transmitiendo la información que no es la adecuada para el usuario final.

    p.mb-5 La aplicación de Lightroom tiene varias opciones para quienes editan fotografías, a continuación, se presentan las acciones más populares que las personas utilizan en esa aplicación:

    AcordionA.mb-5.acordeon-a(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center(titulo="Realización")
        img(src='@/assets/curso/temas/tema1/img-18.png' style="max-width: 356px").col-lg-4.px-lg-0.ms-auto
        .col-lg-8.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 Las opciones de cámara que ofrece Lightroom son las típicas de casi todas las aplicaciones de fotografía. Estas opciones pueden ser para uso manual profesional o uso automático siendo la manual profesional la que da más control al usuario. Hay dos aspectos que marcan la diferencia a la hora de utilizar Lightroom, el primero es a la hora de capturar fotografías por sus encuadres y ayudas visuales para lograr mejores resultados.
            | El segundo aspecto es el uso de efectos en tiempo real, esto le permite al fotógrafo ver cómo funcionan los diferentes efectos antes de tomar una foto. Es de gran ayuda saber cómo van a quedar las fotos que se están pensando.
      
      .row.align-items-center(titulo="Catalogación")
        img(src='@/assets/curso/temas/tema1/img-19.png' style="max-width: 356px").col-lg-4.px-lg-0.ms-auto
        .col-lg-8.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 <span class="fw-bold">Catalogación</span>
            br
            br
            | Permite organizar y catalogar las fotografías. brindando al usuario la posibilidad de ubicar todas las imágenes en su lugar. Puede diseñar y crear álbumes con fotos seleccionadas, organizar las fotos tomadas en fechas y horas específicas. Lightroom tiene una poderosa base de datos que le permite saber dónde, cuándo y cómo se realizaron las fotografías.
      
      .row.align-items-center(titulo="Retoque")
        img(src='@/assets/curso/temas/tema1/img-20.png' style="max-width: 356px").col-lg-4.px-lg-0.ms-auto
        .col-lg-8.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 <span class="fw-bold">Retoque</span>
            br
            br
            | Los ajustes de las imágenes se pueden dar en escenarios básicos como el contraste, la exposición, el brillo y opciones avanzadas, a diferencia de otras herramientas. La edición de imágenes no es destructiva. Es decir, se puede retocar la imagen de acuerdo con el gusto del usuario, Lightroom permite siempre volver a la imagen original. De esta forma, se puede mantener la foto original y usar configuraciones que se pueden cambiar en cualquier momento sin afectar la calidad de la fotografía. Una muy importante ventaja de esta edición es la posibilidad de aplicar arreglos a otras imágenes.
      
      .row.align-items-center(titulo="Procesado")
        img(src='@/assets/curso/temas/tema1/img-21.png' style="max-width: 356px").col-lg-4.px-lg-0.ms-auto
        .col-lg-8.mb-4.mb-md-0.pe-lg-5
          p.mb-0.ps-4 <span class="fw-bold">Procesado</span>
            br
            br
            | Tal como lo dice Fotonostra (s. f.) el procesado es “todo el camino que recorremos desde que disparamos con la cámara de fotos hasta que tenemos la imagen en nuestras manos” (Párr. 1). En otras palabras, es el paso a paso para hacer una fotografía, en su sentido más amplio y práctico. Es importante conocer qué tipo de sensor tiene la cámara de su dispositivo móvil, con el fin que le pueda dar el uso apropiado, los fabricantes de teléfonos inteligentes suelen buscar formas de tener en cuenta Internet para obtener imágenes que puedan compartirse o cargarse fácilmente en las redes sociales, permitiendo la opción de guardar las fotografías en formatos DNG o JPG.
    
    p.mb-5 Para profundizar sobre cómo funciona el <em>software</em> Lightroom, se recomienda observar el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HF-WGNhckyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Editores gratuitos

    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-4
        p Uno de los errores más comunes entre los usuarios no profesionales del mundo de la fotografía, es ignorar la importancia de la edición de fotos posterior a su toma; en la mayoría de los casos, el acceso al editor de fotos es complicado para los fotógrafos principiantes y aficionados, ya que los costos pueden llegar a ser altos.
      .col-lg-6
        p Sin embargo, en el mercado existe una larga lista de editores de fotos completamente gratuitos que se pueden encontrar en línea. Sean cuales sean sus habilidades, necesidades y objetivos, estas herramientas lo ayudarán a llevar sus imágenes al siguiente nivel y lograr un aspecto profesional con el mínimo esfuerzo; definitivamente vale la pena considerar estas alternativas.

    p.mb-5 A continuación, se realiza una  breve descripción de los más relevantes del mercado sin costo alguno; es probable que usted conozca más aplicaciones y que con el paso del tiempo aparezcan nuevas aplicaciones,  será su responsabilidad estar actualizado al respecto: 

    TabsC.color-acento-botones.mb-5.tabs-c-t1
      .py-3.py-md-4(titulo="Adobe Photoshop Express")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema1/img-22.png' style="max-width: 400px").col-xl-5.mb-4.mb-xl-0
          p.ps-xl-4.mb-0 <span class="fw-bold">Adobe Photoshop Express: </span>Sin duda alguna es la herramienta más completa del mercado ya que permite ajustar los tamaños de las imágenes.  Adicionalmente, cuenta con la opción HDR, que es la que mejora las fotografías en perspectiva, así como el ajuste de la imagen de acuerdo con su necesidad, saturación, sombras, brillo, contraste, entre otras. Uno de sus más grandes atractivos es determinar una sección de la foto y aplicarle el filtro que desee en vivo; esta aplicación está en capacidad de procesar archivos RAW, en los cuales, los filtros se fusionan en capas permitiendo observar las modificaciones realizadas dando la ventaja de ajustar individualmente las imágenes. Esta herramienta es muy funcional para iOS y Android  .

      .py-3.py-md-4(titulo="Pixlr")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema1/img-23.png' style="max-width: 400px").col-xl-5.mb-4.mb-xl-0
          p.ps-xl-4.mb-0 <span class="fw-bold">Pixlr: </span>Ideal para editar fotos desde cualquier dispositivo móvil, permite realizar acciones primordiales de edición de imágenes, contraste, perspectiva, saturación, exposición y eliminación de puntos. De igual forma permite editar imágenes guardadas en un dispositivo las cuales pueden ser llevadas de forma directa desde Adobe Creative Cloud, Dropbox, Facebook o Google Photos. 

      .py-3.py-md-4(titulo="Snapseed")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema1/img-24.png' style="max-width: 400px").col-xl-5.mb-4.mb-xl-0
          p.ps-xl-4.mb-0 <span class="fw-bold">Snapseed: </span> Cuenta con una gran ventaja y que con esta aplicación se pueden realizar collages, con un buen manejo de espacio, multiplicidad de fondos y formatos diferentes, de igual permite diseñar fotos con doble exposición, permitiendo una combinación de fuentes ilimitada, lo más importante de esta herramienta es poder retocar luces, colores y brillos. Permite compartir las fotografías en redes sociales funcional para Android e iOS.
      
      .py-3.py-md-4(titulo="VSCO Cam")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema1/img-25.png' style="max-width: 400px").col-xl-5.mb-4.mb-xl-0
          p.ps-xl-4.mb-0 <span class="fw-bold">VSCO Cam: </span> Esta herramienta tiene unas características especiales que la hacen la predilecta a la hora de realizar ajustes de edición fotográfica para dispositivos móviles, permite de manera fácil modificar la  exposición y el contraste, con la ventaja que modificará de forma rápida la temperatura de tus fotos, con resultado óptimo, su fuerte es el manejo de filtros, nitidez, brillos, saturación, exposición entre otros, de igual forma tiene filtros prefijados y suaves de fácil uso los que permiten observar de forma rápida como queda la foto después de usar la herramienta, casi que a simple vista pareciera que no tiene filtros la imagen. Las fotos se podrán exportar directamente en redes sociales, compatibles con iOS y Android.

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Editores con pago

    p.mb-5 Además de editores gratuitos, el mercado de los fotógrafos está abierto para todas las <b>casas realizadoras de <em>software</em></b> con varias aplicaciones que sirven desde la gestión básica de imágenes con retoques, como recortar y girar hasta grandes efectos como solarización, capas de composición o montajes múltiples. A continuación, se comparten algunas herramientas que son fáciles de adquirir,  pagando por su uso en el computador o en algún dispositivo móvil:     

    TabsA.color-acento-botones.mb-5.pestanas-a
      .tarjeta.color-acento-botones--borde.p-4(titulo="Photos Pos Pro" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-26.png" style="max-width: 150px").col-12-col-xl-5.mb-4.mb-xl-auto.mx-auto
          p.col-12-col-xl-7.ps-lg-4.mb-0 <span class="fw-bold">Photos Pos Pro: </span> Esta interfaz permite editar las fotografías con dos interfaces diferentes, cuenta con un diseño avanzado puesto que maneja una gama amplia de herramientas de edición la cual incluye texturas, degradados, pinceles, máscaras, capas y conversión RAW, otra gran ventaja es que se pueden realizar ediciones en grandes espacios de imágenes, esto disminuye el tiempo de edición de forma ordenada y automática, al usuario le llama mucho la atención las mejoras que presentan las imágenes con intermedio de los filtros y efectos creativos con los que cuenta la herramienta y que son de fácil manipulación.

      .tarjeta.color-acento-botones--borde.p-4(titulo="GIMP" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-27.png" style="max-width: 150px").col-12-col-xl-5.mb-4.mb-xl-auto.mx-auto
          p.col-12-col-xl-7.ps-lg-4.mb-0 <span class="fw-bold">GIMP: </span> Se considera el mejor editor de fotografía disponible en el mercado. Este <em>software</em> cuenta con una gama amplia de herramientas, tales como; operaciones básicas y funciones con calidad a nivel profesional. Los usuarios que empiezan en mundo fotográfico podrán beneficiarse de sus herramientas de selección, ajuste de color, montajes, recorte y retoque de imagen automática. Es un <em>software</em> de código abierto, lo que permite que se actualice constantemente.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Paint.net" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-28.png" style="max-width: 150px").col-12-col-xl-5.mb-4.mb-xl-auto.mx-auto
          p.col-12-col-xl-7.ps-lg-4.mb-0 <span class="fw-bold">Paint.net: </span> Cuenta con una interfaz directa y clara al momento de ser utilizada, es un <em>software</em> de fácil uso, proporciona una variada gama de herramientas de edición como brillo, contraste, tonos, curvas, niveles, niveles y degradados. También, admite complementos creados por la comunidad de desarrolladores. Estos complementos se pueden usar para acceder a funciones avanzadas, haciendo referencia a la conocida herramienta de rotación/zoom 3D para la reconstrucción de imágenes.

      .tarjeta.color-acento-botones--borde.p-4(titulo="PhotoScape X" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-29.png" style="max-width: 150px").col-12-col-xl-5.mb-4.mb-xl-auto.mx-auto
          p.col-12-col-xl-7.ps-lg-4.mb-0 <span class="fw-bold">PhotoScape X: </span> Este <em>software</em> se conoce como todo en uno, ya que con un solo clic se perciben cambios en las imágenes de forma notoria y con facilidad, cuenta con un sinfín de filtros, marcos, pinceles, herramientas de recorte inteligentes, selectores de color y de clonación. El editor también proporciona una variedad de materiales de edición por lotes, entre ellos cambiar el tamaño y cambiar el nombre del archivo y el formato. Los fotógrafos pueden aprovechar al máximo la función de conversión RAW. De igual forma incluye opciones bastante creativas, collages, fusiones, efectos, texto y pinceles. Dichas funciones son especiales para aquellos creadores de contenido digital preferiblemente para perfiles de redes sociales o campañas de <em>email marketing</em>, cuenta con tutoriales en video de cada herramienta con el fin de conseguir el efecto deseado.
  
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
    &:hover
      .container-body-text
        overflow: scroll
.text-decorator-left-bottom
  position: relative
  p
    position: relative
    margin-bottom: 0
    z-index: 1
  &::before
    content: ''
    position: absolute
    z-index: 0
    width: 139px
    height: 80px
    background-color: #FFF2BE
    bottom: -2rem
    left: -2rem
.bg-cajon-edit
  display: flex
  align-items: center
  &.cajon.color-acento-botones
    background-color: #FFF2BE
.card-hover-top
  background-color: #FBF4DC
  transition: all .2s linear
  cursor: default
  &:hover
    background-color: #A5F4FF
    margin-top: -2.5rem
    margin-bottom: 2.5rem
.container-box-bloque-img
  @media (min-width: 992px)
    .bloque-texto-g__img
      width: 45%
    .bloque-texto-g__texto
      width: 76%
.acordeon-a
  .tarjeta
    transition: all .4s linear
  .acordion__activo
    background-color: #F0F8FF
.tabs-c-t1
  border: none
  .tabs-c__header
    margin-bottom: 0
  .tabs-c__content-item
    padding-top: 2rem
    border-left: 1px solid #E8E8E8
    border-right: 1px solid #E8E8E8
    border-bottom: 1px solid #E8E8E8
.pestanas-a .tabs-a__tab
  background-color: #E8E8E8
</style>
