<template>
  <div class="container">
    <template v-if="publication.id">
      <h3 class="text-center text-uppercase mt-3">{{ publication.title }}</h3>
      <div class="publication-title d-flex justify-content-between p-2">
        <div>
          <!-- <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span> -->
        </div>
      </div>
      <div>
        <h5>{{ publication.description }}</h5>
        <p >{{ publication.content }}</p>
      </div>
    </template>

    <template v-else>
      <div class="mt-3">
        <h3 class="text-center">Create new publication</h3>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Publication title</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title of the publication"
            v-model="publication.title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Publication Description</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Description of the publication"
            v-model="publication.description"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Publication content</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="publication.content"
          ></textarea>
        </div>
      </div>
    </template>
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-primary"
        v-if="this.publication.id"
        @click="savePublication()"
      >
        Update Publication
      </button>
      <button class="btn btn-success" v-else @click="savePublication()">
        Create Publication
      </button>
      <button
        v-if="this.publication.id"
        class="btn btn-danger"
        @click="onDeletePublication()"
      >
        Delete Publication
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters, mapActions } from "vuex";

// import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      publication: null,
    };
  },

  computed: {
    ...mapGetters("publication", ["getPublicationById"]),
    // day() {
    //   const { day } = getDayMonthYear(this.publication.date);
    //   return day;
    // },
    // month() {
    //   const { month } = getDayMonthYear(this.publication.date);
    //   return month;
    // },
    // yearDay() {
    //   const { yearDay } = getDayMonthYear(this.publication.date);
    //   return yearDay;
    // },
  },
  methods: {
    ...mapActions("publication", [
      "updatePublication",
      "createPublication",
      "deletePublication",
    ]),
    loadPublication() {
      let publication;
      if (this.id === "new") {
        publication = {
          title: "",
          description: "",
          content: "",
          comments: [],
        };
      } else {
        publication = this.getPublicationById(this.id);
        if (!publication) return this.$router.push({ name: "no-publication" });
      }

      this.publication = publication;
    },
    async savePublication() {
      new Swal({
        title: "Wait please",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      if (this.publication.id) {
        await this.updatePublication(this.publication);
      } else {
        const id = await this.createPublication(this.publication);
        console.log("id param: ", id);
        this.$router.push({ name: "publicationList" });
      }

      Swal.fire(
        "Publication Saved!",
        "The publication was saved successfully",
        "success"
      );
      Swal.fire({
        title: "Publication Saved!",
        text: "The publication was save successfully",
        icon: "success",
      });
    },

    async onDeletePublication() {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "If you delete, you will cant recover this publication",
        showDenyButton: true,
        confirmButtonText: "Yes, i am sure",
      });

      if (isConfirmed) {
        new Swal({
          title: "Wait please",
          allowOutsideClick: false,
        });
        Swal.showLoading();

        await this.deletePublication(this.publication.id);
        this.$router.push({ name: "publicationList" });
        Swal.fire({
          title: "Publication Deleted!",
          text: "The publication was delete successfully",
          icon: "success",
        });
      }
    },
  },

  created() {
    this.loadPublication();
  },

  watch: {
    id() {
      this.loadPublication();
    },
  },
};
</script>

<style>
</style>