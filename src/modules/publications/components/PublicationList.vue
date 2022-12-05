<template>
  <div class="publication-list-container">
    <div class="publication-scrollable-area">
        <Publication v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        Publication: defineAsyncComponent(() => import('../components/Publication.vue'))
    }
}
</script>

<style lang="scss" scoped>
.publication-list-container{
    height: calc( 100vh - 56px);
    overflow: scroll;
}
</style>