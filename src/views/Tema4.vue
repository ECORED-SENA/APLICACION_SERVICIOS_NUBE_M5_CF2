<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Licenciamiento de Software a nivel de sistemas operativos

    p Es importante iniciar este punto mencionando que en Colombia existe una normatividad que regula el licenciamiento y se encuentra en la Ley 603 de 2000, llamada en algunos casos como ley de licencias de Software (o Ley para cumplimiento de las licencias de Software).

    p.mt-3 Una licencia de software es el equivalente a un contrato donde se pueden encontrar las condiciones que se establecen entre las partes para el uso de este, entre los elementos descritos en este contrato se especifica el proceso de instalación, la reproducción, el proceso de copia, el uso que se debe hacer del software y las limitantes (Zuta, 2021).

    p.mt-3 Normalmente la licencia de software se especifica en el momento previo de la instalación o descarga del mismo y deberá de forma explícita indicar si acepta o no los términos y condiciones establecidas en la licencia.

    p.mt-3 En este aspecto es importante centrarse en los tipos de licencias que tienen los sistemas operativos y su tipo de uso restrictivo como Windows y MacOS y a los libres como lo es Linux, por ello, se ampliará la información sobre estos tres sistemas operativos ya que son los más utilizados o populares en el proceso de despliegue e implantación de servicios.

    br
    #t_4_1.titulo-segundo.mt-5
      h2 4.1 Licencias de Windows

    .row
      .col-auto
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema4/1.svg" data-aos="fade-right")
      .col
        p.p-3 Windows es un sistema operativo que tiene diferentes tipos de licencia de tipo propietario. Un software propietario es aquel sobre el que rigen ciertas restricciones y prohibiciones determinados por sus propietarios entre las que se encuentran la copia y la redistribución o modificación, y para hacer uso de estas acciones se debe solicitar permiso o pagar.

    p.mt-5 #[strong En el caso de Microsoft poseen cuatro tipos de licencias básicas (Sistemas, 2016) que se pueden adquirir, estas son:]

    .row.mt-5
      .col-md-3.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#A9EBF4;height:100%;")
          h5.text-center.mt-4 OEM
          p.mt-5 Son las licencias que vienen preinstaladas en las computadoras que se adquieren en las tiendas de computadoras o a través de cualquier sitio web de comercialización de equipos de cómputo. Tiene como desventaja que este tipo de licencia solo puede ser utilizada de manera exclusiva en el equipo que se adquirió y tiene algunas limitantes en la funcionalidad sobre todo en los servicios de red.

      .col-md-3.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#DDFBFF;height:100%;")
          h5.text-center.mt-4 RITAIL
          p.mt-5 Son licencias que se adquieren ya sea físicas en un medio como CD o DVD o en forma digital descargando un archivo ISO, se adquieren para el usuario final en tiendas de computadoras o en sitios web, tienen como característica fundamental que puede ser utilizada e instalada en cualquier equipo sin problema, es decir que no está condicionada a un solo equipo como el caso de la OEM.

      .col-md-3.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#A9EBF4;height:100%;")
          h5.text-center.mt-4 OEMBOX
          p.mt-5 Son licencias que se adquieren en medio físico, traen un CD o DVD de instalación y adjunto un holograma adhesivo, este tipo de licencia permite una sola instalación y no permite cambios en el hardware del equipo donde se instaló.

      .col-md-3.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#DDFBFF;height:100%;")
          h5.text-center.mt-4 VOLUMEN
          p.mt-5 La licencia Microsoft de software por volumen permite ejecutar el software en múltiples ordenadores dentro de una misma empresa, de forma sencilla y accesible por múltiples usuarios.

    p.mt-4 Es importante mencionar que por cada tipo de licencia existen ya diferentes versiones de sistema operativo, no solo desde el lado del cliente si no del lado del servidor como se mencionó con anterioridad, por ejemplo, se encuentran licencias de tipo Home, PRO, pro for Workstation, Professional, entre otros.

    p.mt-3 #[strong En el caso de las licencias de tipo servidor existen otras variables que se deben considerar a nivel del licenciamiento, entre otras las siguientes:]

    ul.lista-ul.mt-5
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Arquitectura del servidor (X86, aarch64, armhfp, ppc64le power9, i386, entre otras)
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Número de procesadores
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Cantidad de memoria RAM 
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Servicios que soportará
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Tipo de instalación si se hará en servidor físico o virtualizado.


    br
    #t_4_2.titulo-segundo.mt-5
      h2 4.2 Licenciamiento en Linux 

    .row
      .col-auto
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema4/2.svg" data-aos="fade-right")
      .col
        p.p-1 Linux es un sistema operativo diseñado y desarrollado por gran cantidad de desarrolladores en el mundo y se distribuye bajo la Licencia Pública General GNU (GPL), lo que garantiza que los usuarios tengan la libertad de usarlo, distribuirlo y/o modificarlo. Al ser desarrollado por comunidad de personas alrededor del mundo, quienes hacen sus aportes al crecimiento y evolución del sistema operativo, ha permitido múltiples variables de Linux, lo que ha llevado a la generación de varios tipos de licencia, como lo son:

    .row.mt-5
      .col-md-6.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#A9EBF4;height:100%;")
          h5.text-center.mt-4 GPL
          p.mt-5 La licencia GNU GPL (GNU General Public License en español Licencia Pública General de GNU) es una licencia de software en la cual puedes hacer uso e instalar sin limitaciones, se puede modificar el software y distribuirlo con o sin las modificaciones realizadas de forma gratuita o no siempre que el código fuente se siga entregando para ser leído (Free Software Foundation, 2021).

      .col-md-6.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#DDFBFF;height:100%;")
          h5.text-center.mt-4 BSD
          p.mt-5 La licencia BSD permite mantener la protección de derechos de autor para requerir la atribución de autoría en trabajo derivados y para la renuncia de la garantía, lo anterior permite la libre redistribución y modificación y también permite el uso del código fuente en software no libre, Es decir es una licencia de baja restricción para software de código abierto que no impone requisitos de redistribución (Open source initiative, 2021).

      .col-md-6.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#DDFBFF;height:100%;")
          h5.text-center.mt-4 DFSG
          p.mt-5 Se le conoce como Debian Free Software Guideline al contrato realizado entre la comunidad de usuarios de software libre y Debian, Este tipo de licencia contiene criterios para la distribución y exigencias referentes a la publicación del código fuente. entre las exigencias podemos encontrar: (i) distribución 100% libre, (ii) código fuente debe ser incluido en el proceso de redistribución para contribuir a la comunidad de software libre, (iii) La licencia permite modificación y trabajo derivado pero estos se deben redistribuir con la licencia original, (iv) la licencia puede restringir de distribución del código fuente en forma modificada sólo si la licencia permite distribución de parches para modificar el código fuente original del programa en el momento de compilarlo, (v) no debe existir discriminación sobre personas o grupos de personas ni sobre el uso que le den al software, (vi) los derechos otorgados no dependen  del sitio de distribución y (vii) la licencia no puede afectar otros programas que se distribuyan junto con el programa bajo esta licencia (Debian , 2021).

      .col-md-6.mb-4
        .p-4.caja_escalada_hover.caja_flotante_azul(style="background-color:#A9EBF4;height:100%;")
          h5.text-center.mt-4 X.org
          p.mt-5 Proyecto desarrollado por la fundación X.org en conjunto freedesktop.org sin ánimo de lucro y proporciona implementaciones de código abierto del sistema X Windows para fines educativos.

    p.mt-4 Si bien estas licencias son tan solo algunas, pueden existir múltiples variables de los licenciamientos que pueden obtenerse al adquirir licencias de tipo Linux, por lo que se recomienda al aprendiz profundizar en la lectura de esta temática a fin de lograr tener una visión más amplia de todo el tema del licenciamiento de software en general.

    br
    #t_4_3.titulo-segundo.mt-5
      h2 4.3 Licenciamiento MacOS

    .row
      .col-auto
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema4/3.svg" data-aos="fade-right")
      .col
        p.p-1 Apple realmente no tiene un solo tipo de licencia, estas varían según la versión o distribución mediante diferentes tipos de licencia de código abierto como GPL, BSD, MIT o APSL (Apple Public Source License) permitiendo a desarrolladores y estudiantes acceder a su código fuente para aprender de él, enviar sugerencias o realizar modificaciones.

        p.mt-3 Sin embargo, uno de los más utilizados son de tipo EULA que significa Acuerdo de Licencia de Usuario Final, el cual es un contrato celebrado entre una organización o entidad desarrolladora o vendedor y el usuario de software, Apple tiene distintos tipos de licencias que pueden ser consultadas según el producto adquirido.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") Tipos de licencia MacOS

    .col-md-10.m-auto.mt-5
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema4/4.svg" data-aos="zoom-in-up")
          figcaption Fuente: Apple, s.f.

  
</template>
<script>
import AOS from 'aos'

export default {
  name: 'Tema4',
  data: () => ({}),
  mounted() {
    AOS.init()
  },
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(19px 14px 5px #e4e4e4)
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important

@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(0 25px 15px rgba(0,0,0,0.1))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.texto_sombra
  text-shadow: -3px 4px 0px #e0e0e0
.titulo-segundo:after
  border-color: #FFCA28 !important
.lista-ul i
  color: #4DD0E1
.tarjeta.color-acento-botones--borde
  background-color: #DBFBFF !important
  border: none !important
.tabs-a__tab
  background-color: #E8E8E8
.tabs-a.color-acento-botones .tabs-a__tab__selected,.tabs-a__tab:hover
  background-color: #4DD0E1 !important
  color: #ffffff !important
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #4dd0e1 !important
.tabs-b__tab
  background-color: #DBFBFF
  border-right: 2px solid #4DD0E1
  border-bottom: 2px solid #4DD0E1
.tabs-b.color-acento-contenido .tabs-b__tab--active
  background-color: white !important
  border-bottom: none !important
</style>
