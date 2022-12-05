<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <button class="btn btn-primary" @click="goToPublication">Go to Publication</button>
  </div>
</template>

<script>

export default {
  methods: {
    goToPublication() {
      this.$router.push({ name: 'no-publication' })
    }
  }
}
</script>
