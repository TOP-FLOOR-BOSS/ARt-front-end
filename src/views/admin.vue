<template>
  <table class="customTable">
    <thead>
      <tr>
        <th class="prod">Product</th>
        <th scoped="col">
          <!-- <a class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             </a> -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            + Add
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    New Product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Title:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="title"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Category:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="catergory"
                        v-model="catergory"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Product Description:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="product_description"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Image:</label
                      >
                      <input
                        type="url"
                        class="form-control"
                        id="recipient-name"
                        v-model="img"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Price:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="price"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary" @click="add">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </thead>

    <tbody v-if="products">
      <tr v-for="product in products" :key="product.id">
        <td>
          <img
            :src="product.img"
            alt=""
            class="image-fluid"
            style="width: 213px; height: 160px"
          />
        </td>
        <th scoped="col">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#update' + product.product_id"
            data-bs-whatever="@mdo"
          >
            Edit
          </button>

          <!-- modal -->
          <EditModal :product="product" />

          <button
            type="btn"
            class="btn btn-light"
            id="btnSubmit1"
            @click="this.$store.dispatch('deleteProduct', product.product_id)"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import EditModal from "@/components/EditModal.vue";

export default {
  props: ["products"],
  data() {
    return {
      title: "",
      catergory: "",
      product_description: "",
      img: "",
      price: "",
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    add() {
      return this.$store.dispatch("addProduct", {
        title: this.title,
        catergory: this.catergory,
        product_description: this.product_description,
        img: this.img,
        price: this.price,
      });
    },
  },
  components: { EditModal },
};
</script>

<style >
.btn {
  font-size: 20px;
}
.prod {
  font-size: 30px;
  text-decoration: underline;
  padding: 20px 15px;
  text-align: left;
  text-shadow: -5px 0 rgb(0, 0, 0), 0 8px rgb(0, 0, 0), 1px 0 black,
    0 -1px black;
  font-size: 65px;
  color: rgb(255, 255, 255);
}
h1 {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
  width: 80%;
  table-layout: fixed;
}

.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body {
  background: linear-gradient(-45deg, #9652ee, #863ce7, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
  height: 100%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
section {
  margin: 50px;
}
</style>