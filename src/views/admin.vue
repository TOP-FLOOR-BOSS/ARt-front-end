<template>
  <table class="customTable">
    <thead>
      <tr>
        <th class="prod">product</th>

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
                  <button type="button" 
                  class="btn btn-primary"
                  @click="add">
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
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Edit
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
                    Edit
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
                  <button type="button" 
                  class="btn btn-primary"
                  @click="edit">
                    Edit Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button type="btn" class="btn" id="btnSubmit1">Delete</button>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>


export default {
  data() {
    return {
      title:"",  
      catergory: "",
      product_description:"",
      img:"",
      price:"",

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

  methods : {
    add() {
      return this.$store.dispatch("addProduct",{
        title : this.title,
        catergory : this.catergory,
        product_description : this.product_description,
        img : this.img,
        price : this.price

      })
    },

    update() {
      return this.$store.dispatch("updateProduct", this.product)
    }
  }
};
</script>

<style>
.prod {
  font-size: 30px;
  text-decoration: underline;
  padding: 20px 15px;
  text-align: left;
  
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
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
/* th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
} */
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
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: "Roboto", sans-serif;
  padding-top: 50px;
}
section {
  margin: 50px;
}

/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #f50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}
</style>