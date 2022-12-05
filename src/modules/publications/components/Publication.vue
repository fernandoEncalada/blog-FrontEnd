<!-- eslint-disable vue/multi-word-component-names -->
<template>
<!-- @click="$router.push({ name: 'somewhere', state: { myData } })" -->
<!-- router.push({ name: 'user', params: { username: 'eduardo' } }) -->
  <div class="publication-container mb-3 pointer p-2"
    @click="goToPublicationView">
    <div class="publication-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-2 fs-5">July</span>
        <span class="mx-2 fw-light">200, Tuesday</span>
    </div>

    <div class="publication-description">
        Exercitation exercitation pariatur velit ex ullamco sit eiusmod cillum laboris. Pariatur aute do nulla incididunt proident mollit velit elit ipsum irure 
        reprehenderit consequat reprehenderit culpa. Exercitation ex consectetur ut excepteur esse eiusmod est ex tempor. Ipsum ullamco duis et fugiat ut deserunt 
        deserunt pariatur aute esse. Id fugiat culpa tempor culpa ut irure. Laborum minim aute reprehenderit laborum laboris minim minim laboris ut elit proident 
        ut occaecat.
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPublicationView() {
      this.$router.push({ name: 'publicationView', params: { id: 10} })
    }
  }
}
</script>

<style lang="scss" scoped>
.publication-container {
    border-bottom: 1px solid #2c3e50;
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