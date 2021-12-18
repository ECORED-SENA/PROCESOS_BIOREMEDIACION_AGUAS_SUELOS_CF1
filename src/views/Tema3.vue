<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Principios de microbiología en suelos y aguas

    figure
      img(src="@/assets/curso/tema3/1.png" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") La Biología es tan amplia que debe dividirse en varias ramas para poder abarcar todo su campo de estudio, y una de estas ramas es la microbiología, la cual se encarga de estudiar las formas de vida más pequeñas del planeta, es decir, que se dedica a la clasificación, distribución y análisis de los diferentes tipos de microorganismos que existen en el ambiente, de manera que se puedan aprovechar los beneficios o combatir los perjuicios que estos organismos traen al ser humano y al ambiente en general.
    p.mt-3(data-aos="fade-up") En el campo ambiental es de vital importancia reconocer la microbiología de los diferentes componentes ambientales:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ok6-BFi_iC8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    br
    .mt-5.titulo-segundo
      h2#t_3_1 3.1  Tipos de microorganismos

    p(data-aos="fade-up") Existe una gran cantidad de seres vivos imperceptibles al ojo humano que desempeñan un importante papel en los procesos naturales y antrópicos, como lo son los microorganismos; estos organismos pueden ser procariotas o eucariotas, pueden constar de células aisladas o asociadas e incluso pueden ser seres acelulares como los virus. Todos estos organismos presentan una serie de características que les permiten dispersarse, reproducirse y establecerse exitosamente en casi cualquier ambiente y ser un eslabón importante para soportar la vida en el planeta.

    .row.mt-4.col-lg-9.m-auto
      .col-md-6.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/2.svg')})`}")
            .tarjeta-flip__contenido.p-4(style="background-color:#1A7B96;")
              p.mb-0.text-white.text-center.mt-5.mb-5 Los microorganismos se clasifican según ciertas características comunes entre grupos de ellos, la ciencia encargada de esta tarea se llama taxonomía, la cual no solo se encarga de la clasificación, sino también de la identificación y nomenclatura de estos.
      .col-md-6.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/3.svg')})`}")
            .tarjeta-flip__contenido.p-5(style="background-color:#0F2771;")
              p.mb-0.text-white.text-center.mt-5.mb-5 El origen de la taxonomía se le atribuye a Carl Von Linneo, quien desarrolló el sistema binomial (nombres científicos formados de dos palabras), el cual aún se encuentra vigente.

    p.mt-5(data-aos="fade-up") Durante muchos años los organismos se clasificaron en solo dos reinos: animal y vegetal; pero con la aparición y el desarrollo de la microbiología se logró establecer la existencia y clasificación de muchos otros seres vivos en otros grupos: protozoos, bacterias y hongos; lo que llevó al establecimiento y clasificación de organismos en cinco reinos:

    ul.lista-ul.mt-4.col-lg-9.m-auto
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Mónera (microorganismos procariotas, es decir, que no presentan un núcleo definido o confinado dentro de una membrana).
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Protista (microorganismos eucariotas, es decir, con núcleo separado por medio de una membrana).
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Fungi (formado por todos los hongos, también llamado reino mycota).
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Plantae (incluye todos los seres que son autótrofos, es decir, plantas y algas superiores).
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Animalia (animales superiores, heterótrofos).

    p.mt-5(data-aos="fade-up") Estos 5 reinos de la naturaleza se describen y se clasifican en la figura que aparece a continuación.

    p.p-1.mt-4(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 8.] Reinos de la naturaleza
      figure
        img(src="@/assets/curso/tema3/4.svg" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de “Los reinos de la naturaleza” (Morales, s.f.).

    p.mt-5(data-aos="fade-up") Con el avance de las técnicas moleculares y el detallado estudio del ARN se estableció la existencia de similitudes entre los seres vivos a nivel molecular, esto permitió establecer tres grandes grupos llamados dominios, que permitieron reestructurar la forma de clasificar los seres vivos y que se consideran superiores a los reinos:

    ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/5.png' alt='' data-aos="fade-in")

      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="20%" y="5%" numero="")
        .h4.text-center(style="color:#89EBD4;") Bacteria
        p.mt-3.text-white.text-center Células procariotas  unicelulares con pared celular compuesta de peptidoglicano
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="48%" y="5%" numero="")
        .h4.text-center(style="color:#89EBD4;") Archaea
        p.mt-3.text-white.text-center Células procariotas  unicelulares con pared celular carente de peptidoglicano
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="78%" y="5%" numero="")
        .h4.text-center(style="color:#89EBD4;") Eukarya
        p.mt-3.text-white.text-center Células eucariotas

    p.mt-4(data-aos="fade-up")  Para poder clasificar y nombrar microorganismos se deben realizar los respectivos procesos de identificación, los cuales se realizan siguiendo métodos ya establecidos, dentro de los cuales se destacan:

    ul.lista-ul.mt-4.col-lg-9.m-auto
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Las claves dicotómicas: consisten en una serie de preguntas sucesivas con dos posibles respuestas, que van conduciendo a una nueva pregunta hasta que se logra la identificación del microorganismo. 
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Los cladogramas: metodología basada en las relaciones filogenéticas entre organismos.

    .col-lg-10.m-auto.mt-4
      .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
        .p(data-aos="fade-up") La nomenclatura para microorganismos se basa en las reglas establecidas en un Código Internacional de Nomenclatura, el cual utiliza el sistema binomial, es decir, nombres compuestos por dos palabras en latín, la primera indica el género y debe escribirse con la primera letra en mayúscula, y la segunda, se escribe en letras minúsculas e indica la especie. Además, estos nombres deben ser escritos en letra cursiva o subrayada. 
        p.mt-3(data-aos="fade-up") En los procesos de biorremediación se utilizan principalmente microorganismos o sus enzimas para mitigar y en algunos casos eliminar los contaminantes del ambiente, aunque en los últimos años ha sido creciente el uso de plantas.

    p.mt-5(data-aos="fade-up") Para conocer un poco más sobre la importancia de estos seres en los procesos ambientales de descontaminación ver el video sobre “#[strong(style="color:#22AFD6 !important;") Microorganismos implicados en procesos de biorremediación]” de la Universidad Abierta y a Distancia de México, que se encuentra en el material complementario.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_2 3.2  Tipos de metabolismo microbiano y rutas degradativas

    p(data-aos="fade-up") Los flujos de energía y circulación de la materia son los procesos que permiten que las células puedan desarrollar sus procesos vitales, tales como la producción o consumo de energía (a partir de las moléculas provenientes de los alimentos que se consumen) y la generación de nuevos productos que permitan el normal funcionamiento fisiológico de los organismos; para ello existe una gran cantidad de procesos bioquímicos al interior de las células, que se encargan de mantener ese equilibrio entre la circulación de materia y el flujo de energía, a esta serie de procesos se les denomina metabolismo.

    .bloque-texto-g.color-secundario.p-5.mt-5.col-lg-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/6.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-up") Son los procesos para la obtención y consumo de energía al interior de las células, que se dan a través de reacciones químicas que permiten transformar con ayuda de las enzimas, sustancias complejas en otras más sencillas (obtención de energía) o moléculas sencillas en otras más complejas (gasto de energía).

    p.mt-5(data-aos="fade-up") Las enzimas son moléculas cuya función es acelerar las reacciones químicas y en algunos casos son indispensables para que la reacción pueda llevarse a cabo. En el transcurso de una ruta metabólica se producen diferentes sustancias, a las cuales se les da el nombre de metabolitos, estas sustancias pueden ser el producto final de la reacción o pueden ser productos intermedios, en cualquier caso, su aparición es debida a la acción de las enzimas y la importancia es alta, ya que pueden representar conexión con otras rutas metabólicas o pueden ser de interés antrópico.

    p.mt-3(data-aos="fade-up") Las rutas metabólicas se pueden clasificar según si su función es el consumo o producción energética de la siguiente forma:

    .row.mt-5
      .col-lg-4.p-0
        .p-5(style="background-color:#0F2771;height:100%;border-bottom-left-radius:15px;border-top-left-radius:15px")
          h3.text-center.text-white(data-aos="fade-up") Rutas catabólicas
          p.mt-3.text-center.text-white(data-aos="fade-up") Rutas de obtención de energía, donde se obtienen nuevos productos más sencillos que el inicial, son conocidas como rutas degradativas y son de muchísima importancia en los procesos de biodegradación y biorremediación, el ejemplo más común es la glucólisis, dependiendo de la célula donde se dé la reacción, la energía permitirá que se desarrolle una función fisiológica específica.
      .col-lg-4.p-0
        .p-5(style="background-color:#1A7B96;height:100%;")
          h3.text-center.text-white(data-aos="fade-up") Rutas anabólicas
          p.mt-3.text-center.text-white(data-aos="fade-up") Rutas de consumo energético, aquí se generan nuevos productos más complejos que el inicial (biosíntesis), como ejemplo se tiene la gluconeogénesis y el ciclo de Calvin.
      .col-lg-4.p-0
        .p-5(style="background-color:#0F2771;height:100%;border-bottom-right-radius:15px;border-top-right-radius:15px")
          h3.text-center.text-white(data-aos="fade-up") Rutas anfibólicas
          p.mt-3.text-center.text-white(data-aos="fade-up") Son rutas mixtas catabólicas y anabólicas, el ejemplo más común es el ciclo de Krebs.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_3 3.3  Ciclos biogeoquímicos

    p(data-aos="fade-up") Los procesos de circulación de materia y flujos de energía característicos del metabolismo microbiano se dan también entre los diferentes elementos de los ecosistemas del planeta, formando una serie de interacciones entre estos elementos y los seres vivos, conocidos como ciclos biogeoquímicos y se refieren a la circulación de elementos (azufre, calcio, carbono, fósforo, nitrógeno, oxígeno, hierro) o sustancias (como el agua) indispensables para todas las formas de vida, que pueden ser utilizados una y otra vez , que permiten la circulación de materia entre organismos y otros factores, en forma de nutrientes. 
    p.mt-3(data-aos="fade-up") Los nutrientes disponibles para los procesos vitales en el planeta se pueden clasificar en: 

    ul.lista-ul.mt-4.col-lg-9.m-auto
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; #[strong(style="color: #22AFD6 !important;") Macronutrientes] que son los nutrientes que componen mayoritariamente los seres.
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; #[strong(style="color: #22AFD6 !important;") Micronutrientes] que se encuentran en poca cantidad, a pesar de que son indispensables para el metabolismo.

    h4.mt-5(data-aos="fade-up") Algunos ciclos biogeoquímicos son:

    div.mt-3(v-show="imagen_info1" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              h4.text-white Ciclo del nitrógeno
              p.text-white(data-aos="fade-up") La circulación del nitrógeno en el ecosistema, las bacterias y algunas plantas en asociación simbiótica con microorganismos pueden tomar el nitrógeno directamente del aire y a partir de él, sintetizar las moléculas orgánicas necesarias y aprovechables por las plantas, las cuales las transfieren a sus tejidos, y posteriormente son consumidos por animales consumidores de primer orden (herbívoros) y estos a partir de sus tejidos a los consumidores de segundo y tercer orden (carnívoros y omnívoros respectivamente); finalmente, el nitrógeno retorna al ambiente a través de la orina y la descomposición de los organismos muertos y su posterior transformación bacteriana en nitrógeno atmosférico de nuevo.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema3/7.png" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button(style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 1 / 4
          button.boton_1(@click="imagen_info2 = true;imagen_info1 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div.mt-3(v-show="imagen_info2" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              h4.text-white Ciclo del carbono
              p.text-white(data-aos="fade-up") Es un ciclo muy importante para los procesos de biodegradación y biorremediación, dado que el carbono es la base de la composición de todas las formas de vida conocidas en la tierra. Ya en el suelo, el carbono puede permanecer en estado mineral por muchísimo tiempo y transformarse en reservas de materiales fósiles como el petróleo, carbón mineral o gas natural, materiales que a través de la actividad antrópica liberan en grandes cantidades Gases de Efecto Invernadero (GEI), como el dióxido de Carbono o el Metano, que contribuyen a incrementar el calentamiento global.
              p.mt-3.text-white(data-aos="fade-up") La captación se realiza desde la atmósfera, en forma de Dióxido de Carbono (CO2) a través de las plantas, algas y algunas bacterias, las cuales lo transforman en azúcares simples por medio de procesos fotosintéticos y permiten su ingreso y circulación en la cadena trófica, hasta el retorno de este al ambiente por medio de la respiración de los organismos y su degradación tras la muerte.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema3/8.png" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info1 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 2 / 4
          button.boton_1(@click="imagen_info3 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div.mt-3(v-show="imagen_info3" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              h4.text-white Ciclo del fósforo
              p.text-white(data-aos="fade-up") El fósforo ingresa a la cadena trófica a través de las plantas y los microorganismos y, proviene principalmente de la degradación de minerales, sus principales vías de movimiento son por el medio acuático. Su importancia radica en la formación de compuestos como los ácidos ribonucleico y desoxirribonucleico.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema3/9.png" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info2 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 3 / 4
          button.boton_1(@click="imagen_info4 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div.mt-3(v-show="imagen_info4" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              p.text-white(data-aos="fade-up") EParte de la evaporación del agua se debe al calentamiento ejercido por el sol, lo que la convierte en estado gaseoso, la cual se suma al vapor de agua perdido por los seres vivos mediante la transpiración; después este vapor en la atmósfera se enfría y se condensa formando las nubes, donde el agua termina precipitándose y regresando a los cuerpos de agua superficiales y subterráneos para iniciar nuevamente el ciclo.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema3/10.png" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info3 = true;imagen_info4 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 4 / 4
          button(style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")
     

  
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    imagen_info1: true,
    imagen_info2: false,
    imagen_info3: false,
    imagen_info4: false,
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
.cajon-b.color-primario:before
  background-color: #D2EFF7
  opacity: 1
.img-infografica.color-secundario .img-infografica__item__numero, .img-infografica-b.color-secundario .img-infografica__item__numero
  color: #1F548A
  font-size: 20px
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
    background-color: #00FFE6
    opacity: 1
.img-infografica__card, .img-infografica-b__card
  width: 400px
.img-infografica__card .tarjeta
  background: url("../assets/curso/tema1/4.svg")
  background-repeat: no-repeat
.boton_1:hover
  opacity: .95
  transform: scale(1.05)
.cajon.color-secundario
  background-color: #C7EBF5
.cajon.color-secundario:before
  background-color: #22AFD6
.pasos-a.color-acento-botones .pasos-a__linea .hor-line
    border-top-color: #1F548A
.pasos-a.color-acento-botones .pasos-a__linea__esquina__linea
    border-color: #1F548A
.pasos-a.color-acento-botones .pasos-a__numero::after
    border-left-color: #1F548A
.pasos-a.color-acento-botones .pasos-a__circle div
    color: #00FFE6
.pasos-a.color-acento-botones .pasos-a__circle
    background-color: #0F1E5A
.cajon-b2:before
  right: 39%
  bottom: 26%
.tarjeta.color-acento-botones--borde
  background-color: #1F548A
  border: solid 4px #00FFE6
.tabs-a__tab
  background-color: #C6EDFF
.cont-1
  background: url("../assets/curso/tema2/2.png")
  background-size: cover
  background-repeat: no-repeat
.cont-2
  background: url("../assets/curso/tema2/3.svg")
  background-size: cover
  background-repeat: no-repeat
td, th
  word-break: break-word
</style>
