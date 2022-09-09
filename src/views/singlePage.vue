<template>
  <section class="cl">
    <div v-if="product" class="container">
      <div class="left">
        <img :src="product.img" class="img-fluid" :alt="product.title" />
      </div>

      <div class="right">
        <h1>{{ product.title }}</h1>
        <p class="subHeader">Created By<br />In Stock</p>
        <div class="tabs">
          <ul>
            <li>
              <a href="#tab1"><span></span></a>
            </li>
            <li>
              <a href="#tab2"><span></span></a>
            </li>
            <li>
              <a href="#tab3"><span></span></a>
            </li>
          </ul>
          <div id="tab1">
            <p>
              {{ product.product_description }}
            </p>
            <div class="priceContainer">
              <div>
                <svg id="ratingsSVG" viewBox="0 0 250 45.59">
                  <polygon
                    class="starFull"
                    points="23.97 0 31.37 15.01 47.93 17.41 35.95 29.09 38.78 45.59 23.97 37.8 9.15 45.59 11.98 29.09 0 17.41 16.56 15.01 23.97 0"
                  />
                  <polygon
                    class="starFull"
                    points="74.48 0 81.89 15.01 98.45 17.41 86.47 29.09 89.3 45.59 74.48 37.8 59.67 45.59 62.5 29.09 50.52 17.41 67.08 15.01 74.48 0"
                  />
                  <polygon
                    class="starFull"
                    points="125 0 132.41 15.01 148.97 17.41 136.98 29.09 139.81 45.59 125 37.8 110.19 45.59 113.02 29.09 101.03 17.41 117.59 15.01 125 0"
                  />
                  <polygon
                    class="starFull"
                    points="175.52 0 182.92 15.01 199.48 17.41 187.5 29.09 190.33 45.59 175.52 37.8 160.7 45.59 163.53 29.09 151.55 17.41 168.11 15.01 175.52 0"
                  />
                  <polygon
                    class="starEmpty"
                    points="226.03 0 233.44 15.01 250 17.41 238.02 29.09 240.84 45.59 226.03 37.8 211.22 45.59 214.05 29.09 202.07 17.41 218.63 15.01 226.03 0"
                  />
                </svg>
              </div>
              <p class="price"><span>R1,000,000</span>R{{ product.price }}</p>
            </div>
          </div>
          <div id="tab2">
            <p>10 outta 10</p>
          </div>
          <div id="tab3">
            <div class="sizeContainer">
              <h2>Size:</h2>
              <input type="radio" name="size" value="S" id="r1" />
              <label for="r1" id="r1l">S</label>
              <input type="radio" name="size" value="M" id="r2" />
              <label for="r2" id="r2l">M</label>
              <input type="radio" name="size" value="L" id="r3" checked />
              <label for="r3" id="r3l">L</label>
              <input type="radio" name="size" value="XL" id="r4" />
              <label for="r4" id="r4l">XL</label>
              <input type="radio" name="size" value="XXL" id="r5" />
              <label for="r5" id="r5l">XXL</label>
            </div>
          </div>
        </div>
        <!-- .tabs -->
        <div class="cart">
          <router-link to="/products"
            ><button class="return">Continue Shopping</button></router-link
          >
          <div>
            <div class="selectContainer">
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button
              @click="this.$store.dispatch('addToCart', product)"
              class="confirm"
            >
              <i class="fa-solid fa-cart-shopping"></i>Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- .right -->
    </div>

    <div v-else>
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden"><p>Loading.....</p></span>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },

    user() {
      return this.$store.state.user;
    },
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
.cl {
  background: #191919;
  height: 900px;
  padding-top: 1px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: #efefef;
  width: 1000px;
  margin: 20vh auto;
  /* #ee7752, , #23a6d5, #23d5ab */
  box-shadow: 0 15px 12px #e73c7e, 0 19px 38px #23a6d5, 0 15px 12px #23d5ab;
  border-radius: 5px;
  display: flex;
  min-height: 500px;
}
.left {
  background-color: #dbdbdb;
  width: 60%;
  border-radius: 5px 0 0 5px;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}
