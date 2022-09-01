<template>
  <div class="products mx-auto">
    <h1>All Products</h1>
    <div v-if="products">
      <div class="gallery">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="gallery-item"
        >
          <router-link
            class="product-btn"
            :to="{ name: 'product', params: { id: product.product_id } }"
          >
            <img
              :src="product.img"
              class="gallery-image img-fluid"
              :alt="product.title"
            />
          </router-link>
          <div class="middle">
            <div class="text">{{ product.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
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
  
  <style scoped>
@import url("https://fonts.googleapis.com/css?family=Modak");

* {
  background-image: url(../assets/giphy.gif);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.products {
  margin-top: 80px;
  max-width: 100rem;
  /* margin: 0 auto; */
  padding: 0 2rem 2rem;
}

.products h1 {
  font-family: "Modak", cursive;
  text-decoration: underline;
  font-size: 54px;
  color: khaki;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  /* Minimum width of 24rem and grow to fit available space */
  flex: 1 0 24rem;
  /* Margin value should be half of grid-gap value as margins on flex items don't collapse */
  margin: 19px;
  box-shadow: 12px 8px 9px rgba(0, 0, 0, 0.4);
  color: aliceblue;
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 90%;
  height: 90%;
  object-fit: fill;
  border-radius: 20px;
  transition: transform 400ms ease-out;
}

.gallery-image:hover {
  transform: scale(1.15);
}

.middle {
  font-size: 23px;
  font-style: italic;
  font-weight: 700;
}

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling. 

*/

/* .text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
} */
</style>
  