<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-3
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img_1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se conocerá el concepto de inventarios, su importancia en la operación de las actividades principales de la empresa, tales como la obtención, elaboración y fabricación de productos terminados con fines de comercialización, promoción y venta; esto permitirá tener un control y la información actualizada sobre la cantidad de insumos, materias primas, productos terminados, entre otros, necesarios para el desarrollo del objetivo de la empresa.
            
    .row.justify-content-around.align-items-center.mt-5
      .col-12
        p Como metodología de estudio, el aprendiz se apropia de los contenidos temáticos a través de la lectura del material, consultando sus anexos y desarrollando las actividades de repaso planteadas en la guía de aprendizaje; contará con el acompañamiento de un instructor asignado al programa que, continua y permanentemente, le orientará con las pautas necesarias para el logro de las actividades, brindando las explicaciones y herramientas básicas de tipo conceptual y metodológico, competentes, para que faciliten el logro de los resultados de aprendizaje, en materia de operación de inventarios.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-around.align-items-center.mt-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
