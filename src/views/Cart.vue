<template>
  <div class="container">
    <h2 class="CardH">Cart</h2>
    <div class="row">
      <div v-if="cart">
        <div class="about">
          <div
            class="card mx-auto"
            style="width: 32rem"
            v-for="c in cart"
            :key="c.product_id"
          >
            <h1 class="title">{{ c.title }}</h1>
            <img :src="c.img" class="card-img-top img-fluid" :alt="c.title" />
            <div class="card-body" id="floaty">
              <p class="card-text">
                {{ c.product_description }}
              </p>
              <div class="product-btns">
                <button
                  @click="this.$store.dispatch('DeletItem', c.product_id)"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="spinner-border"
          style="width: 3rem; height: 3rem"
          role="status"
        >
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
  },
};
</script>
  
  <style scoped>
        @import url("https://fonts.googleapis.com/css?family=Modak");


    .container{
      background-color: black;
      width: 100%;
    }

.card{
  background: #34495e;
  box-shadow: 0 12px 22px #e73c7e, 0 19px 38px #23a6d5, 0 15px 12px #23d5ab;
  margin: 22px;
}

.card-img-top{
  height: 370px;
}

.CardH{
  font-family: "Modak", cursive;
      color: #dd5;
      text-shadow: -5px 0 rgb(255, 255, 255), 0 8px rgb(0, 0, 0), 1px 0 black, 0 -1px black;
      font-size: 65px;
}

.title{
  font-family: "Modak", cursive;
  color: white;

}

.card-text{
  color: white;
  font-size: 19px;
}

</style>