<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Codificación

    .row.justify-content-around.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img_1_tema2.svg', alt='Texto que describa la imagen')  
      .col-lg-8
        p El ejercicio de identificación de un producto de manera diferencial a su marca y descripción se denomina codificación, que consiste en asignar una estructura de código similar al número de identificación del producto. Así mismo, este ejercicio permite que se puedan agrupar o clasificar por categorías, lo que facilita su disposición o distribución dentro de los recintos de comercio o almacenes de depósito, al igual que asignarles cantidades adquiridas y los precios. En la siguiente tabla se da un ejemplo de estructuración de códigos:

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1. 
          span <em>Ejemplo de construcción de codificación de productos alimenticios para la comercialización</em> 
   
    .row.justify-content-around.align-items-center.mt-3.mb-5
        .col-lg-10
          figure
            img(src='@/assets/curso/temas/tema2/img_table_tema2.png', alt='Texto que describa la imagen')  

    h3 Sistemas de codificación de productos de inventario

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img_2_tema2.svg', alt='Texto que describa la imagen').imagen-decorativa-14  
      .col-lg-10.bg-0
        .cajon.color-acento-contenido.p-4
          p Existen diferentes clases o formas de codificar los productos, las cuales regularmente se sustentan en series de datos.
       
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-11
        p Para entender los esquemas más comunes de sistemas de codificación de productos en las empresas y almacenes, a continuación, conocerá algunos de ellos:

    .row.bg-4.justify-content-around.align-items-center.my-5
      .tarjeta.tarjeta--azul.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3 Codificación numérica
              p Este tipo de codificación de productos se basa en la estructuración de series numéricas del ‘0’ al ‘9’. Su aplicabilidad es simple lo que hace que sea muy empleada en empresas y tiendas pequeñas, con índices de baja rotación y mercados locales. También cuando se tienen pocas categorías y pocas referencias por presentación o subgrupos, lo que es una ventaja para empresas que tienen su propio sistema para la asignación y programación de sus máquinas y sistemas de administración.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img_3_tema2.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3 Codificación alfanumérica
              p Este tipo de codificación se asemeja al numérico, diferenciándose en la utilización de las letras para identificar la categoría de los alimentos con su inicial. Se puede incluir letras para identificar el piso de ubicación, o la zona donde está ubicado el producto, al igual que una subcategoría o grupo, familia, etc. Este tipo se usa para identificar aspectos específicos adicionales al producto en sí (bodega, ciudad, tipo de almacén, diferentes plantas, etc.).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img_4_tema2.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3 Codificación de barras o QR
              p Este sistema de codificación de productos es una imagen compuesta de líneas barras o puntos, que se utiliza para efectos de la estandarización y porque la empresa maneja grandes volúmenes y un amplio espectro de mercado, al igual que múltiples distribuidores, razón por la cual requiere sistemas más estables y robustos para la gestión de los inventarios; en el caso de los códigos de barras, se componen de un código numérico único que es requisito para poder venderlo en tiendas y supermercados en Colombia, pues identifica el país de procedencia, la empresa, el producto e inclusive el lote. 
              p.mt-3 En el caso de los códigos QR, es una combinación de puntos y barras que alberga mucha más información de los productos, la cual puede ser: alfanumérica, lo que le permite almacenar hasta 4.296 caracteres; numérica, que puede tener hasta 7,089; y binaria, que llega a almacenar hasta 2,953 bytes, facilitando albergar, incluso, imágenes de los productos. 
            .col-md-6 
              figure
                img(src='@/assets/curso/temas/tema2/img_5_tema2.svg', alt='Texto que describa la imagen')

    h3 Orden y control a partir de la codificación

    .row.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_6_tema2.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La codificación de los productos, en las empresas, representa un proceso complementario a la producción y a la comercialización, cuya finalidad es la de facilitar la ubicación o georreferenciación de los recursos, productos o mercancías en el almacén y/o puntos de venta o de distribución, para identificar su trazabilidad; esto permite registrar cada uno de los movimientos de los productos a lo largo de toda la cadena de suministro. Codificar es sinónimo de orden y control. Organizar todos los artículos con su identificación correspondiente, contribuye a llevar a cabo una gestión del almacenamiento mucho más eficiente. 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-12
        p En el siguiente video se puede observar la importancia y conveniencia de un sistema de gestión de inventarios. La disposición física de almacenamiento y la codificación de los productos conlleva a un orden meticuloso, tanto físico, como de la información de los recursos, lo cual es aplicable a todo tipo de empresas.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        p <b>Video: Sistema de gestión de inventarios y su correlación con el almacenamiento y el orden a partir de la codificación</b>

    .row.justify-content-around.align-items-center.mt-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/watch?v=KLK_RR59Z_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
