<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición y generalidades de sistemas cliente/servidor

    p.mt-3 El sistema cliente/servidor es un modelo de aplicación distribuida, en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Las aplicaciones clientes realizan peticiones a una o varias aplicaciones servidores, que deben encontrarse en ejecución para atender dichas demandas. Marini, E. (2012).

    p.mt-3 #[strong Cuando se habla de sistemas cliente/servidor desde el punto de vista tecnológico o informático se puede especificar claramente dos componentes lo cuales son:]

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") Cliente/servidor

    .col-md-8.m-auto.mt-5
      .row
        .col-md-4.text-center
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg" style="display:inline;max-width:7rem;")
            h6.mt-3.imagen_flotante_animada Servidor
        .col-md-4.text-center
          figure
            img.mt-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:4rem;")
        .col-md-4.text-center
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/2.svg" style="display:inline;max-width:13rem;")
            h6.mt-3.imagen_flotante_animada Cliente

    .col-md-10.m-auto
      .row.mt-3
        .col-md-6
          .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFE7C4;height:100%;")
            p Es una computadora bastante potente con hardware y software especializado, además dispuesto para atender y dar respuesta a las peticiones o solicitudes que hacen las otras computadoras, quienes acceden a los recursos o servicios ofrecidos por el servidor, es decir están al servicio de otras computadoras. Los servidores se utilizan para gestionar los recursos de una red.

        .col-md-6
          .p-5.caja_flotante.caja_escalada_hover(style="background-color:#A9EBF4;height:100%;")
            p Son las computadoras quienes acceden a los servidores haciendo peticiones y solicitudes de acceso a recursos y servicios alojados o dispuestos en los servidores.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>
<style lang="sass" scoped>
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
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
</style>
