<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") La biorremediación ha presentado un enorme crecimiento a nivel mundial en los últimos tiempos, surge como una disciplina que provee soluciones a los problemas de contaminación por cierto tipo de sustancias que son de difícil degradación y de mucho tiempo de persistencia.
    p.mt-3(data-aos="fade-up") ¿En qué consiste la biorremediación de aguas y suelos? Ver el siguiente video para conocer de qué se trata este proceso:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NgvCo5RGCNM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-4(data-aos="fade-up") Esta disciplina deriva de la Biotecnología y de sus diferentes aplicaciones en el campo ambiental, consiste en la utilización de organismos microscópicos, plantas, combinaciones de estos o utilización de sus complejos enzimáticos, para metabolizar los contaminantes presentes en diferentes componentes ambientales, aunque su desarrollo se ha centrado en el suelo y el agua, así como en agentes contaminantes como los metales pesados, los hidrocarburos, plaguicidas y demás compuestos orgánicos.
    p.mt-3(data-aos="fade-up") Para un óptimo entendimiento de las diferentes técnicas y estrategias de biorremediación se requiere el conocimiento de los principios de otras disciplinas como la Microbiología, la Matemática, la Estadística y la Bioquímica, que permiten el entendimiento de los procesos que se dan en el medio que presenta el problema de contaminación a remediar.
    p.mt-3(data-aos="fade-up") Dada la naturaleza y la dinámica de las sustancias, insumos y sustratos con los que se debe trabajar a diario, la biorremediación presenta un alto riesgo laboral, por lo que es necesario también, tener conocimiento de algunos conceptos de seguridad y salud en el trabajo y acatar los procedimientos que en esta materia se dictan para el trabajo en campo y en laboratorio. 

    

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
