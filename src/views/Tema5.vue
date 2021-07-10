<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Aplicaciones y Servicios

    p En términos generales son todos aquellos servicios que pueden ser desplegados o configurados en un servidor utilizando para esto un sistema operativo de red, este dependerá del tipo de sistema operativo que será utilizado y del nivel de licenciamiento con que se cuente, sin embargo, se mencionan algunos de los servicios más utilizados en un modelo cliente servidor:

    .p-5.mt-5(style="background-color:#EAFCFF")
      .col-md-10.m-auto
        .row
          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/1.svg', alt='Avatar')

              p #[strong DNS:] Servidor de Nombres de Dominio (hace la función y traduce nombres de dominio a direcciones IP y viceversa)

          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/2.svg', alt='Avatar')

              p #[strong DHCP:] Protocolo de asignación automática de direcciones IP.

          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/3.svg', alt='Avatar')

              p #[strong Web:] Servidor que provee el servicio para publicar o alojar desarrollos de tipo web.

          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/4.svg', alt='Avatar')

              p #[strong Base de datos:] Servidores que permiten el almacenamiento, procesamiento y gestión de los datos.

          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/5.svg', alt='Avatar')

              p #[strong Archivos:] Permite compartir el acceso a directorios y archivos compartidos entre los diferentes usuarios de la organización.

          .col-md-4.mb-4
            .tarjeta--boton.color-acento-botones.p-4.caja_flotante.caja_escalada_hover(style="height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema5/6.svg', alt='Avatar')

              p #[strong Directorio:] Servicio de directorio que permiten administrar y gestionar los recursos de la red como usuarios, autenticación, permisos, roles y acceso a los recursos compartidos.

    p.mt-5 Los servicios para implementar son de suma importancia al momento de planear el despliegue o implantación de un sistema o aplicación, por lo que deben ser parte fundamental en el levantamiento de los requerimientos al inicio de todo proyecto de desarrollo de software o implementación de servicios previos durante el desarrollo, pruebas y puesta en producción de servicios y aplicaciones.

  
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
.tarjeta--boton
  border-radius: 20px
  background-color: #C7F3F8
</style>
