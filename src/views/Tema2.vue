<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Cálculos de masa, volumen, caudales y concentraciones

    figure
      img(src="@/assets/curso/tema2/1.png" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Desde el momento en que el hombre se establece en el planeta, siempre ha querido conocer y comprender todos los fenómenos que rigen los procesos en el planeta, esto ha llevado a que se interese por comprender todos los aspectos de la naturaleza, y con ello nace la necesidad de medir los parámetros y sustancias que hacen parte y hacen posible todos esos fenómenos:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zyJuyFxaWpE" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    br
    .mt-5.titulo-segundo
      h2#t_2_1 2.1  Magnitudes fundamentales
    p(data-aos="fade-up") En la medición de una determinada magnitud se debe usar un valor que sirva de referencia y que permita comparar varias mediciones, al cual se le llama unidad de medida. 

    .p-4(style="background-color:#002346;border-top-left-radius:15px;border-top-right-radius:15px;z-index: 2;position: relative;")
      h3.text-center.mb-0(style="color:#15EBD6;" data-aos="fade-up") Magnitudes
    .cont-1(style="border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;")
      div(style="padding:3rem 4rem 1.5rem 4rem;margin-top: -1.3rem;position: relative;z-index: 1;")
        .row.m-auto
          .col-lg-5
            .cont-2.p-3
              p.mb-0.text-white.text-center(data-aos="fade-up") Son toda propiedad que se pueda medir y  pueden ser clasificadas en fundamentales y derivadas, dependiendo de si la medición de estas es independiente o no.
          .col-lg-2
            figure.text-center
              img(src="@/assets/curso/tema2/4.svg" data-aos="fade-up" style="max-width:100px;display:inline;")
          .col-lg-5
            .cont-2.p-3
              p.mb-2.mt-3.text-white.text-center(data-aos="fade-up") El criterio de independencia obedece a si son medibles directamente en un fenómeno físico sin depender de otras medidas.
        p.text-center.mt-3.mb-0(style="color:#C6EDFF;" data-aos="fade-up") #[strong Siete magnitudes fundamentales]
        p.text-center.text-white(data-aos="fade-up") aceptadas actualmente por la sociedad internacional

        .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
          table(style="min-width:100%;")
            thead(style="border:none")
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Magnitud
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Símbolo
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Descripción
            tbody
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Masa
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") M
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Expresa la cantidad de materia en un cuerpo.
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Longitud
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") L
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Determina la distancia existente entre dos puntos en el espacio.
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Tiempo
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") t
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Se usa para medir la duración del cambio de un sistema u objeto desde un  estado inicial a un estado final.
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Temperatura
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") T
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Expresa la energía en forma de cantidad de calor que posee un cuerpo o sistema.
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Corriente eléctrica
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") l
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Corresponde al flujo de electrones a través de un material en una unidad de tiempo.
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Intensidad lumínica
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") J
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Cantidad de flujo luminoso emitido por una fuente en una dirección específica.
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Cantidad de sustancia
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") N
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Se refiere a la cantidad o número de unidades elementales (átomos o moléculas) que existen en una sustancia.

        p.mt-3.text-white.text-center.col-lg-9.m-auto(data-aos="fade-up") A partir de la medida de las magnitudes fundamentales se pueden obtener otras magnitudes llamadas magnitudes derivadas; algunas de ellas resultan muy importantes y muy utilizadas en los procesos de biorremediación.

        h4.mt-4.text-center(data-aos="fade-up" style="color:#15EBD6;") Magnitudes derivadas

        .tabla-a.color-acento-botones.mt-4.col-lg-6.m-auto(style="overflow:clip;")
          table(style="min-width:100%;")
            thead(style="border:none")
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Magnitud
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Símbolo
              th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Descripción
            tbody
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Área
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") A
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") L*L
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Volumen
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Vol.
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") L*L*L o A*L
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Velocidad
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") v
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") L/t
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Caudal
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Q
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Vol/t o A*v
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Aceleración
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") a
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") L/t#[sup 2]
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Densidad
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") D
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") M/vol
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Concentración
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") a
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") N/Vol
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Frecuencia
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") f
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") 1/t
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Fuerza
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") F
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") M*L/t#[sup 2]
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Presión
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") P
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") F/A
              tr(style="background-color:#EBEFF6;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Energía
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") E
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") F*L
              tr(style="background-color:#F7FDFF;")
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") Resistencia eléctrica
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") R
                td(style="padding:10px;border:none;border:1px #AFAFAF solid;text-align:center;") V*l

        p.mt-3.text-white.text-center.mb-0(data-aos="fade-up") El caudal, por ejemplo, se puede definir como la cantidad (volumen) de un líquido que fluye por unidad de tiempo; y es una magnitud muy utilizada en los estudios con corrientes de agua, ya que permite dimensionar la carga contaminante que presenta ese cuerpo de agua.
        p.mt-3.text-white.text-center.mb-0(data-aos="fade-up") Normalmente se expresa en m#[sup 3]/s y es una variable que permite estimar y modelar la dinámica y dispersión de los contaminantes en el agua.

    p.mt-4(data-aos="fade-up") Para el establecimiento de las unidades de medición existen diferentes referencias denominadas sistemas de unidades y consisten en una batería de varias cantidades adoptadas como patrones, que permiten comparar frente a ellos, los valores o cantidades medidos de una propiedad.

    .col-lg-8.m-auto.mt-4
      .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
        .p(data-aos="fade-up") Existen varios sistemas de unidades, los cuales obedecen a determinados criterios en cada caso y tienen equivalencias entre ellos; no obstante, a nivel mundial, partiendo del enfoque científico se ha decidido aceptar el #[strong(style="color:#10A885;") Sistema Internacional de Unidades] como el referente global.

    Separador

    .titulo-segundo.mt-5
      h2#t_2_2 2.2  Conversión de unidades

    p(data-aos="fade-up") Existen varios sistemas de medición de unidades como lo son el Sistema Internacional, Sistema Cegesimal, Sistema Inglés, Sistema Técnico de Unidades, entre otros.
    p.mt-3(data-aos="fade-up") En cada sistema se cuenta con unidades propias para la medición de las magnitudes que se utilizan con frecuencia en diferentes regiones geográficas, pero que representa un inconveniente al momento de estandarizar información o comparar resultados de estudios realizados, entre otros aspectos. 
    p.mt-3(data-aos="fade-up")  Aspectos relacionados a los sistemas de unidades de medición:

    div(v-show="imagen_info1" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              p.text-white(data-aos="fade-up") El #[strong(style="color:#22AFD6 !important;") Sistema Internacional de Unidades] es el aceptado a nivel mundial; sin embargo, se siguen utilizando con frecuencia unidades de los otros sistemas y por lo tanto, se hace necesario conocer algunas de las equivalencias entre dichas unidades, un ejemplo de ello, es la utilización de las unidades del Sistema Inglés para la fabricación y comercialización de tornillería.
              p.mt-3.text-white(data-aos="fade-up") En la siguiente tabla se puede observar la unidad patrón de medición utilizada en  las magnitudes fundamentales de los sistemas de medición Internacional e Inglés: 

            .col-lg-7
              h4.text-center(style="color:#00FF89;") Unidad patrón
              figure.text-center.mt-2
                img(src="@/assets/curso/tema2/5.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button(style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 1 / 4
          button.boton_1(@click="imagen_info2 = true;imagen_info1 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info2" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              p.text-white(data-aos="fade-up") Las unidades de medición deben escribirse correctamente, es decir, usando los símbolos que especifica su sistema, no agregarles otras letras que no van en el símbolo, no pluralizarlos, no escribir letras mayúsculas en símbolos escritos con minúscula o viceversa, por ejemplo,  si el resultado de una medición es 15 metros, la forma correcta de escribirlo es 15 m, no debe escribirse 15 M, ni 15 mt, ni 15 mts.
              p.mt-3.text-white(data-aos="fade-up") En el Sistema Internacional las unidades básicas de cualquier magnitud poseen múltiplos y submúltiplos decimales (potencias de diez), para expresar cantidades más grandes o más pequeñas que la unidad patrón, y se representan en la escritura de la unidad, anteponiéndole prefijos en el nombre de la unidad patrón. En la tabla a continuación, se encuentran los prefijos que representan múltiplos y submúltiplos de unidades patrón del Sistema Internacional.

            .col-lg-7
              figure.text-center.mt-2
                img(src="@/assets/curso/tema2/6.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info1 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 2 / 4
          button.boton_1(@click="imagen_info3 = true;imagen_info2 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info3" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              p.text-white(data-aos="fade-up") Para poder encontrar la correspondencia entre las unidades de un sistema con sus homólogas en otro sistema, se debe utilizar un valor que representa la equivalencia entre ambas, a este valor se le llama factor de conversión. En la siguiente tabla se muestran algunos de los factores de conversión más comúnmente usados para las equivalencias entre unidades del Sistema Inglés y el Sistema Internacional.

            .col-lg-7
              figure.text-center.mt-2
                img(src="@/assets/curso/tema2/7.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info2 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 3 / 4
          button.boton_1(@click="imagen_info4 = true;imagen_info3 = false" style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    div(v-show="imagen_info4" data-aos="fade-in")
      .p-5(style="background-color:#0F1E5A;")
          .row
            .col-lg-5
              p.text-white(data-aos="fade-up") Existen algunas magnitudes que no tienen unidad de medida, se llaman adimensionales, por ejemplo,  el coeficiente de rozamiento, índice de refracción, el número de Reynolds. También existen otras unidades que no obedecen a la regla de múltiplos o submúltiplos y aun así, son aceptadas y altamente utilizadas en el sistema internacional como son:

            .col-lg-7
              figure.text-center.mt-2
                img(src="@/assets/curso/tema2/8.svg" data-aos="fade-up" style="display:inline;")

      .text-center.col-lg-7(style="margin-top:-50px;position:relative;" data-aos="fade-in")
        div(style="width:200px;height:50px;display:inline;")
          button.boton_1(@click="imagen_info3 = true;imagen_info4 = false" style="color:#00FF89;background-color:#389BB9;border-top-left-radius:30px;border-bottom-left-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-right-radius: 0px;vertical-align: top;border-bottom-right-radius: 0px;")
            i.fas.fa-angle-left(style="font-size:25px;")
          .p-2.text-center(style="background-color:rgba(56,155,185,.80);display:inline-block;width:100px;")
            p.mb-0(style="color:#00FFE6;font-weight:bold;") 4 / 4
          button(style="color:#00FF89;background-color:#389BB9;border-top-right-radius:30px;border-bottom-right-radius:30px;padding:.5rem .8rem .5rem .8rem;border-top-left-radius: 0px;vertical-align: top;border-bottom-left-radius: 0px;")
            i.fas.fa-angle-right(style="font-size:25px;")

    Separador

    .titulo-segundo.mt-5
      h2#t_2_3 2.3  Soluciones y concentraciones

    p(data-aos="fade-up") Cuando se mezclan homogéneamente dos o más sustancias se forma una solución. La sustancia a disolver se denomina soluto y en la que se disuelve se llama solvente; generalmente, el soluto se encuentra en pequeñas cantidades con respecto al solvente, en la figura a continuación se representa una solución con sus componentes.

    .col-lg-8.m-auto
      p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 6.] Partes de una solución
      figure
        img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de Soluto y Solvente (Bolívar, 2021). #[a(href=" https://www.lifeder.com/soluto-y-solvente/" target="_blank")  https://www.lifeder.com/soluto-y-solvente/]

    p.mt-4(data-aos="fade-up") La determinación de las relaciones o proporciones que existen entre la cantidad de soluto y solvente es lo que se llama concentración, en la figura 7 se visualiza las diferentes opciones de concentración a medida que se incrementa la cantidad de soluto.

    .col-lg-8.m-auto.mt-5
      p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Figura 7.] Concentración de soluciones
      figure
        img(src="@/assets/curso/tema2/10.svg" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota. Adaptado de Concentración Cualitativa. Química en el entorno (2014). #[a(href="http://quimicaysuentorno.blogspot.com/2014/10/concentracion-cualitativa.html" target="_blank") http://quimicaysuentorno.blogspot.com/2014/10/concentracion-cualitativa.html]

    p.mt-5(data-aos="fade-up") Para expresar la concentración de las soluciones se usan diferentes parámetros, cada uno de los cuales presenta unas características, aplicaciones y unidades particulares que les permiten ser útiles en distintas situaciones. Se suelen utilizar las unidades físicas y químicas para determinar la concentración de una solución, y son las siguientes:

    .row.mt-5
      .col-lg-6(style="padding:0px;")
        .p-5(style="background-color:#0F2771;height:100%;border-bottom-left-radius:15px;border-top-left-radius:15px")
          figure.text-center
            img(src="@/assets/curso/tema2/11.svg" style="display:inline;max-width:200px;")
          h3.mt-5.text-white(data-aos="fade-up") Unidades físicas
          ul.lista-ul.mt-3
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; % masa/masa (% m/m)
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; % masa/volumen (% m/v)
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; % volumen/volumen (% v/v)
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Partes por millón (ppm)
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Partes por billón (ppb)
      
      .col-lg-6(style="padding:0px;")
        .p-5(style="background-color:#1A7B96;height:100%;border-bottom-right-radius:15px;border-top-right-radius:15px")
          figure.text-center
            img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:200px;")
          h3.mt-5.text-white(data-aos="fade-up") Unidades químicas
          ul.lista-ul.mt-3
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Fracción molar
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Molaridad
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Molalidad
            li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
              p.mb-0.text-white #[i.fas.fa-angle-right(style="color: rgb(43, 103, 165);background-color: rgb(137, 235, 212);padding: 0.2rem .5rem;font-size: 1.4rem;")] &nbsp;&nbsp;&nbsp; Normalidad

    p.mt-5(data-aos="fade-up") En la siguiente tabla se puede observar en qué consiste cada una de las unidades de concentración, tanto físicas como químicas.

    p.p-1(style="border-left:5px #31B7DC solid;") &nbsp;&nbsp; #[strong Tabla 5.] Unidades de concentración

    .tabla-a.color-acento-botones.mt-4(style="overflow:clip;")
      table(style="min-width:100%;")
        thead(style="border:none")
          th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Unidad de concentración
          th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Símbolo
          th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Magnitudes relacionadas
          th.text-white(style="background-color:#389BB9;border:none;padding:15px;font-size:17px") Unidades
        tbody
          tr(style="background-color:#EBEFF6;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % peso/peso
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % p/p
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") (masa soluto/masa solución)*100
            td(style="padding:10px;border:none;text-align:center;") %
          tr(style="background-color:#F7FDFF;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % Peso/volumen
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % p/v
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") (masa soluto/masa solución)*100
            td(style="padding:10px;border:none;text-align:center;") %
          tr(style="background-color:#EBEFF6;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % volumen/volumen
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") % v/v
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") (masa soluto/masa solución)*100
            td(style="padding:10px;border:none;text-align:center;") %
          tr(style="background-color:#F7FDFF;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Partes por millón
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") ppm
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Masa (mg) soluto /masa (Kg) total
            td(style="padding:10px;border:none;text-align:center;") adimensional
          tr(style="background-color:#EBEFF6;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Fracción molar
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") X#[sub i]
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Moles soluto/moles totales
            td(style="padding:10px;border:none;text-align:center;") adimensional
          tr(style="background-color:#F7FDFF;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Molaridad
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") M
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Moles soluto/volumen solución
            td(style="padding:10px;border:none;text-align:center;") Mol/L
          tr(style="background-color:#EBEFF6;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Molalidad
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") m
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Moles soluto/masa solvente
            td(style="padding:10px;border:none;text-align:center;") Mol/Kg
          tr(style="background-color:#F7FDFF;")
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") Normalidad
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") N
            td(style="padding:10px;border:none;border-right:1px #AFAFAF solid;text-align:center;") #Equivalentes soluto/volumen solución
            td(style="padding:10px;border:none;text-align:center;") # Eq./L

    .col-lg-8.m-auto.mt-5
      .cajon.color-secundario.p-5(style="border-bottom-right-radius:100px;")
        .p(data-aos="fade-up") La utilización de una determinada unidad de concentración responde a la necesidad particular que se tenga, es decir, la molaridad se usa mucho, dado la facilidad de medir el volumen de una solución; sin embargo, tiene la desventaja de que el volumen varía en función de la temperatura, por esa razón, algunas veces prefiere trabajarse la concentración en molalidad.


  
</template>

<script>
export default {
  name: 'Tema2',
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
