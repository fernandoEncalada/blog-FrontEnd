<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="newCategoryModal"
    tabindex="-1"
    aria-labelledby="newCategoryModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newCategoryModalLabel">
            Create category
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Name</label
            >
            <input
              v-model="category.name"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Web"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-success" @click="saveCategory()">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  name: "NewCategory",
  data() {
    return {
      category: null,
    };
  },
  methods: {
    ...mapActions("category", ["createCategory"]),

    loadCategory() {
      let category;
      category = {
        name: "",
      };
      this.category = category;
    },
    async saveCategory() {
      new Swal({
        title: "Wait please",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      await this.createCategory(this.category);

      Swal.fire(
        "Category Saved!",
        "The category was saved successfully",
        "success"
      );
    //   $('#newCategoryModal').modal('hide');
//       var $modal = $('#newCategoryModal');
// $modal.on('hidden.bs.modal', function(e) {
//     console.log(e); 
//   return this.render(); //DOM destroyer
// });

// $modal.modal('hide');

    },
  },
  created(){
    this.loadCategory();
  }
};
</script>

<style>
</style>