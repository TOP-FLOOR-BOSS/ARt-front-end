<template>
    <div
      class="modal fade"
      id="addnew"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Art</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 mx-auto">
               <!-- name -->
                <div class="mb-3">
                  <label for="addName" class="form-label">Product Title:</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="title"
                    name="addtitle"
                    id="addtitle"
                    placeholder="Enter title Name:"
                    required
                  />
                </div>
              <!-- image -->
                <div class="mb-3">
                  <label for="addImage" class="form-label">Image</label>
                  <input
                    class="form-control"
                    type="text"
                    name="addImage"
                    id="addImage"
                    v-model="img"
                    placeholder="Add image url"
                  />
                </div>

                <!-- description -->
                  <div class="mb-3">
                  <label for="adddescription" class="form-label">Description</label>
                  <input
                    class="form-control"
                    type="text"
                    name="artDescription"
                    id="artDescription"
                    v-model="product_description"
                    placeholder="description"
                  />
                </div>
              
                <!-- price -->
                <div class="mb-3">
                  <label for="addPrice" class="form-label">category</label>
                  <input
                    class="form-control"
                    type="number"
                    name="addPrice"
                    id="addPrice"
                    v-model="category"
                    placeholder="Add Price"
                  />
                </div>
  
                <!-- model -->
                <div class="mb-3">
                  <label for="addPrice" class="form-label">Price</label>
                  <input
                    class="form-control"
                    type="number"
                    name="addModel"
                    id="addModel"
                    v-model="price"
                    placeholder="car release date"
                  />
                </div>
                <!-- body type -->
                  <div class="mb-3">
                  <label for="adddescription" class="form-label">quantity</label>
                  <input
                    class="form-control"
                    type="text"
                    name="bodyType"
                    id="bodyType"
                    v-model="quantity"
                    placeholder="body type"
                  />
                </div>
              </div>
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
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="add"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  <script>
  export default {
    data() {
      return {
        title:"",  
        img: "https://i.postimg.cc/LsvJSbxH/the-logo.jpg",
        image2:"https://i.postimg.cc/LsvJSbxH/the-logo.jpg",
        product_description:"",
        price:"",
        quantity:"",
      };
    },
    methods: {
      add() {
        return this.$store.dispatch("addProduct", {
          title:this.title, 
          img:this.img,
          image2:this.image2,
          image3:this.image3,
          image4:this.image4,
          product_description:this.product_description,
          price:this.price,
          quantity:this.quantity,
          
        });
      },
    },
  };
  </script>