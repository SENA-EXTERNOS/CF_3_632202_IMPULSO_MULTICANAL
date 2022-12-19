<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5

      h1 Reportes e informes de inventarios

    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema5/img_1_tema5.svg', alt='Texto que describa la imagen').imagen-decorativa-17      
      .col-lg-10
        p Son los resultados o los hallazgos encontrados después de realizar el inventario y posterior al conteo, es decir, al contrastar la información registrada en el sistema de información de inventarios y con lo encontrado en el conteo físico.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Tipos de informes de inventarios

    .row.justify-content-around.align-items-center
      .col-lg-12
        p Corresponde a los hallazgos encontrados al momento de los conteos y verificaciones físicas de la idoneidad de los productos en los almacenes o tiendas, puntos de venta de darse el caso. Entre los principales informes a generar están:

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.  
          span <em>Tipos de informe de inventario a reportar</em>       

         
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema5/img_2_tema5.svg', alt='Texto que describa la imagen').imagen-decorativa-0 
 
      .col-lg-4 
        figure  
          img(src='@/assets/curso/temas/tema5/img_3_tema5.svg', alt='Texto que describa la imagen').imagen-decorativa-1
        figure 
          img(src='@/assets/curso/temas/tema5/img_4_tema5.svg', alt='Texto que describa la imagen').imagen-decorativa-2
        figure 
          img(src='@/assets/curso/temas/tema5/img_5_tema5.png', alt='Texto que describa la imagen').imagen-decorativa-3
        figure 
          img(src='@/assets/curso/temas/tema5/img_6_tema5.svg', alt='Texto que describa la imagen').imagen-decorativa-4
        figure 
          img(src='@/assets/curso/temas/tema5/img_7_tema5.png', alt='Texto que describa la imagen').imagen-decorativa-5
        figure 
          img(src='@/assets/curso/temas/tema5/img_8_tema5.png', alt='Texto que describa la imagen').imagen-decorativa-6                   
    
      .row.justify-content-around.align-items-center  
        .col-lg-12
          figcaption <p>Fuente. Elaboración del experto</p>

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-7
        p A continuación, se describen algunos tipos de informes y los ejemplos respectivos. 

    .row.justify-content-center.mb-4.mt-3
      .col-lg-10.bg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Informe de existencias")
            .col-12
              p.mb-0 Refiere a si las cantidades de productos encontradas son idénticas a las registradas en el sistema.  Si falta, indicará la diferencia; si sobra, indicará el excedente; y, si corresponde, se reportará en estado <em>‘ok’</em>. Este estado de existencias implica un resultado de costos igualmente.
            .col-lg-12.mt-3
              .titulo-sexto.color-acento-contenido.mb-3.mt-3
                h5 Tabla 2.  
                span <em>Ejemplo de tabla de verificación de existencias contra el Kardex</em> 
            .col-lg-12.mt-3
              img(src='@/assets/curso/temas/tema5/img_15_tema5.png', alt='Texto que describa la imagen')
              <br>
              figcaption <p>Fuente. Elaboración propia del Experto Temático</p>                             
          .row(titulo="Informe de máximos y mínimos")
            .col-12
              p.mb-0 En este tipo de informe se analiza si las existencias físicas son superiores al nivel máximo del inventario, lo que se obtiene del sistema de gestión o de la misma tarjeta Kardex, o si están en el valor esperado, que es dentro del máximo y mínimo.
            .col-lg-12.mt-3
              .titulo-sexto.color-acento-contenido.mb-3.mt-3
                h5 Figura 2.  
                span <em>Esquema del estado de máximos y mínimos de los recursos objeto de análisis de inventario</em>
            .col-lg-12.mt-3
              img(src='@/assets/curso/temas/tema5/img_10_tema5.svg', alt='Texto que describa la imagen')
              <br>
              figcaption <p>Fuente. Elaboración del experto</p>

          .row(titulo="Informe de productos pendientes por entregar")
            .col-lg-8
              p.mb-0 Son los niveles de existencias encontradas en el conteo físico, pero que no aparecen en el sistema de gestión de inventarios del producto terminado, pues ya están facturados, y están pendientes de entregar al cliente.
            .col-lg-4
              img(src='@/assets/curso/temas/tema5/img_11_tema5.svg', alt='Texto que describa la imagen')

          .row(titulo="Informe de traslado de inventario")
            .col-8
              p.mb-0 Se refiere a cuando en un conteo físico, los productos hallados son diferente en cantidad al del sistema de inventarios, pero figura en otro almacén o bodega, por tanto, es una inconsistencia que se debe reportar.
              p.mt-3 Este tipo de reporte de alimentos es muy frecuente, porque la urgencia hace que se pierda la trazabilidad de los inventarios. En este grupo están los productos que están entremezclados con otros,  los cuales hay que igualmente recogerlos para colocarlos en su ubicación correspondiente e inventariarlos.
            .col-lg-4
              img(src='@/assets/curso/temas/tema5/img_12_tema5.svg', alt='Texto que describa la imagen')

          .row(titulo="Informe de obsoletos")
            .col-8
              p.mb-0 Son los hallazgos encontrados de existencias que presentan deterioro físico, o que su vida útil se ha cumplido, los cuales se recomienda retirarlos del almacén o de los exhibidores, para efectos de evitar su comercialización. 
            .col-lg-4
              img(src='@/assets/curso/temas/tema5/img_13_tema5.svg', alt='Texto que describa la imagen')
 
          .row(titulo="Informe de productos en proceso")
            .col-8
              p.mb-0 Son aquellos que se encuentran en producción y no se les ha culminado la agregación de valores o no han madurado, por tanto, aún no son aptos para la venta.
            .col-lg-4
              img(src='@/assets/curso/temas/tema5/img_14_tema5.svg', alt='Texto que describa la imagen')

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Reporte de informes

    .row.bg-5.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_9_tema5.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 De los resultados de hallazgos encontrados en el proceso de inventario físico o conteo se deben extraer conclusiones respecto de cada uno de los productos censados, su pertinencia en la oferta de la empresa, su grado de obsolescencia; esto puede indicar si se está produciendo más de lo que se vende, otras razones de dicha obsolescencia, errores de manejo, de registro de información, etc. Dichos aspectos servirán para implementar acciones de ajuste y mejoramiento ante los procesos de producción o de comercialización, que dependerán exclusivamente del cuerpo directivo de la empresa.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8.bg-0
        .cajon.color-acento-contenido.p-4
          p Para finalizar, le invito a explorar los demás recursos que se encuentran disponibles en este componente formativo. En el menú principal encontrará la síntesis, una actividad didáctica, material complementario, entre otros.









</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
