<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inventarios 

    .row.justify-content-around.align-items-center
      .col-lg-8.bg-0
        .cajon.color-acento-contenido.p-4
          p Los inventarios son el conjunto de todos los activos o recursos con que cuenta la empresa para el desarrollo de sus actividades, ya sean estos con fines de convertirse en dinero o no. Es decir, conforman los recursos que utiliza para obtener, procesar o fabricar los productos propios de su portafolio de ventas; al igual que los elementos o artículos de activos que tiene para desarrollar su actividad, como son las máquinas, los vehículos, los muebles para la operación, entre otros.
          
        p.mt-3 Éstos permiten a la empresa su operación continua, ya que unos facilitan la obtención de los productos y la administración, y los otros, son parte integral de los mismos, en un proceso de agregación de valor, o de intermediación, cuando se trata de comercializadoras de productos alimenticios.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img_1_tema1.svg', alt='Texto que describa la imagen')  
     
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1. Relevancia de los inventarios y sus objetivos
    
    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img_2_tema1.svg', alt='Texto que describa la imagen') 
      .col-lg-10
        p Las inversiones que realizan las empresas para el desarrollo de las actividades se concentran principalmente en la adquisición de recursos que garanticen su operación y actividad, por ello, la relevancia de contar con un conjunto de recursos suficientes que permita cumplir con los objetivos empresariales de ventas y comercialización.  No solo se debe considerar los componentes de los productos que se elaboran, sean estos materias primas, insumos y suministros, sino también, contar con bastantes recursos no comerciales, como maquinaria de amplia capacidad de producción, estanterías, sistemas de refrigeración, de congelación, equipos de carga interna y movilidad, y demás activos que soportarán la producción y operación.

    .row.justify-content-around.align-items-center.mt-3
      p La empresa en su gestión de recursos y manejo de inventarios, como base para ejercicio y operación de manufactura o comercialización de productos alimenticios, debe propender porque dicho ejercicio le favorezca el logro de objetivos corporativos como son:


    .row.justify-content-center.mb-4.mt-5
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/img_3_tema1.svg", alt="alt").img400.m-auto
      .col-lg-7.bg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Objetivo 1")
            .col-12
              p.mb-0 Mantener la disponibilidad de materias primas, insumos, suministros y demás elementos que se requieran en la operación, mitigando el riesgo o escasez, contando con aquellos que se necesiten para obtener productos terminados y permitir la funcionalidad de la empresa.
              
          .row(titulo="Objetivo 2")
            .col-12
              p.mb-0 Obtener economías de escala o ahorro para la empresa, adquiriéndolos en volúmenes, calidades y oportunidad adecuadas, que permitan disminuir su costo de adquisición.
              
          .row(titulo="Objetivo 3")
            .col-12
              p.mb-0 Determinar niveles adecuados o ideales de los diferentes recursos y/o productos, que permitan minimizar costos variables y costos fijos, ya que al tener niveles de compras y abastecimiento eficientes y adecuados, se puede obtener de forma más barata; así mismo, en la medida en que la empresa determine niveles suficientes, el costo de almacenarlos, cuidarlos y manipularlos es más económico, ya que es más económico comprar grandes cantidades, y el costo de almacenamiento tiende a disminuir (Cruz Fernández, 2017)
          
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Clasificación de inventarios
    
    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img_4_tema1.svg', alt='Texto que describa la imagen') 
      .col-lg-10
        p En el mundo empresarial, en este caso el que se encuentra vinculado al sector de alimentos, pueden existir diversas formas de clasificar los inventarios. Ésta depende de identificar cómo hacer más eficiente la administración de los recursos operativos, es decir, llevar un control exacto de los estados actuales en cantidades, valor, uso, ubicación, entre otros.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-12
        h3 Clasificación de inventarios en una empresa
        p A continuación, se presentan las formas más comunes de clasificar los recursos de inventario con que cuentan las empresas para sus operaciones:

    .row.justify-content-around.align-items-center
      ImagenInfografica.color-acento-botones.bg-2
        template(v-slot:imagen)
          figure.img_puntos
            img(src='@/assets/curso/temas/tema1/img_5_tema1.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="46%" y="4%" numero="+")
          .h5.mb-2 Inventarios según el momento de disponibilidad
          p Esta clasificación busca identificar las movilidades que tienen los recursos en un periodo determinado de tiempo, así se puede establecer su rotación, el valor de las inversiones en dichos recursos y la pertinencia de su continuidad en el portafolio o reservas de productos de la empresa.

        .tarjeta.color-acento-botones.p-3(x="74%" y="35%" numero="+")
          .h5.mb-2 Inventarios según la logística operativa
          p Se determina por los niveles de recursos a tener en la empresa, los cuales dependen de la disponibilidad de espacios de almacenamiento, tiempo de entrega de los proveedores, procedencia, pues si hay que importarlos, los tiempos serán mayores.

        .tarjeta.color-acento-botones.p-3(x="63%" y="88%" numero="+")
          .h5.mb-2 Inventarios según la periodicidad
          p Son los recursos adquiridos en función del tiempo, por la estacionalidad para las ventas, por el control y seguimiento contable y fiscal, etc.; por ejemplo, productos de navidad, como quesos, jamones especiales, entre otros criterios.

        .tarjeta.color-acento-botones.p-3(x="28%" y="87%" numero="+")
          .h5.mb-2 Inventarios de recursos para elaboración o fabricación
          p Son el conjunto de recursos que intervienen en la elaboración del bien o producto, y que deben clasificarse según su participación en el proceso. (Álvarez Pareja & Parada Fonseca, 2020)

        .tarjeta.color-acento-botones.p-3(x="16%" y="34%" numero="+")
          .h5.mb-2 Otros tipos de inventario
          p Corresponde a otros criterios de clasificación de recursos que realizan las empresas en conformidad a su acumulación, finalidad o situación de los productos.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-12
        p Para ampliar los conceptos asociados a la clasificación de los inventarios e identificar cómo se subdividen estos tipos, por favor ver el documento. 

    .row.bg-3.justify-content-around.align-items-center.mt-5
      .tarjeta.color-primario.p-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img_6_tema1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Clasificación de Inventarios
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-Clasificacion-de-inventarios.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Almacenamiento de inventarios

    .row.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_7_tema1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los recursos de inventario de una empresa deben ser adecuados y albergados en espacios físicos, hasta tanto no se disponga de ellos, bien sea para la fabricación, o para la venta de los mismos. Su almacenamiento o bodegaje puede definirse como la determinación de un espacio físico planificado para ubicar, resguardar, mantener y manipular recursos, productos o mercancías en una empresa, en conformidad a las necesidades de los mismos, en cuanto a volumen, cantidad, rotación, temperatura, etc.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        p Dentro de esta definición de almacenes se pueden identificar dos funciones dominantes:

    .row.bg-4.justify-content-around.align-items-center.mt-5
      .tarjeta.tarjeta--azul.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3 Aprovisionamiento
              p Que como su nombre lo indica, busca mantener las provisiones de recursos para la fabricación, elaboración de productos, así como los otros activos que posea la empresa para su operación, sustitución o repuesto, etc.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img_8_tema1.svg', alt='Texto que describa la imagen')


          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3 Distribución y despacho
              p En este caso, los almacenes únicamente resguardan productos terminados para ser despachados y distribuidos a clientes o agentes mayoristas. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img_9_tema1.svg', alt='Texto que describa la imagen')
 
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4. Clases de almacenamiento

    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img_10_tema1.svg', alt='Texto que describa la imagen') 
      .col-lg-10
        p Los inventarios de recursos en las empresas se deben depositar o resguardar en espacios físicos adecuados, según sus características. De manera complementaria, se deben distinguir según corresponda a su tipo.     

    .row.justify-content-around.align-items-center.mt3
      .col-lg-5
        p Regularmente las empresas clasifican sus almacenes así:
    
    //Puntos 2
    .row.justify-content-around.align-items-center.mt-5
      ImagenInfografica.color-acento-botones.bg-2
        template(v-slot:imagen)
          figure.img_puntos
            img(src='@/assets/curso/temas/tema1/img_11_tema1.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="15.5%" y="44%" numero="A")
          .h5.mb-2 Almacén productos A
          p Son los productos de mayor valor en almacén. Hasta un 60% de las inversiones rotan poco por el precio, pero dejan buen margen. Pueden ser hasta un 20% de las existencias de inventario. Por estas razones deben ser custodiados, como es el caso de los alimentos nutricionales especializados, leches para bebé, quesos especiales y madurados, entre otros, los cuales deben ser preservados en condiciones adecuadas que requiera cada tipo de recurso, como, por ejemplo, de temperatura, en un espacio del almacén A.

        .tarjeta.color-acento-botones.p-3(x="20%" y="44%" numero="B")
          .h5.mb-2 Almacén productos B
          p Son los productos que requieren niveles de inversión media, tienen buena rotación, pero menor que los de tipo C. Pueden llegar a ser en promedio 30% a 40% de los que se ofertan, pero su inversión es moderada. en algunos casos pueden requerir de condiciones especiales para su manejo y ventas, como, por ejemplo, helados y paletas, que necesitan de las neveras para su almacenamiento, donde la custodia no es tan alta por su significancia, pero si debe conservar una temperatura regulada. Así mismo puede suceder con algunos productos cárnicos.

        .tarjeta.color-acento-botones.p-3(x="25%" y="44%" numero="C")
          .h5.mb-2 Almacén productos C
          p Son los productos de menor valor de inversión, que pueden llegar a ser los de mayores cantidades de existencias, porque rotan mucho, sin embargo, la inversión es baja. Pueden ser más del 50% de los productos ofertados lo que requiere grandes espacios y no necesita mayores condiciones para su manejo y venta.

        .tarjeta.color-acento-botones.p-3(x="21%" y="60%" numero="+")
          .h5.mb-2 Almacenamiento según la significancia de los recursos
          p Este sistema de almacenamiento también denominado ABC, el cual consiste en clasificar las existencias de inventario en almacenes de tres tipos, ajustando las condiciones a cada uno, para resguardarlos correctamente, protegerlos, facilitar el manejo, etc. (Cruz Fernández, 2017).

        .tarjeta.color-acento-botones.p-3(x="62%" y="1%" numero="+")
          .h5.mb-2 Almacenamiento en función del tipo de recursos a resguardar
          p Este criterio se aplica para agrupar los recursos y resguardarlos según su grado de naturaleza.

        .tarjeta.color-acento-botones.p-3(x="64%" y="30%" numero="+")
          .h5.mb-2 Almacén de materias primas, insumos y suministros
          p Recursos esenciales para la elaboración o fabricación de los productos.

        .tarjeta.color-acento-botones.p-3(x="64%" y="44%" numero="+")
          .h5.mb-2 Almacén de productos en proceso
          p Son aquellas materias primas insumos, que ya han sufrido algún proceso de agregación de valor o transformación, pero que aún no han sido terminados totalmente. Ejemplo: producción de huevos que no han sido clasificados, pesados, empacados y embalados. La leche que se encuentra pasteurizada, pero no empacada, y está en silos.
       
        .tarjeta.color-acento-botones.p-3(x="64%" y="58%" numero="+")
          .h5.mb-2 Almacén de productos terminados
          p Son aquellos productos que ya tienen completa su agregación de valor, por lo que cumplieron su proceso de producción y están esperando para ser distribuidos.

        .tarjeta.color-acento-botones.p-3(x="64%" y="71%" numero="+")
          .h5.mb-2 Almacén de productos obsoletos
          p Es el inventario que posee la empresa de productos que ya están obsoletos, deteriorados, que cumplieron su vida útil o caducaron, y no pueden ser comercializados, ni distribuidos.

        .tarjeta.color-acento-botones.p-3(x="64%" y="85%" numero="+")
          .h5.mb-2 Almacén de repuestos
          p Son aquellos recursos que posee la empresa para efectos de suplir fallas en máquinas o partes intercambiables. Deben permanecer disponibles cuando sean necesitados y no interrumpir el proceso de producción. Ejemplo: boquillas para embutidos, una cuchilla cortadora de pan, etc.

        .tarjeta.color-acento-botones.p-3(x="64%" y="99%" numero="+")
          .h5.mb-2 Almacén de activos
          p Conjunto de recursos de capital con que cuenta la organización para su operación y el trabajo de los individuos. Ejemplo: computadores muebles, escritorios, bodegas, etc.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        p Para ampliar el concepto sobre gestión y manejo de las existencias de inventario, se recomienda consultar el documento. 

    .row.bg-3.justify-content-around.align-items-center.mt-5
      .tarjeta.color-primario.p-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img_12_tema1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Gestión de inventarios
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-La-gestion-de-inventarios.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Nivel óptimo de Inventario

    .row.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_13_tema1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es la determinación de las cantidades de recursos o productos que permiten cubrir las demandas o necesidades del departamento de producción y el de ventas. Para ampliar este tema, por favor ver el vídeo a continuación.    

    .row.justify-content-around.align-items-center.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)











</template>

<script>
export default {
  name: 'Tema1',
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
