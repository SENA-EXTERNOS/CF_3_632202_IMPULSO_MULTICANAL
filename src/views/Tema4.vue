<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas tecnológicas

    .row.bg-7.justify-content-around.align-items-center.mt-3.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_1_tema4.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Hoy por hoy, la tecnología tiene desarrollo de instrumentales útiles para facilitar los procesos, y, en ese orden de ideas, los inventarios no pueden ser la excepción. Existen diversas herramientas, tanto físicas como de <em>software,</em> para este propósito.

    h3 Herramientas de <em>software</em>

    .row.justify-content-around.align-items-center
      .col-lg-7
        p Los procesos de inventario se deben soportar en herramientas ofimáticas para facilitar su gestión, control, y, por ende, la verificación de las existencias.
        p.mt-3 En empresas pymes, donde los recursos son limitados, se puede utilizar una hoja electrónica, a efectos de llevar el registro de existencias, por tanto, se puede registrar la información de los hallazgos de los conteos físicos, y contrastarlos con los resultados de los registros en el sistema de kárdex.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img_2_tema4.svg', alt='Texto que describa la imagen')  

    .row.justify-content-around.align-items-center.my-5
      .col-lg-12
        p En empresas con mayor estructura de inventarios se pueden manejar sistemas operativos, como un ERP, que se orienta a la gestión integral de la logística, y el sistema de gestión de almacenes, pues es allí donde se albergan los productos, y por tanto se ocupa específicamente de su organización.  

    h3 Recursos para la captura

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img_3_tema4.svg', alt='Texto que describa la imagen').imagen-decorativa-16      
      .col-lg-10
        p Se refiere a los dispositivos con que cuenta una empresa para la gestión de los inventarios; pueden ser computadores, <em>tablets</em>, terminales de radio, frecuencias de uso de mano (<em>Handhelds</em> con lectores de código de barra), los cuales son aplicables casi a todos los productos. Estos dispositivos captan la información, la emiten por conexión en tiempo real o por frecuencias periódicas, grupos de información, lectores de código de barras, u otros aspectos sobre el producto, tales como la categoría, la ubicación, el <em>pallet</em> o cualquier otro elemento identificado durante el proceso de la toma de información. Observemos imágenes de algunos estos dispositivos:


    .row.justify-content-around.align-items-center.mt-3
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img_4_tema4.svg', alt='Texto que describa la imagen') 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img_5_tema4.svg', alt='Texto que describa la imagen')       
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img_6_tema4.svg', alt='Texto que describa la imagen') 








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
