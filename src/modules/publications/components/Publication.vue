<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="publication-container mb-3 pointer p-2"
    @click="$router.push({ name: 'publicationView', params: { id: publication.id } })">
    <!-- <div class="publication-title d-flex">
        <span class="text-success fs-5 fw-bold">{{ day }}</span>
        <span class="mx-2 fs-5">{{ month }}</span>
        <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div> -->
    <div>
      <h5>{{ publication.title }}</h5>
    </div>

    <div class="publication-description">
      {{ publication.description }}
    </div>
  </div>
</template>

<script>
// const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
// const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  computed: {
    cutText(){
      return ( this.publication.description.length > 400 )
        ? this.publication.description.substring(0, 400) + '...'
        : this.publication.description
    },
    // day() {
    //   const date = new Date( this.publication.date )
    //   return date.getDate()
    // },
    // month(){
    //   const date = new Date( this.publication.date )
    //   return months[ date.getMonth() ]
    // },
    // yearDay(){
    //   const date = new Date( this.publication.date )
    //   return `${ date.getFullYear() }, ${ days[ date.getDay() ] }`
    // }
  },
}
</script>

<style lang="scss" scoped>
.publication-container {
    // border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .publication-description {
        font-size: 12px;
    }
}


</style>