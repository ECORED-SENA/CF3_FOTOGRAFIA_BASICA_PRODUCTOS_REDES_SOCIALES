(function(e){function a(a){for(var o,t,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)t=c[u],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&d.push(i[t][0]),i[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==i[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{actividad:"2474e568","chunk-0206bfa0":"264bc95a","chunk-0b10f9b9":"18a7e98d","chunk-0d02006a":"b54fe13d","chunk-10d7dd5c":"fe963216","chunk-13a6037e":"cc6412e6","chunk-205221e7":"54eda38b","chunk-2c06842c":"e4982829","chunk-2d0e96ec":"a36bed43","chunk-2d208d90":"58b93b7e","chunk-2d21d0e2":"13642e6c","chunk-2d22c123":"18822770","chunk-2d4cff20":"8a14dd26","chunk-2e80bb9a":"c9e48e5d","chunk-2fdc87ee":"9097da11","chunk-4ef72cd9":"14763705","chunk-515a8379":"fbbd4068","chunk-5309f94e":"d207b2d5","chunk-53ccb27e":"67a53ce9","chunk-59974754":"bb579303","chunk-60a150e8":"afbb8e7a","chunk-69444b4c":"6ea97d8d","chunk-6e1e538a":"2f88bf9f","chunk-7d598149":"2785d3ed","chunk-a71bdd78":"37eeb5ae","chunk-c796899c":"2646f76f","chunk-cda87f0a":"02bd1e59","chunk-e8a7823a":"2c635a0f",comple:"5c44f336",creditos:"82da311b",glosario:"8e25124a",intro:"b94e16ab",referencias:"d3df0b21",sintesis:"e741d5a6",tema1:"581a65e2",tema2:"fce998ad",tema3:"5291f1fd",tema4:"250ffc65",tema5:"ba6b73ed",tema6:"d5987ecc",tema7:"ed331890"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0b10f9b9":1,"chunk-0d02006a":1,"chunk-10d7dd5c":1,"chunk-205221e7":1,"chunk-2d4cff20":1,"chunk-4ef72cd9":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60a150e8":1,"chunk-6e1e538a":1,"chunk-7d598149":1,"chunk-a71bdd78":1,"chunk-cda87f0a":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1,tema4:1,tema5:1,tema6:1,tema7:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0b10f9b9":"e71cb334","chunk-0d02006a":"239be14b","chunk-10d7dd5c":"e71cb334","chunk-13a6037e":"31d6cfe0","chunk-205221e7":"e71cb334","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d4cff20":"e71cb334","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-4ef72cd9":"e71cb334","chunk-515a8379":"ae0ee84f","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"9f4f9dbb","chunk-60a150e8":"e71cb334","chunk-69444b4c":"31d6cfe0","chunk-6e1e538a":"d2f45819","chunk-7d598149":"e71cb334","chunk-a71bdd78":"e71cb334","chunk-c796899c":"31d6cfe0","chunk-cda87f0a":"5d24a906","chunk-e8a7823a":"31d6cfe0",comple:"405bb42a",creditos:"976ca527",glosario:"6e6013d9",intro:"586f816f",referencias:"e4d49c74",sintesis:"31d6cfe0",tema1:"62d77728",tema2:"d2588988",tema3:"95956c78",tema4:"d221bb06",tema5:"384aa5f0",tema6:"8b6e72fc",tema7:"04f94432"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),n(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"1e70":function(e,a,n){"use strict";n("c5df")},"294d":function(e,a,n){"use strict";n("9ea8")},"4e7e":function(e,a,n){},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,t,i,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("section",{staticClass:"inicio"},[o("BannerPrincipal2",{staticClass:"mb-5"}),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),o("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[o("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return o("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[o("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?o("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):o("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),o("span",{domProps:{innerHTML:e._s(a.titulo)}})]),o("a",{staticClass:"boton--sm"},[o("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),o("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?o("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return o("div",{staticClass:"creditos-inicio__item"},[o("div",{staticClass:"row"},[o("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[o("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),o("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return o("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?o("hr"):e._e()])})),0):o("div",{staticClass:"text-center"},[o("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),o("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),o("Footer")],1)},p=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],b=n("2909"),g=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container tarjeta position-relative",staticStyle:{"min-height":"506px",display:"flex",overflow:"hidden"},style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"row banner-principal__row position-relative justify-content-center align-items-center"},[n("div",{staticClass:"col-lg-7 col-xxl-6 py-4 py-sm-5 banner-principal__info"},[n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0",staticStyle:{color:"black"},domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"banner-principal__descripcion"},[n("p",{staticClass:"mb-0 pe-md-5",staticStyle:{color:"black"},domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})])]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",staticStyle:{"background-color":"#FFD947"},attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[e._v("Iniciar")]),n("i",{staticClass:"fas fa-angle-right"})])],1)]),n("div",{staticClass:"d-none d-lg-flex col-lg-5 px-0 position-relative img-p align-items-center img-banner-1"},[n("img",{staticClass:"mb-auto",attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])}),h=[],v=(n("7db0"),n("25f0"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),{computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),a=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||a}},methods:{quitarAcentos:function(e){var a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return e.split("").map((function(e){return a[e]||e})).join("").toString()}}}),C={name:"BannerPrincipal",mixins:[v],computed:{globalData:function(){return this.$config.global}}},k=C,y=(n("a12e"),Object(s["a"])(k,g,h,!1,null,null,null)),_=y.exports,R=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},w=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"col-auto mb-2 mb-sm-0"},[o("img",{attrs:{src:n("52e5")}})])}],x={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},D=x,P=(n("294d"),Object(s["a"])(D,R,w,!1,null,null,null)),j=P.exports,M={name:"Inicio",components:{BannerPrincipal2:_,Footer:j},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(b["a"])(this.menuPrincipalData.menu),Object(b["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},S=M,E=(n("1e70"),Object(s["a"])(S,f,p,!1,null,null,null)),A=E.exports,q=n("7e58");d["a"].use(m["a"]);var z=new m["a"]({routes:[{path:"/",name:"inicio",component:A},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:q["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return n.e("tema7").then(n.bind(null,"a2b2"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a77"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),O=z,I=n("1c2c"),T=(n("a3a0"),{global:{componenteFormativo:"Edición fotográfica",descripcionCurso:"Las nuevas tecnologías han proporcionado nuevos lenguajes y estos a su vez, una representación del mundo que rodea a las personas. La imagen digital es una de esas herramientas que cambia y elabora un lenguaje propio. Conocer los campos que intervienen en la imagen permitirá interpretar cómo se están llevando los nuevos lenguajes comunicativos.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Edición fotográfica",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Técnicas de edición",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Editores gratuitos",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Editores con pago",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Corrección de color",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Formatos de archivos fotográficos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Exportación de fotografías",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Procesos creativos audiovisuales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Uso de los procesos creativos",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Conceptos de creatividad fotográfica",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Características de los procesos creativos",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Arte y finalización fotográfica",hash:"t_5_4"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Redes sociales para publicar fotografías",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"6.1",titulo:"Formatos de archivo para redes sociales",hash:"t_6_1"},{icono:"far fa-file-alt",numero:"6.2",titulo:"Tipos de archivos para publicar en redes sociales",hash:"t_6_2"}]},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Publicación de fotografías",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{texto:"Sternberg, R., J. Handbook of Creativity. Cambridge University Press.",tipo:"Web",link:"https://education.stateuniversity.com/pages/1892/Creativity.html"}],glosario:[{termino:"Aplicación",significado:"aplicación (también llamada app) es un programa informático creado para llevar a cabo o facilitar una tarea en un dispositivo informático (Sistemas.com, 2021)."},{termino:"Compresión",significado:"la compresión de una fotografía es la reducción de los datos digitales que no resultan necesarios e importantes. Esta compresión permite almacenar mayor número de imágenes al conseguir que los archivos resultantes no ocupen mucho espacio."},{termino:"CMYK",significado:"el modelo CMYK (siglas de <em>Cyan</em>, <em>Magenta</em>, <em>Yellow</em> y <em>Key</em>) es un modelo de color sustractivo que se utiliza en la impresión en colores. Es la versión moderna y más precisa del antiguo modelo tradicional de coloración (RGB)."},{termino:"<em>Hashtag</em>",significado:"palabra o frase precedida por un símbolo de numeral (#), utilizado en las redes sociales y en las aplicaciones, especialmente en Twitter, para identificar mensajes sobre un tema específico."},{termino:"Lightroom",significado:"programa que hace parte de la suite de Adobe Company, creado para el tratamiento de imágenes digitales, con este programa se logra realizar los procesos de revelado, tratamiento y flujo de trabajo de imágenes (Adobe Company, 2021)."},{termino:"Redes sociales",significado:"en el mundo virtual son sitios y aplicaciones que operan en niveles diversos –como el profesional, de relación, entre otros– pero siempre permitiendo el intercambio de información entre personas y/o empresas."},{termino:"Mapa de <em>bits</em>",significado:"imagen que justamente se presenta en mapa de <em>bits</em>, consiste en una estructura de forma rectangular formada por píxeles o puntos de color, y que puede visualizarse en un monitor, en un papel, o en cualquier otro dispositivo que permita la representación de imágenes."},{termino:"Paleta de color",significado:"grupo de colores, que el ojo humano puede captar. Se ubican específicamente dentro de un círculo el cual permite ver y entender los diferentes tonos que componen la paleta de color. Es indispensable para la realización de piezas visuales y gráficas."},{termino:"Pixel",significado:"el pixel -o px, para abreviar- es el elemento más pequeño de una imagen reproducida digitalmente. En un monitor o en la pantalla de un teléfono móvil se suelen alinear varios píxeles en una trama. La combinación de varios píxeles constituye una imagen rasterizada (Ionos, 2021)."},{termino:"<em>Styling</em>",significado:"conocimientos de diseño para hacer un producto más atractivo y llamativo en una fotografía, video o puesta en escena."},{termino:"Escenografía",significado:"grupo de elementos que son utilizados para ambientar y contextualizar un entorno determinado en una escena audiovisual. Estos elementos pueden ser de iluminación, de decoración o utilería."},{termino:"Creatividad",significado:"capacidad de crear pensamientos nuevos a partir de ideas o conceptos ya conocidos."}],referencias:[{referencia:"Adobe. (2020). <em>Acerca de las dimensiones en píxeles y la resolución de la imagen impresa</em>.",link:"https://helpx.adobe.com/es/photoshop/using/image-size-resolution.html"},{referencia:"Amador, P. (s.f.). <em>La imagen fotográfica y su lectura</em>.",link:"https://core.ac.uk/download/pdf/30042969.pdf"},{referencia:"Cerebrote. (2019). <em>Cómo pasar una fotografía de color a un blanco y negro perfecto sin perder detalles ni volumen.</em>. [Video]. YouTube.",link:"https://www.youtube.com/watch?v=5Cmn3O7kEgQ"},{referencia:"Deusto. (2019). <em>Guía de formatos y tamaños para diseños en redes sociales</em>.",link:"https://www.deustoformacion.com/blog/redes-sociales/guia-formatos-tamanos-para-disenos-redes-sociales"},{referencia:"Crehana. (2019). <em>Los formatos que debe tener tu contenido digital</em>.",link:"https://www.crehana.com/blog/marketing-digital/los-formatos-que-debe-tener-tu-contenido-digital/"},{referencia:"Domestika. (2020). <em>Qué es la corrección de color.</em>.",link:"https://www.domestika.org/es/blog/3272-que-es-la-correccion-de-color"},{referencia:"Fotonostra. (s. f.). <em>El proceso fotográfico.</em>.",link:"https://www.fotonostra.com/fotografia/procesofoto.htm"},{referencia:"Ordoñez, C. A. (2015). Formatos de imagen digital. <em>Revista Digital Universitaria, (5)7, 2-10.</em>.",link:"http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf"},{referencia:"Rodríguez, H. (2021). <em>Retoque fotográfico: tips para mejorar una foto en Photoshop.</em>.",link:"https://www.crehana.com/co/blog/fotografia/retoque-fotografico-en-photoshop/?utm_source=google&utm_medium=cpc&utm_campaign=search-blog&utm_content=blog-fotografia&utm_term=upper-funnel&gclid=CjwKCAjwrfCRBhAXEiwAnkmKmXcb9nVcFj6aRgi7uOM0-GpS80clNaUzysnMyIn3tmgWROEu3A7PaBoCjnoQAvD_BwE"},{referencia:"TooMany Flash. (2021). <em>Conoce todo sobre la edición de fotos: conceptos, proceso, tips y más.</em>.",link:"https://toomanyflash.com/edicion-de-fotos/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Stephanie Ascanio",cargo:"Experto Temático",centro:"Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital"},{nombre:"Carlos Andrés Suescún Lesmes",cargo:"Experto Temático",centro:"Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital"},{nombre:"Luis Fernando Botero Mendoza",cargo:"Diseñador instruccional",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesora metodológica",centro:"Centro de Diseño y Metrología – Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo de desarrollo curricular",centro:"Centro Industrial del Diseño y la Manufactura – Regional Santander"},{nombre:"José Gabriel Ortiz Abella",cargo:"Correctora de estilo",centro:"Centro de Diseño y Metrología – Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Natalia Maldonado Delgado ",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Erika Viviana Sandoval Roja",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"John Jairo Arciniegas González",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jhon Edinson Castañeda Oviedo",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Melina Tatiana Quintero Rodriguez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=T;var L=n("9224");o["a"].prototype.$package=L,new o["a"]({router:O,store:I["a"],render:function(e){return e(u)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.38eb6e2d.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"5.1.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"4.0.3","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9ea8":function(e,a,n){},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a12e:function(e,a,n){"use strict";n("4e7e")},a3a0:function(e,a,n){},c5df:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.9980f280.png"},cf25:function(e,a,n){"use strict";n("fea6")},fea6:function(e,a,n){}});
//# sourceMappingURL=app.af0c0f26.js.map