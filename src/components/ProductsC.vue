<template>
  <div class="products mx-auto">
    <h1>Products</h1>

    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
          v-model="search"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
        <div class="dropdown">
          <button
            id="cat"
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Browse Category
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" value="Anime" @click="filt()">All</a>
            </li>
            <li>
              <a class="dropdown-item" value="Anime" @click="filt()">Anime</a>
            </li>
            <li>
              <a class="dropdown-item" value="Games" @click="filt()">Games</a>
            </li>
            <li>
              <a class="dropdown-item" value="Parallel Art" @click="filt()"
                >Parallel Art</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

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
            <div class="text">
              {{ product.title }} <br />
              <span>{ {{ product.category }} }</span>
            </div>
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
  props: ["product"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((products) => {
        let Match = true;
        if (!products.title.toLowerCase().includes(this.search.toLowerCase())) {
          Match = false;
        }
        return Match;
      });
    },

    methods: {
      filt() {
      return this.$store.state.products?.filter((products) => {
        let Match = true;
        if (!products.category.toLowerCase().includes(this.search.toLowerCase())) {
          Match = false;
        }
        return Match;
      });
    },
    }

  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css?family=Modak");

.products {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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

.products {
  max-width: 100rem;
  /* margin: 0 auto; */
  padding: 0 2rem 2rem;
}

.products h1 {
  font-family: "Modak", cursive;
  text-shadow: -5px 0 orangered, 0 8px orangered, 1px 0 orangered,
    0 -1px orangered;
  font-size: 67px;
  color: rgb(255, 255, 255);
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

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 35px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

#cat {
  width: 190px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  margin-left: 20px;
}

.text span {
  color: #00ff889f;
}
/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 480px;
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
}

@media screen and (max-width: 400px) {
  .search {
    width: 300px;
    position: relative;
    display: flex;
  }

  .gallery-image {
    width: 200px;
  }

  .gallery-item {
    width: 200px;
  }

  .middle {
    width: 200px;
  }
}
</style>
  