<template>
  <h1>Single view</h1>
  <div v-if="product">
    <div class="about">
      <div
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
           <button>Purchase</button> 
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
      product() {
        return this.$store.state.product;
      },
  
     user(){
          return this.$store.state.user
        }
  
    },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  }

};

</script>

<style>
</style>