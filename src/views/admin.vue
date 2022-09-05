<template>
  <table class="customTable">
    <thead>
      <tr>
        <th>product_id</th>
        <th>title</th>
        <th>category</th>
        <th>product_description</th>
        <th>img</th>
        <th>price</th>
        <th>quantity</th>
        <th>created_by</th>    
        
        <th scoped="col" >
            <!-- <a class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             </a> -->
            <button id="btnSubmit1" class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             + Add</button>
        </th>
      </tr>
    </thead>


          
    <tbody v-if="products">
      <tr v-for="product in products" :key="product.id">
        <td>{{ product_id }}</td>
        <td>{{ title }}</td>
        <td>{{ category }}</td>
        <td>{{ product_description }}</td>
        <td>
          <img :src="product.img" alt="" style="width: 113px; height: 100px" />
        </td>
        <td>{{ price }}</td>
        <td>{{ quantity }}</td>
        <td>{{ created_by }}</td>

        <th scoped="col">
          <button
            id="btnSubmit1"
            class="btn"
          >
            Edit
          </button>
        </th>
        <button
          type="btn"
          class="btn"
          id="btnSubmit1"
        >
          Delete
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>   

import AdminModal from "@/components/AdminModal.vue";

export default {
    components :{AdminModal},
  mounted() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
}

};
</script>

<style>
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
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
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