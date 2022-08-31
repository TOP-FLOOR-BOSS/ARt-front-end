<template>
  <h1>Single view</h1>

  <div v-if="product">
    <div class="about ">
      <div
        class="card mx-auto"
        style="width: 32rem"
      >
          <h1 class="title">{{ product.title }}</h1>
        <img :src="product.img" class="card-img-top" :alt="product.title" />
        <div class="card-body" id="floaty" >
          <p class="card-text">
            {{ product.product_description }}
          </p>
          <div class="product-btns">
           <button  @click="this.$store.dispatch('addToCart',product )"  >Add to Cart</button> 
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
props: ["id"],
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
  },

  methods: {
     add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },

};

</script>

<style scoped>
#floaty{
  display: block;
  float: left;
}

</style>