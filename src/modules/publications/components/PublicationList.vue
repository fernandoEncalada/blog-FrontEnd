<template>
  <div class="container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      />
    </div>

    <div v-if="isLoading" class="row justify-content-md-center">
      <div class="col-3 alert-info text-center mt-5">
        Wait please...
        <h3 class="mt-2">
          <i class="fa fa-spin fa-sync"></i>
        </h3>
      </div>
    </div>

    <div v-else class="publication-scrollable-area mt-3">
      <Publication
        v-for="publication in publicationsByTerm"
        :key="publication.id"
        :publication="publication"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: {
    Publication: defineAsyncComponent(() =>
      import("../components/Publication.vue")
    ),
  },
  computed: {
    ...mapGetters("publication", ["getPublicationsByTerm"]),
    ...mapState("publication", ["isLoading"]),
    publicationsByTerm() {
      return this.getPublicationsByTerm(this.term);
    },
  },
  methods: {
    ...mapActions("publication", ["loadPublications"]),
  },
  data() {
    return {
      term: "",
    };
  },
  created() {
    this.loadPublications();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.publication-list-container {
  height: calc(100vh - 56px);
  overflow: scroll;
}
</style>