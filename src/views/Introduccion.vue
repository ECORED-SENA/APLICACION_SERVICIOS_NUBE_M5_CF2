<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .col-md-8.m-auto
      figure.text-center
        img.image_floating(src="@/assets/curso/introduccion/1.svg", alt="Introducción")

    p.mt-3 En este módulo se estudiarán los principios básicos de los sistemas operativos de red (NOS) y su funcionamiento e importancia en un sistema cliente servidor, los cuales son los fundamentos sobre los que se planea y ejecuta un proceso de despliegue de servicios. Con el desarrollo de este componente formativo se podrá identificar las características de los sistemas operativos, tipos de sistemas operativos y licenciamiento.

    p.mt-3 Se hará un recorrido por la definición y sus generalidades para conocer el sistema de cliente/servidor, ello, permitirá conocer sus diferentes componentes situándolos en la arquitectura donde se podrá conocer sus características para identificar sus similitudes y diferencias; de esta misma forma se llegará a los sistemas operativos para reconocer desde el software y hardware el conjunto de programas que lo conforman. Posteriormente se reconocerá el licenciamiento de software a nivel de sistemas operativos (Windows, Linux y MacOS) y se finalizará con las aplicaciones y servicios que permiten la implantación de un sistema o aplicación. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.image_floating
  filter: drop-shadow(19px 14px 5px #e4e4e4)
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important
</style>
