<template>
<div class="container">
    <h2 class="display-2">Cart</h2>
    <div class="row">
        <div v-if="cart">
          <div class="about ">
            <div
              class="card mx-auto"
              style="width: 32rem"
            v-for="c in cart" :key="c.product_id">
                <h1 class="title">{{ c.title }}</h1>
              <img :src="c.img" class="card-img-top" :alt="c.title" />
              <div class="card-body" id="floaty" >
                <p class="card-text">
                  {{ c.product_description }}
                </p>
                <div class="product-btns">
                 <button  @click="this.$store.dispatch('DeletItem',c.product_id)"  >Remove from Cart</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>        
        </div>
    </div>
</div>

  </template>
  
  <script>
    export default {
    props: ["product_id"],
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      
    },
    mounted() {
      this.$store.dispatch("getCart");
  }

  };
  </script>
  
  <style scoped>
  #cart {
    min-height: 100vh;
  }
  </style>