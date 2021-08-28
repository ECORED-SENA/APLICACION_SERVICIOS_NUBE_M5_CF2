<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sistemas operativos

    p Un sistema operativo se constituye como un conjunto de órdenes y programas que controlan los procesos básicos de una computadora y permiten el correcto funcionamiento de los programas.

    .cajon.color-acento-botones.p-4.mt-4.fade-in-image.caja_flotante_rosada
      p Para hablar de un sistema operativo es importante recordar algunos conceptos desde la informática básica que toda computadora está compuesta por dos elementos fundamentales que son:

      p.mt-4.mb-0.texto_sombra #[strong Componente de software]
      p.texto_sombra #[strong Componente de hardware]

    .tarjeta--container.row.mt-5.col-md-10.m-auto
      .col-md-6
        .p-5.caja_escalada_hover.caja_flotante_azul(style="background-color:#A9EBF4;height:100%;")
          .row.justify-content-center.mb-4
            .col-6
              figure.p-3
                img.imagen_flotante_animada(src='@/assets/curso/tema3/1.svg', alt='Avatar')
            
          h5.text-center Componente de software
          p Se refiere a todos los componentes lógicos como lo son los programas o aplicaciones, los servicios que hacen posible explotar o aprovechar al máximo los recursos disponibles de una computadora, los cuales son ejecutados mediante una serie de rutinas que permiten la realización de determinadas tareas.

      .col-md-6
        .p-5.caja_escalada_hover.caja_flotante_rosada(style="background-color:#FFCA28;height:100%;")
          .row.justify-content-center.mb-4
            .col-6
              figure.p-3
                img.imagen_flotante_animada(src='@/assets/curso/tema3/2.svg', alt='Avatar')
            
          h5.text-center Componente de hardware 
          p El hardware se refiere a todos esos componentes o elementos físicos que en su conjunto conforman una computadora o un sistema informático.

    p.mt-5 Entendiendo estos dos conceptos básicos de la informática se podría definir los sistemas operativos como un software compuesto por un conjunto de programas que administran los recursos hardware, los protocolos, las comunicaciones y los demás contenidos o programas, así como la interacción con el usuario a través de una interfaz que permite la fácil interacción entre la computadora y el usuario final.

    p.mt-3 En el estudio de Rafino (2000) Los sistemas operativos consisten en interfaces gráficas, entornos de escritorio o gestores de ventanas que brindan al usuario una representación gráfica de los procesos que se están ejecutando en la computadora. También puede ser una línea de comandos, es decir, un conjunto de instrucciones ordenado según su prioridad y que funciona en base a órdenes introducidas por el usuario.

    br
    #t_3_1.titulo-segundo.mt-5.fade-in-image
      h2 3.1 Características de un sistema Operativo

    p #[strong Las características principales del sistema operativo se centran en:]

    ul.lista-ul.mt-4
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Ser el intermediario entre el usuario y el hardware.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Es necesario para el funcionamiento de todos los computadores, tabletas y teléfonos móviles.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Otorga seguridad y protege a los programas y archivos del ordenador.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Está diseñado para ser amigable con el usuario y fácil de usar.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Permite administrar de manera eficiente los recursos del ordenador.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | La mayoría requiere del pago de una licencia para su uso.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Permite interactuar con varios dispositivos.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Es progresivo, ya que existen constantemente nuevas versiones que se actualizan y adaptan a las necesidades del usuario.

    br
    #t_3_2.titulo-segundo.mt-5
      h2 3.2 Tipos de sistemas operativos

    .row
      .col-auto
        figure
          img.image_floating(src="@/assets/curso/tema3/3.svg" data-aos="fade-right")
      .col
        p Los sistemas operativos se pueden clasificar de varias maneras según el usuario, según las tareas a desempeñar y según la gestión de los recursos, para Rafino (2000).  Desde el punto de vista del modelo cliente servidor se puede clasificar los sistemas operativos que son diseñados y utilizados para trabajar en el lado del cliente y los  sistemas operativos de red y están diseñados para funcionar del lado del servidor.

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Según el usuario:")
        h5 Según el usuario
        p Multiusuario, sistema operativo que permite que varios usuarios ejecuten simultáneamente sus programas; o monousuario, sistema operativo que solamente permite ejecutar los programas de un usuario a la vez.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Según la gestión de tareas:")
        h5 Según la gestión de tareas:
        p Monotarea, sistema operativo que solamente permite ejecutar un proceso a la vez; o multitarea, sistema operativo que puede ejecutar varios procesos al mismo tiempo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Según la gestión de recursos:")
        h5 Según la gestión de recursos:
        p Centralizado, sistema operativo que solo permite utilizar los recursos de un solo ordenador; o distribuido, sistema operativo que permite ejecutar los procesos de más de un ordenador al mismo tiempo.

    br
    #t_3_3.titulo-segundo.mt-5
      h2 3.3 Sistemas operativos tipo cliente

    p Son aquellos sistemas operativos que se utilizan en los dispositivos desde los cuales se accede a los servicios y aplicaciones que son ofrecidos por los servidores, de los más populares se encuentran las computadoras, tabletas o dispositivos móviles para lo cual se cuenta con entre otros algunos de los siguientes ejemplos:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Microsoft Windows" :icono="require('@/assets/curso/tema3/4.svg')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Microsoft Windows
            p De los más populares que existen, no solo por uso en el hogar si no a nivel corporativo o empresarial, se trata de un conjunto de distribuciones o entornos operativos gráficos basados en un estándar llamado WIMP (Windows Icon Mouse Pointer), siendo esta su principal característica ya que funciona a partir de una interfaz gráfica basada en ventanas y el uso del mouse quien a través de un puntero permite la ejecución de las tareas. Entre las distribuciones de este sistema operativo más populares en los últimos años, ya que en su evolución y desarrollo han existido muchas otras se tiene:

            ul.lista-ul.mt-4
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Windows XP]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Windows vista]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Windows 7]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Windows 8]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Windows 10]
        
          .col-md-6
            figure.text-center
              img.imagen_flotante_animada(src='@/assets/curso/tema3/9.svg', alt='Microsoft Windows' style="max-width:300px;display:inline;")

      .py-4.py-md-5(titulo="Mac OS" :icono="require('@/assets/curso/tema3/5.svg')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Mac OS
            p Es el sistema operativo de los computadores Macintosh de Apple, también conocido como OSX o Mac OSX. Basado en Unix, desarrollado y vendido en computadores Apple desde 2002, este es un sistema operativo muy popular entre los desarrolladores de software, de videojuegos y de aplicaciones móviles.

          .col-md-6
            figure.text-center
              img.imagen_flotante_animada(src='@/assets/curso/tema3/10.svg', alt='Mac OS' style="max-width:300px;display:inline;")

      .py-4.py-md-5(titulo="Android" :icono="require('@/assets/curso/tema3/6.svg')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Android
            p Este sistema operativo basado en el núcleo Linux de código abierto, opera en teléfonos celulares y tabletas y otros artefactos dotados de pantalla táctil, como teléfonos inteligentes, tabletas, relojes inteligentes, automóviles y televisores.

          .col-md-6
            figure.text-center
              img.imagen_flotante_animada(src='@/assets/curso/tema3/11.svg', alt='Android' style="max-width:300px;display:inline;")

      .py-4.py-md-5(titulo="IOS" :icono="require('@/assets/curso/tema3/7.svg')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 IOS
            p Es el sistema operativo móvil creado por Apple inc, este sistema operativo fue diseñado y construido inicialmente para el IPhone (Teléfono inteligente propio de Apple), sin embargo, en los últimos años ha sido empleado por su fabricante en otros dispositivos como el Ipad, Ipod y diferentes elementos como relojes y otros.

          .col-md-6
            figure.text-center
              img.imagen_flotante_animada(src='@/assets/curso/tema3/12.svg', alt='IOS' style="max-width:300px;display:inline;")

      .py-4.py-md-5(titulo="Linux" :icono="require('@/assets/curso/tema3/8.svg')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Linux
            p Es un sistema operativo libre y gratuito que ha venido construyendo desde sus orígenes por una comunidad en la que participan gran cantidad de personas y compañías, lo que ha generado varias distribuciones es un sistema operativo (Adeva, 2021). Si bien este sistema operativo no es tan popular a nivel de usuario final en sus computadoras cliente, en los últimos años a nivel de desarrolladores de software y personal de seguridad o infraestructura de TI usan con mayor frecuencia distribuciones y versiones de Linux construidas bajo la filosofía de ser usadas por usuario final, sin embargo, Linux como tal es un sistema operativo que por sus características tiene la posibilidad de funcionar ya sea como cliente entregando unas distribuciones con interfaces muy intuitivas y de fácil utilización  o como servidor según se requiera. Dentro de las distribuciones más populares a nivel de cliente se encuentra:

            ul.lista-ul.mt-4
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Ubuntu]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Fedora]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Mint]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Debían]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Opensuse]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Scientific Linux]
              li(data-aos="fade-up" )
                i.fas.fa-check
                | #[strong Elementary OS]

          .col-md-6
            figure.text-center
              img.imagen_flotante_animada(src='@/assets/curso/tema3/13.svg', alt='Linux' style="max-width:300px;display:inline;")

    br
    #t_3_4.titulo-segundo.mt-5
      h2 3.4 Sistemas operativos de red

    p Los sistemas operativos de red son aquellos que permiten la interconexión de diferentes computadoras que ofician como clientes quienes acceden a los recursos o servicios ofrecidos o compartidos por el servidor, requieren estar conectados a redes de computadoras, por eso son conocidos como NOS (Network Operating Systems).

    p.mt-3 Estos sistemas operativos se mantienen conectados o unidos a dos o más dispositivos a través de algún medio de comunicación físico o no (medios de transmisión guiados o no guiados) con el propósito de poder compartir los recursos ya sean hardware o software dispuestos en él.

    .cajon.color-acento-botones.p-4.mt-4.fade-in-image.caja_flotante_rosada
      p  Las características de los sistemas operativos de red suelen estar asociadas con tres aspectos principales: la administración de usuarios, el mantenimiento del sistema y las funciones de administración de recursos. Esto incluye:

    ul.lista-ul.mt-5
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Soporte básico para sistemas operativos como protocolo y procesador, detección de hardware y multiprocesamiento.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Impresora y uso compartido de aplicaciones.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Sistema de archivos común y uso compartido de bases de datos.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Capacidades de seguridad de red, tales como autenticación de usuario y control de acceso.
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Administración de directorios
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Copia de seguridad y servicios web
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Trabajo en red
      li(data-aos="fade-up" )
        i.fas.fa-check
        | Entre otros

    p.mt-4 En los sistemas operativos de red al igual que los sistemas operativos tipo cliente existen diferentes versiones y distribuciones dentro de las cuales se destacan las siguientes:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Windows Server" :icono="require('@/assets/curso/tema3/14.svg')")
        .p-3
          h4 Windows Server
          p Sistema operativo de uso privativo desarrollado por Microsoft, existen diferentes versiones y distribuciones diseñadas por el fabricante específicamente según su funcionalidad, si bien existen muchas otras versiones se relacionarán solo las de los últimos años que, en su evolución y desarrollo, se han utilizado:

        .row.p-3
          .col-md-6.mb-4
            ul.lista-ul.mt-5
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2000]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2003]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2008]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2012]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2016]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2019 (Versión actual)]

          .col-md-6.mb-4
            h4 Distribuciones:
            ul.lista-ul
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2000]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2003]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2008]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2012]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2016]
              li(data-aos="fade-up")
                i.fas.fa-check
                | #[strong Windows Server 2019 (Versión actual)]

        p Todas las versiones y distribuciones antes mencionadas obedecen a un nivel de funcionalidad que puede ser desplegado en estos sistemas operativos, es importante mencionar que este sistema operativo es de tipo propietario o de uso restringido y que para su uso se requiere del pago de una licencia  la cual dependerá del número de clientes que se van a  conectar al servidor, del tipo de hardware sobre el cual será instalado como número de procesadores, capacidad de memoria RAM y si estará desplegado en una máquina o servidor físico o virtual, todas estas son variables que influyen directamente en el costo de la licencia.

      .py-4.py-md-5(titulo="Linux" :icono="require('@/assets/curso/tema3/15.svg')")
        .p-3
          h4 Linux
          p Es un sistema operativo multipropósito, dentro de sus principales características se pueden mencionar las siguientes (Adeva, 2021):

          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Gratis:")
              p Linux es un sistema operativo gratuito y existen en el mercado gran cantidad de distribuciones enfocadas a diferentes tipos de usuarios por lo que es fácil encontrar una solución que se acomode a cada una de las necesidades.

            .row(titulo="Código abierto:") 
              p El código fuente está liberado para que cualquiera pueda desarrollar nuevas capacidades y adaptarlo a sus propias necesidades.

            .row(titulo="Seguro:") 
              p La seguridad es uno de los elementos más destacable de Linux, si bien no se puede afirmar que es 100% seguro, tiene algunas características clave, entre las que se relacionan las siguientes: (I) contiene una arquitectura para el manejo de archivos, procesos y memoria que no permite fácilmente la permanencia de virus o malware y (II) es un sistema operativo personalizable por lo que se puede permitir el uso de diferentes interfaces para su manipulación y no se limita a una única interfaz.

            .row(titulo="Multitarea:") 
              p Al igual que otros sistemas operativos presentes en el mercado actual, Linux permite el trabajo con múltiples aplicaciones al tiempo como por ejemplo navegar en internet, mientras se tienen abiertas herramientas de procesamiento de texto, escuchar música, recibir notificaciones de correo electrónico entre otros. Sin embargo, se debe tener en cuenta que al no ser uno de los sistemas operativos más ampliamente utilizado por clientes tradicionales existen limitantes respecto al tipo de aplicaciones disponibles.

            .row(titulo="Multiusuario:") 
              p Linux permite que múltiples usuarios se puedan conectar y acceder a los recursos de forma simultánea y segura.

            .row(titulo="Personalizable:") 
              p El sistema operativo puede ser personalizado para ser usado de acuerdo con las necesidades específicas de los clientes, por esta razón es que se encuentran gran cantidad de distribuciones en el mercado.

            .row(titulo="Alto control de dispositivos:") 
              p Este sistema operativo permite la gestión individual de cada dispositivo de la máquina por medio de sus respectivos controladores, lo anterior permite un mayor control e independencia y la posibilidad de realizar actualizaciones y correcciones sobre elementos específicos del sistema.

            .row(titulo="Independiente:") 
              p Linux al ser un sistema operativo libre y de código abierto, permite que sobre él se puedan realizar modificaciones, ampliar su capacidad y distribuir nuevamente sin necesidad de autorización por parte de terceros.

            .row(titulo="Estable:")
              p Linux es uno de los sistemas operativos considerados más robustos y estables por lo cual es muy común encontrar este tipo de sistemas en equipos de tipo servidor donde se requiere disponibilidad de servicios muy cercanos al 100% y donde las fallas no son toleradas.

            .row(titulo="Escalable:")
              p gracias a la posibilidad de personalización y alto control sobre los dispositivos en las características antes mencionadas, es posible que este tipo de sistemas se pueda adaptar a las nuevas necesidades de crecimiento y de funcionamiento que requieren los sistemas informáticos actuales conservando altos estándares de calidad.

          p Linux al igual que todos los sistemas operativos tiene una variedad de distribuciones que no dependen de un solo fabricante sino de diferentes empresas que toman el kernel del Linux y desarrollan sus propias distribuciones, dentro de las populares a nivel de servidor se encuentran (Fm, 2021):

          ul.lista-ul
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux CenOS
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux RedHat
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux Debian
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux Open Suse
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux Ubuntu Server
            li(data-aos="fade-up")
              i.fas.fa-check
              | Linux OracleLinux
            li(data-aos="fade-up")
              i.fas.fa-check
              | Fedora LinuxServer

          p Entre otras más que han sido personalizadas para una serie de funcionalidades muy particulares, solo por mencionar algunas como el scientific Linux, Cloud Linux, ClearOS Linux.

      .py-4.py-md-5(titulo="MacOS Server" :icono="require('@/assets/curso/tema3/16.svg')")
        .p-3
          h4 MacOS Server
          p Este es un sistema operativo basado en UNIX/LINUX desarrollado por Apple, es una versión de sistema operativo muy similar al MacOS de escritorio o de tipo cliente, se diferencia en que esta versión incluye funcionalidades o herramientas administrativas de tipo gráfico para la gestión y administración de usuarios, red y servicios como LDAP, MAIL, SAMBA, DNS entre otros servicios.


</template>
<script>
import AOS from 'aos'

export default {
  name: 'Tema3',
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
