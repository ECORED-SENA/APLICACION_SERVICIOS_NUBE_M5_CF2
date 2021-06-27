<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Componentes de una arquitectura cliente/servidor

    p Este sistema tiene definido una serie de componentes que permiten entender de mejor manera su concepto y articulación, los cuales hacen parte integral de su arquitectura.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") Modelo cliente/servidor

    figure.mt-4
      img.fade-in-image.image_floating(src="@/assets/curso/tema2/1.svg")

    .row.mt-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b(style="height:100%;")
          img.imagen_flotante_animada(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.caja_flotante_azul
            .p-4
              h5 Red
              p Conjunto de dispositivos interconectados de una manera física o no física entre sí con el propósito de poder compartir recursos e información.

      .col-lg-6.mb-4
        .tarjeta-avatar-b(style="height:100%;")
          img.imagen_flotante_animada(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.caja_flotante_azul
            .p-4
              h5 Cliente
              p Se refiere a un demandante de servicios, es un dispositivo quien envía las peticiones y solicitudes al servidor, este cliente puede ser un ordenador como también una aplicación, la cual requiere información proveniente de la red para funcionar.

      .col-lg-6.mb-4
        .tarjeta-avatar-b(style="height:100%;")
          img.imagen_flotante_animada(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.caja_flotante_azul
            .p-4
              h5 Servidor
              p Hace referencia a un proveedor de servicios, este servidor a su vez puede ser un ordenador o una aplicación informática la cual envía información a los demás usuarios o dispositivos de la red.

      .col-lg-6.mb-4
        .tarjeta-avatar-b(style="height:100%;")
          img.imagen_flotante_animada(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.caja_flotante_azul
            .p-4
              h5 Protocolo
              p Es un conjunto de normas o reglas y pasos establecidos de manera clara, estandarizada y concreta sobre el flujo de información en una red, permite que todos los dispositivos interconectados manejen el mismo idioma o lenguaje a fin de que se puedan establecer las comunicaciones entre un cliente y un servidor al momento de solicitar un recurso o servicio.

      .col-lg-6.mb-4
        .tarjeta-avatar-b(style="height:100%;")
          img.imagen_flotante_animada(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.caja_flotante_azul
            .p-4
              h5 Servicios
              p Un servicio es un conjunto de información que busca responder las necesidades de un cliente, estos pueden ser de diferentes tipos como mensajes, música, software, bases de datos, videos, entre otros.

      .col-lg-6

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada
      .col-auto
        figure
          img.caja_flotante_rosada(src="@/assets/curso/tema2/7.svg")
      .col
        p Una máquina cliente como un servidor se refieren a computadoras que son usadas para diferentes propósitos. El cliente es un computador pequeño con una estructura igual a la que se tiene en oficinas u hogares, y accede a un servidor o a los servicios que este ofrece a través de Internet o una red interna (LAN). Un claro ejemplo a este caso es la forma en que trabaja una empresa con diferentes computadores donde cada uno de ellos se conectan a un servidor para poder obtener archivos de una base de datos o servicios ya sea correos electrónicos o aplicaciones.

        p.mt-3 #[strong El servidor al igual que el cliente], es una computadora, pero con diferencia de que tiene una gran capacidad que le permite almacenar gran cantidad de diversos archivos, o correr varias aplicaciones en simultáneo para así nosotros los clientes poder acceder los servicios. 

        p.mt-3 #[strong En la actualidad existen varios tipos de servidores.] Los mismos pueden contener y ejecutar aplicaciones, sitios web, almacenaje de archivos, diversas bases de datos, entre muchos más. Es importante mencionar que un cliente también puede tener una función de servidor ya que el mismo puede almacenar datos en su disco duro para luego ser usados en vez de estar conectándose al servidor continuamente por una acción que quizás sea muy sencilla.

        p.mt-3 Estas son las características que desde lo funcional permiten identificar sus diferencias, pero se debe aclarar que desde su estructura o arquitectura existen diferencias muy significativas en cuanto al sistema operativo que utilizan tanto el cliente como el servidor, para hablar de estos aspectos se debe definir el sistema operativo.

  
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
</style>
