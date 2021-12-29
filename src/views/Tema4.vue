<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Conceptos de seguridad y salud en el trabajo  

    figure
      img(src="@/assets/curso/tema4/1.svg" data-aos="fade-up")

    .cajon-b.cajon-b2.color-primario.p-3.mt-5
      p.mb-0(data-aos="fade-up") Es la disciplina encargada de promocionar la salud de los trabajadores, así como la aplicación de técnicas para prevenir y disminuir los accidentes y enfermedades causadas por las condiciones de trabajo. Para garantizar este principio, las organizaciones de todo tipo deben implementar un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

    p.mt-3(data-aos="fade-up") El SG-SST consiste en una herramienta de planificación y administración, basada en el ciclo de Deming (ciclo PHVA y de mejora continua), lo cual incluye el establecimiento de una política, definición de objetivos y metas, identificación y evaluación de riesgos, formulación y aplicación de programas, evaluación y seguimiento, auditorías y acciones de mejora que permitan el reconocimiento, evaluación y control de los riesgos que puedan afectar la seguridad y la salud en los espacios laborales.

    .col-lg-7.m-auto.mt-5
      h5(data-aos="fade-up") El Decreto 1072 de 2015 en el Libro 2, parte 2, Título 4, Capítulo 6 dicta:
      .bloque-texto-d.color-secundario.p-4
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left(data-aos="fade-right")
          p(data-aos="fade-up") El sistema de gestión aplica a todos los empleadores públicos y privados, los trabajadores dependientes e independientes, los trabajadores cooperados, los trabajadores en misión, los contratantes de personal bajo modalidad de contrato civil, comercial o administrativo, las organizaciones de economía solidaria y del sector cooperativo, las empresas de servicios temporales, las agremiaciones u asociaciones que afilian trabajadores independientes al Sistema de Seguridad Social Integral; las administradoras de riesgos laborales; la Policía Nacional en lo que corresponde a su personal no uniformado y al personal civil de las Fuerzas Militares.
          i.fas.fa-quote-right(data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Para ampliar el tema con relación a las implicaciones de los problemas de la contaminación ambiental sobre la salud humana lea el artículo “#[strong(style="color: #22AFD6 !important;") La contaminación ambiental como factor determinante de la salud]” de la Revista Española de Salud Pública que se encuentra en el material complementario.

    br
    br
    .titulo-segundo.mt-5
      h2#t_4_1 4.1  Tipos de riesgos
    .row
      .col-lg-6
        p(data-aos="fade-up") Es importante tener claro que técnicamente riesgo es diferente a peligro, desde el punto de vista que el riesgo denota la probabilidad de que ocurra un evento desafortunado, mientras que peligro es la inminencia de ocurrencia, es decir, que un riesgo al que no se le preste la debida atención se convierte en un peligro. Estos riesgos pueden incrementarse o minimizarse, dependiendo de las medidas de intervención que se tomen sobre el factor de riesgo (equipo, herramienta, persona o sustancia generadora del riesgo) o del comportamiento del trabajador frente a ese factor de riesgo.
        p.mt-3(data-aos="fade-up") Dependiendo de la actividad económica y del tipo de labor que se desempeñe dentro de una organización o en la ejecución de las actividades propias de una profesión, el riesgo según su magnitud se puede clasificar de la siguiente forma:

        ul.lista-ul.mt-4
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Riesgo máximo (Clase V).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Riesgo alto (Clase IV).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Riesgo medio (Clase III).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Riesgo bajo (Clase II).
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Riesgo mínimo (Clase I).
      .col-lg-6
        figure
          img(src="@/assets/curso/tema4/2.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") De esta clasificación dependen diferentes elementos como el valor de cotización pagado por los empleadores a las administradoras de riesgos laborales por ejemplo. Los factores de riesgo a su vez se clasifican según la naturaleza del riesgo que portan o representan, y se pueden clasificar en los grupos que se visualizan en la siguiente figura.

    .col-lg-9.m-auto.mt-5
      p.p-1.mt-4(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 9.] Clasificación de factores de riesgo
        figure
          img(src="@/assets/curso/tema4/3.png" data-aos="fade-up")
        figcaption(style="background-color:#DCEBEF;font-weight:400;") Adaptado de Clasificación de los factores de riesgo. Salud ocupacional (s.f). #[a(href="http://saludocupacionalxd.blogspot.com/2015/04/clasificacion-de-los-factores-de-riesgos.html" target="_blank") http://saludocupacionalxd.blogspot.com/2015/04/clasificacion-de-los-factores-de-riesgos.html]

    p.mt-5(data-aos="fade-up") Para el caso de las actividades desarrolladas en los procesos de biorremediación, toman mayor relevancia los factores de riesgo pertenecientes al grupo denominado contaminantes del ambiente, al que pertenecen los generadores de riesgo físico, químico y biológico.

    figure.mt-4
      img(src="@/assets/curso/tema4/4.svg" data-aos="fade-up")

    Separador

    .titulo-segundo.mt-5
      h2#t_4_2 4.2  Medidas de manejo y control de riesgos 

    p(data-aos="fade-up") La gestión de la seguridad y la salud en una actividad o en una organización parte de la identificación de riesgos y peligros y su posterior control en los sitios de trabajo, este procedimiento es conocido como evaluación de los riesgos y consiste en identificar e implementar medidas para el manejo y control de las situaciones, equipos o sustancias que pueden generar accidentes o enfermedades a los trabajadores.

    .bloque-texto-a.color-secundario.p-4.mt-5.col-lg-9.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h4.mb-0(data-aos="fade-right" style="color:#00FFE6;") En el caso de la biorremediación se debe considerar el conocimiento de las fichas técnicas, hojas de seguridad y tarjetas de emergencia de los productos químicos, insumos biológicos y los equipos utilizados. 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-up" ) #[strong(style="color:#22AFD6 !important;") Lo que permite conocer los peligros derivados de su uso y el] estudio de las estadísticas de reportes históricos de accidentes, enfermedades e incidentes, ya que esto permite reconocer todos los riesgos y tomar medidas de manejo y control más eficientes.

    p.mt-5(data-aos="fade-up") Una vez identificados los riesgos se debe proceder a su valoración y adopción de medidas de prevención, mitigación y control. Dentro de las medidas de bioseguridad se destacan el uso de elementos de protección personal (EPP), medidas de orden, aseo y limpieza de los puestos de trabajo, manejo adecuado de residuos y los respectivos planes de emergencia y contingencia.

    h3.mt-5(data-aos="fade-up") Uso de elementos de protección y bioseguridad

    p.mt-4(data-aos="fade-up") Todo dispositivo diseñado para la prevención total o parcial de los efectos negativos sobre la salud del trabajador se denomina Elemento de Protección Personal (EPP), estos EPP son diseñados para su uso en diferentes partes del cuerpo y con diferentes grados de eficiencia, como se observa en la figura 10.

    .bloque-texto-a.color-secundario.p-4.mt-5.col-lg-9.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h4.mb-0(data-aos="fade-right" style="color:#00FFE6;") En el caso de las actividades propias de la biorremediación, donde gran parte del trabajo se realiza manipulando sustancias peligrosas, es importante acatar las medidas y recomendaciones para el manejo de estas sustancias y la utilización de los EPP necesarios.
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-up" ) Con el fin disminuir principalmente riesgos biológicos y químicos (infecciones, agentes tóxicos, cancerígenos, mutagénicos, teratogénicos, explosivos, inflamables, oxidantes, etc., por contacto con insumos o sustratos contaminados) generados en las labores de trabajo de campo y laboratorio; por lo que es indispensable el uso de guantes, mascarillas, cofia, gafas, botas, batas de aislamiento de manga larga.

    .col-lg-9.m-auto.mt-5
      p.p-1.mt-4(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 10.] EPP en labores de laboratorio
        figure
          img(src="@/assets/curso/tema4/5.svg" data-aos="fade-up")
        figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de Instituto Nacional de capacitación y consultoría CNV (s.f.).

    p.mt-5(data-aos="fade-up") Las medidas de prevención y control específicas para el riesgo de tipo biológico se conocen como medidas de bioseguridad y su principal objetivo es evitar la dispersión de los agentes biológicos contaminantes en el lugar de trabajo y fuera de este, disminuyendo el factor de riesgo al trabajador, a la población y al ecosistema. Incluye medidas como:

    ul.lista-ul.mt-4.col-lg-9.m-auto
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; #[strong(style="color:#22AFD6 !important;") La contención] para evitar la salida de agentes infecciosos de su lugar de origen.
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; #[strong(style="color:#22AFD6 !important;") La bioprotección] relacionada con la custodia y manejo de agentes patógenos y toxinas.

    h3.mt-5(data-aos="fade-up")  Medidas de orden, aseo y limpieza

    p.mt-4(data-aos="fade-up") Permiten mantener solo lo necesario en los puestos de trabajo, eliminando lo innecesario, clasificando y ubicando apropiadamente los elementos de trabajo y disponiendo oportuna y adecuadamente los residuos originados en la ejecución de las funciones propias de un puesto de trabajo, lo que permite tener mejores condiciones de seguridad, incrementar la calidad y la eficiencia en los procesos inherentes al trabajo realizado. Estas medidas incluyen también la optimización en etapas de almacenamiento y transporte.

    .col-lg-10.m-auto.mt-4
      .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
        .p(data-aos="fade-up") En el caso de los procesos de biorremediación en laboratorio se debe realizar un adecuado alistamiento de los instrumentos y materiales a utilizar, así como el correcto y oportuno proceso de limpieza de estos una vez usados, también ser muy correctos con la gestión de los residuos generados y conocer el protocolo para procesos de limpieza en caso de derrames de los sustratos o insumos utilizados en los procesos.

    p.mt-5(data-aos="fade-up") Dentro de los programas de orden, aseo y limpieza más comunes, destaca el llamado #[strong 5s], el cual fue clave para la recuperación de la productividad en las organizaciones japonesas en la etapa posguerra, su denominación deriva de las palabras que representan los cinco pasos o etapas a desarrollar:

    ImagenInfografica.color-secundario.mt-4(data-aos="fade-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/6.svg' alt='' data-aos="fade-in")

      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="7%" y="25%" numero="")
        .h4.text-center(style="color:#89EBD4;") Nuevas etapas
        p.mt-3.text-white.text-center En los últimos años y debido al éxito de estos programas, varias organizaciones han optado por adicionar nuevas fases. 
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="16%" y="9%" numero="")
        .h4.text-center(style="color:#89EBD4;") Shikari = Constancia
        p.mt-3.text-white.text-center Mantenerse firme en lo que se hace
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="22%" y="20%" numero="")
        .h4.text-center(style="color:#89EBD4;") Shitsukoku = Compromiso
        p.mt-3.text-white.text-center Cumplir con lo pactado
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="22%" y="34%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seishoo = Coordinación
        p.mt-3.text-white.text-center Armonizar el ritmo y tiempo de aplicación de tareas.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="13%" y="44%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seido = Sincronización
        p.mt-3.text-white.text-center Existencia de procedimientos y normas que indiquen lo que cada persona debe realizar.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="72%" y="9%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seiri = Clasificar
        p.mt-3.text-white.text-center Separar los elementos en necesarios e innecesarios.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="76%" y="22%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seiton = Ordenar
        p.mt-3.text-white.text-center Ubicar todo en un lugar determinado.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="80%" y="36%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seiso = Limpiar
        p.mt-3.text-white.text-center Realizar la limpieza del puesto.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="76%" y="49%" numero="")
        .h4.text-center(style="color:#89EBD4;") Seiketsu = Estandarizar
        p.mt-3.text-white.text-center Crear normas para las tareas de limpieza y orden.
      .tarjeta.color-acento-botones.p-5(style="border-radius:0px;" x="69%" y="57%" numero="")
        .h4.text-center(style="color:#89EBD4;") Shitsuke = Disciplina
        p.mt-3.text-white.text-center Convertir las reglas en hábitos.

    h3.mt-5(data-aos="fade-up") Manejo de residuos
    p.mt-4(data-aos="fade-up") Un residuo es considerado como toda aquella sustancia o material, independiente de su estado, sobrante de cualquier tipo de actividad y que puede tomar cualquier rumbo después de haber cumplido su vida útil. Los residuos peligrosos por su parte se definen como:

    .col-lg-8.m-auto.mt-3
      .bloque-texto-d.color-secundario.p-4(style="border:none;")
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left(data-aos="fade-right" style="display:contents;")
          h5(data-aos="fade-up") &nbsp;&nbsp;&nbsp; Aquellos que por sus características (corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas) pueden causar riesgo o daño para la salud humana y el ambiente. Asimismo, se considera residuo o desecho peligroso los envases, empaques y embalajes que hayan estado en contacto con ellos.
          div(style="text-align:right;display:block")
            p.text-small(style="display:inline;") (Decreto 4741 de 2005) 
            i.fas.fa-quote-right(data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Dentro de toda actividad se generan residuos de todo tipo, las actividades ambientales y específicamente la biorremediación, no es la excepción, con la particularidad que la mayoría de los residuos generados en estos procesos son de tipo peligroso (#[em respel]), lo que les confiere particularidades en su manejo:

    div.mt-3(v-show="imagen_info1" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              h4.text-white Residuos líquidos
              p.text-white(data-aos="fade-up") Los que no presenten contaminación por presencia de materiales peligrosos pueden ser vertidos por el alcantarillado común y ser tratados como aguas residuales domésticas;  sin embargo, los que presenten contaminación deben ser almacenados y presentados como residuos peligrosos para que una empresa especializada realice el proceso de recolección, transporte, tratamiento y disposición final como lo establece el Decreto 4741 de 2005, el cual reglamenta todo lo concerniente a #[strong(style="color:#22AFD6 !important;") #[em(style="color:#22AFD6 !important;") Respel]] en Colombia.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema4/7.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button(style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 1 / 3
          button.boton_1(@click="imagen_info2 = true;imagen_info1 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div.mt-3(v-show="imagen_info2" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-4
              h4.text-white Residuos sólidos
              p.text-white(data-aos="fade-up") También se pueden clasificar en ordinarios y especiales, y siguen la misma tendencia de los líquidos, es decir, pueden ser dispuestos sin problema alguno de acuerdo con la clasificación adoptada a nivel internacional, para que  aquellos que sean potencialmente aprovechables puedan ser recuperados y reincorporados a los procesos de manera fácil; y aquellos que no se puedan aprovechar, ya porque no tienen potencial de recuperación o porque presenten características de peligrosidad, puedan ser recolectados, tratados y dispuestos de manera adecuada.

            .col-lg-8.row
              .col-lg-6
                figure.text-center
                  img(src="@/assets/curso/tema4/8.svg" data-aos="fade-up" style="display:inline;")
              .col-lg-6
                 figure.text-center
                  img(src="@/assets/curso/tema4/9.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info1 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 2 / 3
          button.boton_1(@click="imagen_info3 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div.mt-3(v-show="imagen_info3" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              h4.text-white Residuos peligrosos
              p.text-white(data-aos="fade-up") Se han convertido en una de las problemáticas más relevantes a nivel mundial, debido a los impactos negativos causados al ambiente y la salud de los seres vivos. #[br] En la generación de #[strong(style="color:#22AFD6 !important;") #[em(style="color:#22AFD6 !important;") Respel]] a escala mundial, Colombia se encuentra en una escala intermedia, y a nivel local es de prestar atención a los departamentos con industria petrolera, ya que de ella provienen la mayoría de los #[strong(style="color:#22AFD6 !important;") #[em(style="color:#22AFD6 !important;") Respel]] en el país, acompañado de metales pesados y demás compuestos orgánicos. #[br] Esta situación representa un inmenso campo de acción para disciplinas como la #[strong biorremediación], ya que son justamente este tipo de sustancias, con alto grado de toxicidad,  el objeto de estudio de sus técnicas.

            .col-lg-7
              figure.text-center
                img(src="@/assets/curso/tema4/10.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info2 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 3 / 3
          button(style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    h3.mt-5(data-aos="fade-up")  Planes de emergencia

    p.mt-4(data-aos="fade-up") Es el conjunto de procedimientos necesarios para evitar y atender daños materiales y humanos ante una situación que se considere como emergencia, para ello es necesario que las personas respondan rápida y efectivamente ante tal situación.

    .bloque-texto-g.color-secundario.p-3.mt-5.col-lg-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-up") Es un documento de uso interno de las organizaciones, donde se plasman los procedimientos definidos para prevenir accidentes de cualquier tipo en situaciones extremas y atípicas de condiciones de seguridad y salud en el trabajo.
        br
        br
        p.mt-3.mb-0(data-aos="fade-up") Los procedimientos establecidos en este documento deben dar respuesta al ¿qué? ¿quién? ¿cómo? ¿cuándo? y ¿dónde? de las medidas adoptadas para la prevención y control de las potenciales emergencias que se pueden presentar en un momento dado. (Incendios, riesgos de orden público, exposición a contaminantes químicos o biológicos, explosiones, terremotos, etc.).

    p.mt-5(data-aos="fade-up") Dentro de las actividades de implementación más relevantes están las capacitaciones y los simulacros periódicos, los cuales deben arrojar datos cuantificables de tiempo de respuesta, porcentaje de evacuación, cantidad de personas evacuadas en una intervención, etc.
    p.mt-3(data-aos="fade-up") En los planes de emergencia también deben quedar especificadas las funciones y los responsables de cada uno de los diferentes equipos que intervendrán en una emergencia, así como el procedimiento para capacitación de trabajadores propios, contratistas y visitantes.

  
</template>

<script>
export default {
  name: 'Tema4',
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
.bloque-texto-g.color-secundario
    background-color: #1a7b96
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
  bottom: 12%
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
.bloque-texto-d.color-secundario:before
    background-color: #d2eff7
.bloque-texto-d
    border-top: 1px solid #389BB9
.bloque-texto-a.color-secundario
    background-color: #323B60
.bloque-texto-a.color-secundario:before
    background-color: #389BB9
</style>
