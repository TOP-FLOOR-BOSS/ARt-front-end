<template>
    <h2>Products</h2>
    <div v-if="products">
      <div class="about">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="card"
          style="width: 18rem"
        >
          <img src="{{product.img}}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.product_description }}
            </p>
                  <div class="product-btns">
                    <router-link class="product-btn" :to="{name: 'single', params: {id: product.product_id}}"
                      ><span>More Info</span><i></i
                    ></router-link>
                  </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading.....</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
  
    mounted() {
      this.$store.dispatch("getProducts");
    },
  };
  </script>
  
  <style>
  </style>
  