div.right {
  width: 66%;
  padding: 30px;
}
p.subHeader {
  font-size: 0.8em;
}
/* JQuery tabs styling */
.ui-tabs {
  margin-top: 15px;
}
.ui-tabs-nav {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.ui-tabs-nav li {
  width: 100%;
  outline: none;
  border-bottom: 3px solid #e4e4e4;
}
.ui-tabs-nav li a {
  color: #808080;
  transition: color 0.2s;
}
.ui-tabs-nav li:hover a {
  color: #323232;
}
.ui-tabs-active {
  font-weight: 900;
  position: relative;
}
.ui-tabs-active::after {
  content: "";
  width: 90%;
  border-bottom: 2px solid #323232;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.ui-tabs-anchor {
  width: 100%;
  outline: none;
  text-decoration: none;
  font-size: 1.2em;
}
.ui-tabs-active .ui-tabs-anchor {
  color: #323232 !important;
}
.ui-tabs-panel {
  padding-top: 15px;
  height: 400px !important;
}

/* Input styling */
h2 {
  font-weight: 300;
  font-size: 1.2em;
}
div.sizeContainer {
  margin-bottom: 35px;
}
div.colorContainer {
  margin-bottom: 35px;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label::before {
  animation: ripples 0.4s ease-out forwards;
}
@keyframes ripples {
  0% {
    transform: scale(1);
    opacity: 1;
    border: 2px solid #dbdbdb;
  }
  20% {
    transform: scale(1.2);
    opacity: 1;
    border: 2px solid #dbdbdb;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
    border: 2px solid rgba(255, 0, 0, 0.51);
  }
}
label::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
}
label {
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: inline-block;
  text-align: center;
  border-radius: 100%;
  line-height: 40px;
  font-size: 1.2em;
  margin: 10px 10px 0 0;
  position: relative;
}
label {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
div.sizeContainer label {
  background-color: #dbdbdb;
  border: 1px solid #dbdbdb;
  font-weight: 300;
  transition: all 0.2s;
  opacity: 0.7;
}
div.sizeContainer label:hover {
  opacity: 1;
}
div.sizeContainer input[type="radio"]:checked + label {
  border: 1px solid #323232;
  font-weight: 700;
  opacity: 1;
}
div.colorContainer label {
  color: #efefef;
}
div.colorContainer label::after {
  opacity: 0;
  width: 100%;
  left: 0;
  content: "\2713";
  position: absolute;
  transition: opacity 0.2s;
}
div.colorContainer label:hover::after {
  opacity: 0.4;
}
div.colorContainer input[type="radio"]:checked + label::after {
  content: "\2714";
  position: absolute;
  width: 100%;
  left: 0;
  opacity: 1;
}
label[for="r6"] {
  background-color: #d62626;
}
label[for="r7"] {
  background-color: #2980b9;
}
label[for="r8"] {
  background-color: #7f8c8d;
}
label[for="r9"] {
  background-color: #191919;
}

/* Shopping buttons styling */
div.cart {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
div.cart button {
  border: none;
  padding: 15px;
  font-weight: 400;
  font-size: 1.2em;
  font-family: "Lato", sans-serif;
}
div.cart div {
  display: flex;
  justify-content: flex-end;
}
div.cart button.return {
  background-color: #b7b9b9;
  transition: background-color 0.3s;
  font-weight: 300;
  color: #fcfcfc;
}
div.cart button.return:hover {
  background-color: #a7a9a9;
  cursor: pointer;
}
div.cart input[type="number"] {
  width: 20%;
  text-align: center;
}
select {
  padding: 15px 5px 15px 15px;
  font-size: 1.2em;
  background-color: rgba(219, 219, 219, 0.51);
  color: #323232;
  font-family: "Lato", sans-serif;
}
button.confirm {
  display: flex;
  align-items: center;
  background-color: #2ecc71;
  color: #fff;
  transition: background-color 0.3s;
}
button.confirm:hover {
  background-color: #29b464;
  cursor: pointer;
}

/* ######################## 012 Single Product Page styling ######################## */

#tab1 p {
  line-height: 1.4;
  opacity: 0.9;
}
#tab1 ul {
  list-style-position: inside;
  opacity: 0.9;
}
#tab1 ul li {
  padding-top: 10px;
  font-weight: 700;
}
#tab1 p.price {
  font-size: 2.6em;
  font-weight: 900;
  margin-right: 15px;
  line-height: normal;
}
p.price span {
  text-decoration: line-through;
  opacity: 0.3;
  font-weight: 300;
  font-size: 0.7em;
  margin-right: 10px;
}
#tab1 div.priceContainer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
}
#ratingsSVG {
  width: 70%;
  /*margin-top: 5px;*/
  height: 50px;
}
.starFull {
  fill: #fecb3b;
}
.starEmpty {
  fill: #95a5a5;
}

/* .product-price-btn button {
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
} */
</style>