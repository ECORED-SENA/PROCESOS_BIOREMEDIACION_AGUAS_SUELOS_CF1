<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Contaminación de suelos y aguas

    figure
      img(src="@/assets/curso/tema1/1.svg" data-aos="fade-up")

    .row.mt-5
      .col-lg-6
        .cajon-b.color-primario.p-3
          p.mb-0(data-aos="fade-up") Se puede definir polución como la acumulación de sustancias extrañas y nocivas en un cuerpo determinado, este fenómeno se puede dar por causas naturales o por causa de las actividades del hombre (causas antrópicas). Las sustancias que generan la contaminación pueden ser de origen orgánico o inorgánico, y su efecto depende de varios factores tales como:
        ul.lista-ul.mt-3
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Concentración de la sustancia en el medio.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Propiedades físicas, químicas y biológicas de la sustancia.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Persistencia.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Biodegradabilidad.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Toxicidad.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Condiciones bioclimáticas del medio donde se acumulan.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp;Características físicas, químicas y biológicas del medio donde se acumulan.

      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-left")

    p.mt-4(data-aos="fade-up") Mediante el siguiente recurso se explica cómo afecta a la humanidad y al planeta la contaminación de aguas y suelos:


    div(v-show="imagen_info1")
      ImagenInfografica.color-secundario.mt-4(data-aos="fade-in" style="position:relative;")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/3.svg' alt='' data-aos="fade-in")

        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="41%" y="28%" numero="1")
          .h5.text-white.text-center El suelo y el agua son dos de los principales componentes ambientales del planeta.
        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="12%" y="92%" numero="2")
          .h5.text-white.text-center El suelo es un sistema complejo, considerado un recurso vivo y no renovable en el corto plazo, presenta alta importancia para la vida del planeta, ya que alberga una gran cantidad de formas de vida (principalmente microscópicas).
        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="95%" y="51%" numero="3")
          .h5.text-white.text-center El suelo también permite la disponibilidad de nutrientes para las plantas, el desarrollo de los ciclos biogeoquímicos, la regulación del balance hídrico, entre otros.

      .text-center(style="top: -50px;position:relative;max-width:200px;margin: 0 auto" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 1 / 5
          button.boton_1(@click="imagen_info2 = true;imagen_info1 = false" style="color:#00FF89;background-color:#0F1E5A;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info2")
      ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/5.svg' alt='' data-aos="fade-in")

        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="90%" y="64%" numero="1")
          .h5.text-white.text-center La producción de alimento para toda la humanidad es el actual objetivo de la agricultura y por ello, se han desarrollado estrategias y mecanismos que permitan aumentar la producción de los cultivos y la resistencia a plagas y enfermedades, pero también se ha generado a raíz de esto, el incremento de sustancias contaminantes que se acumulan en el suelo.

      .text-center(style="top: -50px;position:relative;max-width:200px;margin: 0 auto" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info1 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 2 / 5
          button.boton_1(@click="imagen_info3 = true;imagen_info2 = false" style="color:#00FF89;background-color:#0F1E5A;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info3")
      ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/6.svg' alt='' data-aos="fade-in")

        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="60%" y="70%" numero="1")
          .h5.text-white.text-center Generando así, una reacción en cadena que permite que esos fenómenos se transfieran a otros componentes, como el agua superficial, el agua subterránea o el aire y se magnifiquen.

      .text-center(style="top: -50px;position:relative;max-width:200px;margin: 0 auto" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info2 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 3 / 5
          button.boton_1(@click="imagen_info4 = true;imagen_info3 = false" style="color:#00FF89;background-color:#0F1E5A;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info4")
      ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/7.svg' alt='' data-aos="fade-in")

        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="68%" y="47%" numero="1")
          .h5.text-white.text-center Estos son procesos de deterioro o pérdida principalmente de las propiedades físicas y requieren atención especial, por su parte la contaminación es un efecto un poco más delicado, debido a que es más complejo de tratar.

      .text-center(style="top: -50px;position:relative;max-width:200px;margin: 0 auto" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info3 = true;imagen_info4 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 4 / 5
          button.boton_1(@click="imagen_info5 = true;imagen_info4 = false" style="color:#00FF89;background-color:#0F1E5A;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info5")
      ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/8.svg' alt='' data-aos="fade-in")

        .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="65%" y="50%" numero="1")
          .h5.text-white.text-center Desafortunadamente también alberga y transporta contaminantes que, al igual que en el suelo, generan procesos de disminución de su calidad y de contaminación.

      .text-center(style="top: -50px;position:relative;max-width:200px;margin: 0 auto" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info4 = true;imagen_info5 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 5 / 5
          button.boton_1(style="color:#00FF89;background-color:#0F1E5A;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;")
            i.fas.fa-angle-right(style="font-size:25px;")

    p.mt-4(data-aos="fade-up") Es importante recordar que aunque el planeta está formado por 75 % de agua, la que se encuentra disponible para el consumo humano es menos del 1 %, por lo que es de suma importancia velar por su conservación y uso eficiente. En la figura 1 se observa la forma como se distribuye el agua y su proporción en el planeta, mientras que en la figura 2 se observa su disponibilidad para el consumo humano.

    .col-lg-8.m-auto
      p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 1.] Distribución y proporción del agua en el planeta
      figure
        img(src="@/assets/curso/tema1/9.png" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota: Adaptado del Instituto de Tecnologías Educativas (s.f.). #[a(href="http://educalab.es/recursos" target="_blank") http://educalab.es/recursos]

    .row.mt-5
      .col-lg-4
      .col-lg-8
        p.p-1(style="border-left:5px #31B7DC solid;margin-left:10px;") &nbsp;&nbsp; #[strong Figura 2.] Disponibilidad de agua para consumo humano en el planeta
    .row
      .col-lg-4
        figure.mt-3
          img(src="@/assets/curso/tema1/10.svg" data-aos="fade-right")
      .col-lg-8
        figure
          img(src="@/assets/curso/tema1/11.svg" data-aos="fade-up")
        figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado del Centro virtual de información del agua (2017). #[a(href="https://agua.org.mx/en-el-planeta/" target="_blank") https://agua.org.mx/en-el-planeta/]

    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1  Caracterización de suelos y aguas

    p(data-aos="fade-up") La determinación de las propiedades fisicoquímicas y biológicas de suelo y agua es el primer paso para el establecimiento de su calidad y/o la identificación de problemas como la contaminación.

    .col-lg-8.m-auto.mt-4
      .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
        .p(data-aos="fade-up") Al proceso que permite establecer estas propiedades se le llama caracterización y se apoya en varias técnicas de toma, transporte y análisis de muestras para la obtención de resultados confiables, que cuantifiquen el estado de un determinado parámetro del componente ambiental estudiado.

    p.mt-4(data-aos="fade-up") En la tabla 1 se visualizan las propiedades de mayor importancia para tener en cuenta en la realización de estudios para la caracterización de suelos y aguas.

    p.p-1.mt-5(style="border-left:5px #31B7DC solid;margin-left:10px;") &nbsp;&nbsp; #[strong Tabla 1] Principales propiedades en estudios para la caracterización de suelos y aguas

    .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
      table(style="min-width:100%")
        thead(style="border:none")
          th.text-white(style="width:30%;background-color:#1A7B96;border:none;")
          th.text-white(style="width:40%;background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Suelo
          th.text-white.text-center(style="width:50%;background-color:#1A7B96;border:none;padding:15px;font-size:17px") Agua
        tbody
          tr(style="background-color:#EBEFF6;")
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              h5 Propiedades físicas
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Textura
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Estructura
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Porosidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Densidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Color
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Humedad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Infiltración
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Conductividad hidráulica
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Color
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Olor
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Turbidez
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Sólidos
          tr(style="background-color:#F7FDFF;")
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              h5 Propiedades Químicas
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] pH
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Temperatura
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Fertilidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Capacidad de Intercambio Iónico
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Contenido de materia orgánica.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Metales pesados
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Salinidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Acidez
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Bases Intercambiables
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              .row
                .col-lg-6
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Grasas y aceites
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Temperatura
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] pH
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] compuestos orgánicos volátiles
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Alcalinidad
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Nutrientes
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Contenido de materia orgánica
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Metales pesados
                .col-lg-6
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Acidez
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Conductividad eléctrica
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Fenoles
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Cloruros
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Oxígeno disuelto
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Demanda bioquímica de oxígeno
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Demanda química de oxígeno
          tr(style="background-color:#EBEFF6;")
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              h5 Propiedades biológicas
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Conteo de organismos
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Identificación de grupos funcionales
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Índices de biodiversidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Pruebas de germinación
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Conteo de organismos.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Identificación de  grupos funcionales
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Índices de biodiversidad
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Índices de abundancia

    p.mt-5(data-aos="fade-up") Es así como el proceso para la caracterización de suelos es:

    PasosA.color-acento-botones.mt-5(tipo="l")
      div
        p(data-aos="fade-up") Para la caracterización de suelos y aguas deben crearse planes de muestreo que permitan la obtención de muestras representativas (aceptadas estadísticamente), que den validez a los resultados obtenidos.
      div
        p(data-aos="fade-up") Con estos resultados se procede a realizar una comparación con los valores de referencia dictados por la legislación y normatividad nacional (o internacional en algunos casos) y después se ejecuta la evaluación de los riesgos sobre los ecosistemas y la salud humana.
      div
        p(data-aos="fade-up") En caso de detectarse algún problema de contaminación se analizan las alternativas de remediación aplicables que permitan solucionar la situación y se selecciona la técnica que presente las mejores ventajas técnicas, sociales, económicas y que se desarrolle en menos tiempo. Es aquí donde toman fuerza las técnicas de biorremediación como alternativa de control de la contaminación.
      div
        p(data-aos="fade-up") Por último, se redacta la propuesta de proyecto de descontaminación (basada en la biorremediación), la cual debe indicar claramente el objetivo, metodología a aplicar, resultados esperados, cronograma de actividades, actividades de seguimiento y evaluación y, actividades posteriores a la descontaminación.

    Separador

    br
    .titulo-segundo.mt-5
      h2#t_1_2 1.2  Tipos de contaminantes del suelo y agua

    .row
      .col-lg-6
        p(data-aos="fade-up") Aunque son muchos los contaminantes del ambiente en los componentes de fase sólida y líquida, como el suelo y el agua, se pueden nombrar los metales pesados, hidrocarburos, plaguicidas, contaminantes orgánicos persistentes (COP) y otro tipo de contaminantes emergentes; como los de mayor interés en los últimos años, dado su naturaleza, su persistencia y el hecho que son bioacumulables y biomagnificables, lo que hace que su remediación sea mucho más compleja.
        .cajon.color-secundario.p-5.mt-3(style="border-bottom-right-radius:100px;")
          .p(data-aos="fade-up") La mayoría de problemas de contaminación tienen origen antrópico por prácticas tales como la agricultura, inadecuada disposición de residuos, derrames de sustancias químicas o de hidrocarburos, minería, entre otros. 
        p.mt-4(data-aos="fade-up") Para complementar un poco más al respecto, ver el video #[strong(style="color:#22AFD6;") Remediación de suelos], que se encuentra en el material complementario.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/13.svg" data-aos="fade-left")

    h3.mt-4(data-aos="fade-up") Metales pesados

    p.mt-4(data-aos="fade-up") En la naturaleza se ha logrado la identificación de menos de 100 elementos químicos naturales (de los 118 que tiene la tabla periódica), con diferentes características y propiedades, lo que ha permitido clasificarlos en grupos con similitudes; uno de estos grupos son los metales, y de estos se desprende un pequeño grupo conocido como metales pesados.

    .cajon.color-secundario.p-5.mt-3.col-lg-5.m-auto(style="border-bottom-right-radius:100px;")
      .p(data-aos="fade-up") Reyes (2017) los describe como elementos con alta toxicidad para el ser humano y otros seres vivos y con una densidad mayor a 4 g/cm#[sup 3].

    p.mt-4(data-aos="fade-up") Entre los elementos que se catalogan en este grupo se tiene el plomo, el mercurio, cadmio, níquel, cobre, berilio, arsénico, cromo, vanadio y zinc; la gran mayoría de ellos se acumulan en el ambiente debido a procesos industriales y de minería, ya sea a través de sus residuos sólidos o líquidos, ingresando así a la cadena trófica a través de las plantas que los absorben y acumulan en sus tejidos, como se ilustra en la figura a continuación.

    .col-lg-8.m-auto.mt-4
      p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 3.] Dinámica de los metales pesados en el ambiente
      figure
        img(src="@/assets/curso/tema1/14.svg" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de Heavy metal: ciclos biogeoquímicos (s.f.). #[a(href="http://quimica-metales-pesados.blogspot.com/2010/01/ciclos-biogeoquimicosbiogeochemical.html" target="_blank") http://quimica-metales-pesados.blogspot.com/2010/01/ciclos-biogeoquimicosbiogeochemical.html]

    p.mt-5(data-aos="fade-up") Aunque existen numerosos estudios que ponen en evidencia los efectos tóxicos, cancerígenos, mutagénicos y teratogénicos de estos elementos, se continúa utilizándolos en diferentes procesos a nivel mundial y pocos países presentan políticas o leyes que permitan regular el uso y los valores máximos permisibles de estos contaminantes.

    h3.mt-5(data-aos="fade-up") Contaminantes orgánicos
    p.mt-4(data-aos="fade-up") La naturaleza y origen de los contaminantes orgánicos de suelos y aguas es muy variada, pero se destacan los hidrocarburos y los Contaminantes Orgánicos Persistentes (COP). Los hidrocarburos derivados del petróleo son mezclas con moléculas compuestas por largas cadenas de átomos de Carbono (C), Hidrógeno (H), Oxígeno (O), Azufre (S), Nitrógeno (N) y otros elementos en menor cantidad.

    .bloque-texto-g.color-secundario.p-3.mt-4.col-lg-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/15.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La acumulación de este tipo de sustancias contaminantes en los suelos hace que estos queden inutilizables durante muchos años al alterar significativamente propiedades como el intercambio gaseoso con la atmósfera, desarrollo de fases de los ciclos biogeoquímicos, bioestructura y el metabolismo microbiano, imposibilitando el crecimiento de las plantas, al no permitir las condiciones para que estas puedan tomar los nutrientes que necesitan del suelo; en el caso de su acumulación en las aguas disminuye el contenido de oxígeno, impide el ingreso de luminosidad solar, afecta procesos de intercambio de oxígeno y otros gases con la atmósfera y, cambia el pH y potencial #[em redox] de este cuerpo.

    p.mt-5(data-aos="fade-up") Este tipo de problemáticas ambientales originan efectos adversos sobre el ecosistema (como se resume en la tabla 2), debido a la naturaleza del petróleo y sus derivados, ya que el petróleo “contiene compuestos químicos tóxicos que producen daños a plantas, animales y humanos, pero principalmente sobre las poblaciones de microorganismos, los cuales representan parte importante del ecosistema y son claves para los procesos biogeoquímicos” (Vasudevan y Rajaram, 2001 citados por Zamora, Ramos y Arias, 2011).

    p.p-1.mt-5(style="border-left:5px #31B7DC solid;margin-left:10px;") &nbsp;&nbsp; #[strong Tabla 2] Riesgos de algunos tipos de hidrocarburos sobre la salud y el ambiente

    .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
      table(style="min-width:100%")
        caption(style="background-color:#F8F8F8;font-weight:500;") Nota: Adaptado del texto “El suelo y el petróleo” (Barois, 2018).
        thead(style="border:none")
          th.text-white(style="width:30%;background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Tipo
          th.text-white(style="width:40%;background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Hidrocarburo
          th.text-white.text-center(style="width:50%;background-color:#1A7B96;border:none;padding:15px;font-size:17px") Riesgo
        tbody
          tr(style="background-color:#EBEFF6;")
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              h5 Alifáticos
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Alcaos
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Alquenos
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Alquinos
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Cicloalcanos
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Cicloalquenos
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Acumulable en tejido graso, asfixiante, depresor del sistema nervioso central.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Extremadamente inflamables, riesgo de asfixia.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Sin evidencias.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Toxicidad en organismos acuáticos, alta persistencia.
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Tóxico para organismos acuáticos.
          tr(style="background-color:#F7FDFF;")
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              h5 Aromáticos
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
              p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Aromáticos Policíclicos
            td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;")
                  p #[img(src="@/assets/curso/tema1/12.svg" style="max-width:10px;display:inline;")] Cancerígenos probados en humanos, pero con pruebas insuficientes en animales.

    p.mt-4(data-aos="fade-up") En la figura 4 se pueden apreciar los principales derivados de la industria petroquímica que pueden generar problemas de contaminación en el ambiente.

    p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 4.] Principales procesos y productos derivados de la industria petrolera
    figure
      img(src="@/assets/curso/tema1/16.png" data-aos="fade-up")
    figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado del texto “El suelo y el petróleo” (Barois, 2018).

    h3.mt-5(data-aos="fade-up") Plaguicidas

    p.mt-4(data-aos="fade-up") Es el término aceptado para denotar a los productos agroquímicos utilizados para proteger los cultivos frente al ataque de parásitos y otros organismos denominados plagas. Según el organismo contra el que funcionen se les da el nombre de herbicidas para combatir “malezas”, insecticidas para insectos, fungicidas, nematicidas y rodenticidas, si su efecto es contra hongos, nemátodos o roedores, respectivamente.
    p.mt-3(data-aos="fade-up") Una forma de clasificarlos según su composición puede ser:

    .row.mt-4
      .col-lg-6
        ul.lista-ul.mt-3
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Halogenados.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Organofosforados.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Carbamatos.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Derivados de la urea.
        p.mt-4(data-aos="fade-up") En la tabla 3 se presenta la clasificación dada por la Organización Mundial de la Salud (OMS) según la toxicidad (expresada por el parámetro llamado dosis letal media – DL50).
      .col-lg-6
        p.p-1(style="border-left:5px #31B7DC solid;margin-left:10px;") &nbsp;&nbsp; #[strong Tabla 3] Clasificación de plaguicidas según nivel de toxicidad

        .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
          table(style="min-width:100%;")
            caption(style="background-color:#F8F8F8;font-weight:500;") Nota. Adaptado de OMS, 1975 (Del Puerto, 2014).
            thead(style="border:none")
              th.text-white(style="background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Categoría Toxicidad
              th.text-white(style="background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Tipo toxicológico
              th.text-white.text-center(style="background-color:#1A7B96;border:none;padding:15px;font-size:17px") DL#[sub 50] ( mg plaguicida/kg de masa corporal)
            tbody
              tr(style="background-color:#EBEFF6;")
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Extremada 
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") I
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") &lt; 5.0
              tr(style="background-color:#F7FDFF;")
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Alta
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") II
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") 5.0-50.0
              tr(style="background-color:#EBEFF6;")
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Moderada 
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") III
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") 50.0-500.0
              tr(style="background-color:#F7FDFF;")
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Ligera
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") IV
                td.text-center(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") &lt;  500.0

    p.mt-5(data-aos="fade-up") Los impactos negativos causados al ambiente por los plaguicidas se encuentran en función de su toxicidad y su persistencia; y la predicción de estos efectos se logra gracias a rigurosos estudios, basados en la cinética química y en las propiedades innatas de los componentes ambientales, tales como el coeficiente de absorción del suelo o la solubilidad.

    .row.mt-4
      .col-lg-6
        .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
          .p(data-aos="fade-up") El incremento en el uso de plaguicidas se presentó en la década de los 60 con la llamada “Revolución verde”.
          p.mt-4(data-aos="fade-up") Esta fue una iniciativa para mejorar la productividad mundial de los cultivos, basado en la aplicación de químicos para volverlos más resistentes a las inclemencias del clima y los efectos de las plagas.
        p.mt-3(data-aos="fade-up") En la figura 5 se presentan las diferentes vías de ingreso de los plaguicidas en la cadena trófica, mientras que en animales y humanos las principales rutas de acceso se dan por procesos de inhalación, ingestión o vía dérmica y entre sus efectos adversos, Del Puerto, Suárez y Palacio (2014) citan los siguientes:
        ul.lista-ul.mt-3
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Aparición de tumores.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Inhibición reproductiva.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Afección del sistema inmune.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Disfunción hormonal.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Efectos teratogénicos.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Efectos mutagénicos.

      .col-lg-6
        p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 5.] Vías de ingreso de plaguicidas al ecosistema
        figure
          img(src="@/assets/curso/tema1/17.svg" data-aos="fade-up")
        figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de (Del Puerto, 2014).

    Separador
    .titulo-segundo.mt-5
      h2#t_1_3 1.3  Toma de muestras

    p(data-aos="fade-up") Las muestras ambientales se pueden tomar sobre diferentes componentes del ecosistema (suelo, agua, aire, residuos, sedimentos, vegetación) y consiste en el proceso que captura, almacena, transporta y analiza muestras representativas del componente en estudio, con el fin de que estas permitan determinar la información suficiente que permita cuantificar la concentración de los contaminantes con la mayor precisión y confiabilidad posible.

    ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/18.svg' alt='' data-aos="fade-in")

      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="54%" y="40%" numero="")
        .h4.text-center(style="color:#89EBD4;") Importancia
        p.mt-3.text-white.text-center Radica en que, de la toma de muestras depende el éxito en la veracidad de los resultados obtenidos.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="52%" y="55%" numero="")
        .h4.text-center(style="color:#89EBD4;") Errores en el muestreo
        p.mt-3.text-white.text-center Derivan en errores en la información obtenida, para minimizar eso, existe una serie de procedimientos estadísticos que deben ser aplicados y seguidos con rigurosidad y que se refieren al tipo de muestreo a utilizar, el correcto tamaño de la muestra y otras consideraciones que se deben especificar en el plan de muestreo.

    p.mt-4(data-aos="fade-up") Para complementar un poco más este aspecto se recomienda leer el artículo sobre muestreo estadístico “#[strong(style="color:#22AFD6;") El protocolo de investigación III: la población de estudio]”, que se encuentra en el material complementario.

    h3.mt-5(data-aos="fade-up") Tipos de muestreo
    p.mt-4(data-aos="fade-up") Para realizar cualquier tipo de estudio que requiera apoyo estadístico se debe obtener información que represente lo que sucede en todo el universo de estudio; obtener información de todos los elementos de ese universo sería un proceso desgastante y muy extenso (esto se denomina censo), que en muchos casos no es posible, por lo que se debe tomar una muestra, es decir, obtener información a partir de solo una parte del universo de estudio, pero que represente lo que sucede en la totalidad de este. La forma de obtención de la muestra se llama muestreo y puede ser de diferentes tipos:

    .row.mt-5
      .col-lg-6(style="padding:0px;")
        .p-5(style="background-color:#0F2771;height:100%;border-bottom-left-radius:15px;border-top-left-radius:15px")
          figure.text-center
            img(src="@/assets/curso/tema1/19.svg" style="display:inline;max-width:200px;")
          h3.mt-5.text-center.text-white(data-aos="fade-up") Muestreo probabilístico
          p.text-white.text-center.mt-3(data-aos="fade-up") Todos los elementos de la población tienen la misma posibilidad de hacer parte de la muestra a tomar, asegurando de esta forma, la representatividad de la misma, y se conocen como muestreo aleatorio.
      .col-lg-6(style="padding:0px;")
        .p-5(style="background-color:#1A7B96;height:100%;border-bottom-right-radius:15px;border-top-right-radius:15px")
          figure.text-center
            img(src="@/assets/curso/tema1/20.svg" style="display:inline;max-width:200px;")
          h3.mt-5.text-center.text-white(data-aos="fade-up") Muestreo no probabilístico
          p.text-white.text-center.mt-3(data-aos="fade-up") También conocido como muestreo orientado; en este, se seleccionan los elementos que siguen ciertos criterios definidos, basados principalmente en la experiencia del evaluador.

    p.mt-4(data-aos="fade-up") Los tipos más utilizados de muestreo aleatorio se describen en la siguiente tabla:

    .col-lg-10.mt-5.m-auto
      p.p-1(style="border-left:5px #31B7DC solid;margin-left:10px;") &nbsp;&nbsp; #[strong Tabla 4] Tipos de muestreos probabilísticos de mayor uso
        .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
          table(style="min-width:100%;")
            thead(style="border:none")
              th.text-white(style="width:25%;background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Tipo de muestreo
              th.text-white(style="width:75%;background-color:#1A7B96;border:none;text-align:left;padding:15px;font-size:17px") Descripción
            tbody
              tr(style="background-color:#EBEFF6;")
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") #[h5 Muestreo Aleatorio simple] 
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Es el tipo de muestreo más sencillo, se utiliza cuando las condiciones del sitio de estudio son homogéneas, por lo que no se genera sesgo a partir del establecimiento de los puntos de muestreo.
              tr(style="background-color:#F7FDFF;")
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") #[h5 Muestreo sistemático]
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Consiste en ubicar de forma aleatoria un punto de muestreo, el cual se tomará como referencia para localizar todos los otros puntos a una distancia uniforme. #[br] Este procedimiento es de mucha aplicación cuando no se conoce cómo es la distribución espacio-temporal de los contaminantes en el área de estudio (se desconoce si existe homogeneidad o heterogeneidad).
              tr(style="background-color:#EBEFF6;")
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") #[h5 Muestreo compuesto] 
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Consiste en la toma y posterior mezcla de varias muestras, para la obtención de una sola, de la cual se determinan los parámetros de las sustancias contaminantes. Para utilizar este tipo de muestreo es necesario garantizar que los sitios presentan una altísima uniformidad en la distribución espacio-temporal de los contaminantes. 
              tr(style="background-color:#F7FDFF;")
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") #[h5 Muestreo estratificado]
                td(style="padding:20px;border:none;border-right:1px #AFAFAF solid;") Se utiliza cuando las condiciones del componente estudiado son heterogéneas, es decir, que la presencia de contaminantes está en función de otras características del suelo o agua como pendiente, pH, contenido de materia orgánica, profundidad, etc. #[br] Esas fuentes de variabilidad presentan homogeneidad en su interior, por tal razón son el criterio para formar diferentes subgrupos o estratos. Posteriormente, se determina cuál es la proporción (porcentaje) de cada subgrupo y se reparte el tamaño de muestra con esa misma proporción.

    h3.mt-5(data-aos="fade-up") Tamaño de muestra

    .row.mt-5
      .col-lg-6
        .cajon-b.cajon-b2.color-primario.p-3
          p.mb-0(data-aos="fade-up") Es el número de muestras a tomar en un lugar de estudio o el tamaño de esta, es uno de los aspectos más importantes dentro de una toma de muestras, ya que este tamaño debe ser adecuado para la determinación del parámetro de estudio y la precisión o confiabilidad de este; debe considerar varios aspectos como:
        ul.lista-ul.mt-4
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; El sesgo.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; El nivel de confianza (α).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; El error muestral (d).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; La varianza poblacional (p*q).
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/21.svg" data-aos="fade-left")

    p.mt-4(data-aos="fade-up") El error muestral y la varianza poblacional se obtienen tras una primera toma de muestras, y a partir de este error se calcula el tamaño de muestra adecuado, el cual permitirá disminuir el error de muestreo; no obstante, en algunos casos no hay posibilidad de realizar ese muestreo previo y debe calcularse el tamaño de muestra a partir de especulaciones, para ello se recomienda adoptar algunos valores en esos parámetros de la siguiente forma:

    ul.lista-ul.mt-4
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Se asume la máxima varianza posible, esta se da cuando la probabilidad de que un evento suceda o no es del 50 %, y por ende la varianza (p*q)= 0,5*0,5 = 0,25
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Se recomienda que el error muestral (d) se estime por debajo del 10 % (0.1).
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Se recomienda trabajar con un nivel de confianza del 90 % o 95 %; esto significa que el valor de Zα es de 1.64 o 1.96 respectivamente.
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Es posible que se conozca el tamaño total del conjunto universo (N) y se pueda estimar el tamaño de muestra (n) a partir de este, utilizando la siguiente fórmula:

    .col-md-4.m-auto.mt-3
      figure
        img(src="@/assets/curso/tema1/22.svg" data-aos="fade-up")

    ul.lista-ul.mt-4
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.5rem 1rem 0.5rem 1rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Pero también se puede presentar el caso en que se desconozca el tamaño total del universo, en este caso se utiliza la siguiente fórmula:
    .col-md-3.m-auto.mt-3
      figure
        img(src="@/assets/curso/tema1/23.png" data-aos="fade-up")

    h3.mt-5(data-aos="fade-up")  Plan de muestreo
    p.mt-4(data-aos="fade-up") Es el documento que permite planificar y ejecutar de manera adecuada el muestreo, este documento permite trazar toda la ruta desde los objetivos del muestreo, pasando por la forma de obtención de resultados, los análisis a realizar y la posterior aceptación de estos según el cumplimiento de criterios estadísticos establecidos (intervalos de aceptación, pruebas de hipótesis, etc.).
    p.mt-3(data-aos="fade-up") La metodología del muestreo debe especificar los siguientes aspectos:

    .col-lg-9.m-auto
      figure
        img(src="@/assets/curso/tema1/24.svg" data-aos="fade-up")

    Separador
      
    .titulo-segundo.mt-5
      h2#t_1_4 1.4  Fundamentos de biorremediación de suelos y aguas
    p(data-aos="fade-up") Los crecientes problemas de contaminación y deterioro ambiental generados de la alta utilización de sustancias químicas y los residuos generados de diferentes actividades, y cuyas características más preocupantes son su baja biodegradabilidad y alta toxicidad han despertado la atención de la comunidad en general, debido a que sus efectos pueden llegar a ser letales no solo para el ser humano, sino para todo el ecosistema como tal.

    .bloque-texto-g.color-secundario.p-3.mt-4.col-lg-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/25.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5.d-block(data-aos="fade-up") ¿Cómo empieza a utilizarse el término biorremediación?
        p.mb-0.mt-4(data-aos="fade-up") Durante muchos años se desarrollaron técnicas físicas y químicas para combatir estos tipos de contaminación, a esto se le denominó remediación; a partir de los años 80 y gracias al rápido crecimiento de la biotecnología se empezó a utilizar el conocimiento que se adquiría sobre el metabolismo de los microorganismos, para experimentar con ellos la degradación natural de algunos compuestos contaminantes.

    p.mt-5(data-aos="fade-up") A medida que avanzó el interés y el desarrollo por esta nueva rama de la biotecnología se empezaron a estudiar los resultados de emplear mezclas de microorganismos, enzimas obtenidas a partir de ellos e incluso, el uso de organismos más complejos como las plantas, y gracias al crecimiento de la ingeniería genética en el desarrollo de organismos genéticamente modificados (OGM) o transgénicos se han incrementado las aplicaciones en la biorremediación, al generar en laboratorio especies con genes de otros organismos que le permiten ser más eficientes en los procesos de descontaminación.

    p.mt-3(data-aos="fade-up") Para complementar estos fundamentos ver el video “#[strong(style="color:#22AFD6;") Introducción a la biorremediación]” de la Universidad Abierta y a Distancia de México, que se encuentra en el material complementario.

    h4.mt-5(data-aos="fade-up") Tipos de biorremediación

    p.mt-3(data-aos="fade-up") Existen tres tipos basados en el organismo o sustancia principal del proceso, de la siguiente forma:

    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones--borde.p-4(titulo="Remediación microbiana")
        h4.text-white Remediación microbiana
        p.text-white Consiste en la utilización de microorganismos para combatir la contaminación basados en el metabolismo de estos, lo que les permite transformar moléculas muy complejas e incluso tóxicas en moléculas más pequeñas o con menor grado de toxicidad. Este procedimiento permite utilizar diferentes tipos de microorganismos, ya sean autóctonos (los que naturalmente habitan en la zona o medio contaminado) o introducidos (provienen de otros medios naturales o de laboratorio, pero su metabolismo les permite adaptarse al sitio contaminado y les otorga especificidad para degradar la sustancia que está generando la situación problema).
      .tarjeta.color-acento-botones--borde.p-4(titulo="Remediación enzimática")
        h4.text-white Remediación enzimática
        p.text-white En este caso no se utilizan directamente los microorganismos, sino las enzimas o complejos enzimáticos de estos, las cuales son actualmente producidas en laboratorios o empresas biotecnológicas a escalas industriales y comercializadas de forma masiva.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Remediación con plantas")
        h4.text-white Remediación con plantas
        p.text-white Proceso conocido como fitorremediación y consiste en el uso de plantas para combatir problemas de contaminación, está basada en la capacidad de algunas especies vegetales (muchas de ellas de uso común, como por ejemplo, el girasol) para absorber, translocar, transformar, acumular e incluso utilizar ciertas sustancias contaminantes de diferente naturaleza. La fitorremediación es un campo relativamente nuevo, por lo que aún se encuentra en pleno desarrollo; no obstante, es una alternativa que presenta varias ventajas frente a otros procesos, como por ejemplo, el bajo costo económico de su aplicación o el aporte paisajístico al sitio degradado.

    p.mt-4(data-aos="fade-up") Y, dependiendo del mecanismo por el cual las plantas realizan la remediación se le da diversos nombres y tienen sus propios procesos.

    ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/26.svg' alt='' data-aos="fade-in")

      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="70%" y="26%" numero="")
        .h4.text-center(style="color:#89EBD4;") Fitovolatilización
        p.mt-3.text-white.text-center Absorción y transformación de sustancias contaminantes y posterior liberación  a la atmósfera de formas menos tóxicas, por medio de la evapotranspiración. #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] mercurio y solventes clorados.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="65%" y="47%" numero="")
        .h4.text-center(style="color:#89EBD4;") Fitodegradación
        p.mt-3.text-white.text-center Tolerancia a sustancias contaminantes, reducción de su movilidad y disminución de transferencia a otros medios. #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] residuos de minería, fenoles y compuestos clorados.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="65%" y="61%" numero="")
        .h4.text-center(style="color:#89EBD4;") Fitoestimulación
        p.mt-3.text-white.text-center Uso de exudados  de la raíz que promueven la aparición y  crecimiento de microorganismos remediadores (bacterias y hongos). #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] derivados del petróleo y poliaromáticos como benceno y tolueno.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="60%" y="74%" numero="")
        .h4.text-center(style="color:#89EBD4;") Rizofiltración
        p.mt-3.text-white.text-center Las raíces de las plantas absorben, concentran y degradan contaminantes tomados desde efluentes líquidos. #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] metales pesados y compuestos orgánicos.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="41%" y="80%" numero="")
        .h4.text-center(style="color:#89EBD4;") Fitoestabilización
        p.mt-3.text-white.text-center Tolerancia a sustancias contaminantes, reducción de su movilidad y disminución de transferencia a otros medios. #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] residuos de minería, fenoles y compuestos clorados.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="33%" y="55%" numero="")
        .h4.text-center(style="color:#89EBD4;") Fitoextracción
        p.mt-3.text-white.text-center Concentración de metales en hojas y raíces. #[br] #[strong(style="color:#22AFD6 !important;") Contaminantes tratados:] Metales pesados




  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    imagen_info1: true,
    imagen_info2: false,
    imagen_info3: false,
    imagen_info4: false,
    imagen_info5: false,
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
.bloque-texto-g.color-secundario
    background-color: #1a7b96
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
    text-transform: lowercase
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
.pasos-a.color-acento-botones .pasos-a__circle div:after
  content: ''
  position: absolute
  background-color: #0a6184
  left: -52%
  z-index: -1
  border-radius: 50%
  padding: 107%
  top: 4%
.pasos-a.color-acento-botones .pasos-a__circle div:before
  content: ''
  position: absolute
  background-color: #0c4371
  left: -94%
  z-index: -2
  border-radius: 50%
  padding: 150%
  top: -11%
</style>
