<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar bg-primary">
    
      <a class="navbar-brand text-white" @click="goToHome" style="cursor: pointer">
        <img
          src="@/assets/logo.png"
          alt="Vue logo"
          height="24"
          class="d-inline-block align-text-top mx-2"
        />
        Blog
      </a>

    <div class="d-flex">
      <!-- <form class="d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Search"
          v-model="term"
        />
      </form> -->
      <button class="btn btn-outline-info mx-2" @click="createPublication()">
        <i class="fa fa-plus"></i>
        Create publication
      </button>

      <!-- <button class="btn btn-outline-info mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button> -->
    </div>
  </nav>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("publication", ["term"]),
  },
  data() {
    return {};
  },
  methods: {
    createPublication() {
      this.$router.push({ name: "publicationView", params: { id: "new" } });
    },
    goToHome() {
      this.$router.push({ name: "publicationList" });
    },
  },
};
</script>
