<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conteo

    .row.bg-5.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_1_tema3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Se denomina conteo en inventarios a la operación de identificar físicamente las existencias de los diferentes recursos, productos o activos con que cuenta la empresa en un momento determinado, con el fin de identificar su ubicación, cantidad, estado y disponibilidad, para después contrastarlo con la información que la empresa tiene registrada desde el punto de vista contable y administrativo, en lo que se denomina hoja de Kardex del producto.
          <br><br>
          p.mt-3 Realizar conteos físicos de inventarios en los almacenes es un ejercicio que debe ser habitual para tener información fiable y exacta frente a los niveles de existencias, lo que permitirá realizar la programación las compras y el aprovisionamiento por categorías, según la rotación y distribución a tiendas, así como la identificación de productos obsoletos, no aptos para la venta.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Pasos para realizar los conteos

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-11
        p La realización de un conteo exige de una preparación y unos pasos a seguir, los cuales se pueden describir de la siguiente manera: 

    .row.bg-6.justify-content-center.mb-5.mt-5
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Determinar las categorías a verificar") La empresa debe definir qué categorías o tipos de productos se van a inspeccionar del inventario y cómo se van a cuantificar, así como especificar las cantidades, marcas, presentación, estado, etc.

          p(numero="2" titulo="Conformar el equipo de trabajo") Las personas que participen deben conocer el procedimiento a seguir: qué registros debe diligenciar, cómo registrar la información, el tipo de almacén del que se hace el inventario, qué recursos tecnológicos se usarán. Así mismo, se les deben indicar otras instrucciones, como, por ejemplo, qué hacer cuando encuentren un producto obsoleto o que no corresponda a la categoría.

          p(numero="3" titulo="Programar en jornadas de bajo tráfico de clientes") Los conteos de productos se deben organizar en momentos que no haya flujo de clientes o proveedores, por lo cual se sugiere realizarlos en jornadas de cierre, o en horas donde no existan altos movimientos de los recursos.

          p(numero="4" titulo="Suspender actividades de entradas y salidas") La realización de conteos debe suspender la entradas y salidas de existencias por parte de proveedores y distribuidores. Esto implica una programación e informarles a éstos o a grandes clientes.

          p(numero="5" titulo="Preparar los recursos para el conteo") El ejercicio de conteo debe ser el mínimo posible, ya que es una actividad extenuante, y por tanto debe hacerse con los recursos pertinentes para su desarrollo, como listados, de dispositivos electrónicos, computadores, y demás aspectos que se consideren necesarios para el desarrollo de las actividades y evitar problemas de última hora.

          p(numero="6" titulo="Realizar el conteo físico") Es el ejercicio de identificar en las instalaciones del almacén, en las estanterías, o donde se encuentren los recursos resguardados, por parte del equipo designado para cada categoría; se recomienda que se realice en parejas para verificar los conteos y el registro de la información de manera adecuada, en un ejercicio de veeduría interactiva.
      .col-8.col-lg-4
        figure
          img.l.my-3(src="@/assets/curso/temas/tema3/img_2_tema3.png", alt="alt") 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Frecuencia de conteo

    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_3_tema3.svg', alt='Texto que describa la imagen').imagen-decorativa-15 
      .col-lg-10
        p Los conteos de existencias a los inventarios de recursos deben alinearse en conformidad al periodo de aprovisionamiento, esto es que la empresa debe, por lo menos una vez al año, realizar un conteo físico, en conformidad a la contabilidad. Sin embargo, cuando se trata de alimentos, se recomienda realizarlos en periodos más regulares.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-7
        p La siguiente gráfica dispone los posibles momentos para realizar conteos.

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        h3.mb-4.text-center.txt--purpura 
        .avatar
          figure
            img(src="@/assets/curso/temas/tema3/img_8_tema3.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/img_4_tema3.png", alt="alt").img100
            .col
              h5 Anualmente
              p Busca identificar los niveles de productos con que cuenta la empresa al cierre del periodo en lo que respecta a categorías, como abarrotes o enlatados, productos larga vida.              
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/img_5_tema3.png", alt="alt").img100
            .col
              h5 Periódico
              p Cuando se establecen los conteos físicos con mayores frecuencias que el anual: mensual, trimestral, etc., sobre productos o categorías como abarrotes o enlatados, productos larga vida.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/img_6_tema3.png", alt="alt").img100
            .col
              h5 Cíclico
              p Puede ser en función del tiempo, quincenalmente, o cada vez que hay entradas, o un ciclo productivo. Sobre productos de fechas de vencimiento de mediano plazo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/img_7_tema3.png", alt="alt").img100
            .col
              h5 Permanente
              p De manera constante la empresa verifica las existencias, lo cual se puede realizar por categorías, o grupos de productos altamente perecederos, orgánicos o de corta vida útil.





















</template>

<script>
export default {
  name: 'Tema3',
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
