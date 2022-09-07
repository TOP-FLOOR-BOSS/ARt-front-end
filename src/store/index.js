import { createStore } from "vuex";
import router from "@/router";
import axios from "axios";

export default createStore({
  state: {
    user: null || JSON.parse(localStorage.getItem("user")),
    admin: false,
    users: null ,
    products: null,
    product: null,
    cart: null,
  },
  getters: {},

  mutations: {
    setusers: (state, users) => {
      state.users = users;
      // localStorage.setItem("user", JSON.stringify(users));
    },
    
    setuser: (state, user) => {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    setCart: (state, cart) => {
      state.cart = cart;
      console.log(cart);
    },

    setToken: (state, token) => {
      state.token = token;
    },

    setproducts: (state, products) => {
      state.products = products;
    },

    setproduct: (state, product) => {
      state.product = product;
    },
  },

  actions: {
    // adds user to db
    register: async (context, payload) => {
      console.log(payload);
      let res = await axios.post(
        "https://capt.herokuapp.com/register",
        payload
      );
      let data = await res.data;
      console.log(data);
    },

    getUsers: async (context) => {
      await fetch('https://capt.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
          context.commit("setusers", data.results);
        })
        
    },

    updateUser: async (context, payload) => {
      const { id, user_name, user_lastname, email, user_role,  } = payload;
      fetch(`https://capt.herokuapp.com/users/` + id, {
        method: "PUT",
        body: JSON.stringify({
          user_name: user_name,
          user_lastname: user_lastname,
          email: email,
          user_role: user_role 
}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getUsers", data.msg);
        });
    },

    deleteUser: async (context, id) => {
      fetch("https://capt.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getUser");
        });
    },
  //=========================== Products ===================================================

    // all products
    getProducts: async (context) => {
      await fetch("https://capt.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setproducts", data.results);
        });
    },

    //Single Product

    getProduct: async (context, id) => {
      await fetch("https://capt.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results[0]);
          context.commit("setproduct", data.results[0]);
        });
    },
    
    updateProduct: async (context, payload) => {
      const { id, title, catergory, product_description, img, price } = payload;
      fetch(`https://capt.herokuapp.com/products/` + id, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          catergory: catergory,
          product_description: product_description,
          img: img,
          price: price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts", data.msg);
        });
    },

    // Deletes product
    deleteProduct: async (context, id) => {
      // fetch("http://localhost:3000/products/" + id, {
      fetch("https://capt.herokuapp.com/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getProducts");
        });
    },


    /// add product
    addProduct: async (context, payload) => {
      const { title, img, product_description, price, quantity } = payload;
      fetch("https://capt.herokuapp.com/products/", {
        method: "post",
        body: JSON.stringify({
          title: title,
          img: img,
          product_description: product_description,
          price: price,
          quantity: quantity,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          context.dispatch("getProducts");
        });
    },

    //=========================== Login ===================================================

    // Login
    login: async (context, payload) =>{
      // const { email, user_password } = payload;
      fetch("https://capt.herokuapp.com/login", {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let { msg, token, results } = data;
          context.commit("setuser", data.results);
          setTimeout (() => {
            router.push("/genre")
          },2000)

        });
    },

    logout: (context) => {
      // window.location.reload()
      localStorage.removeItem("user");
      context.state.user = null
      console.log(context.state.user);
      // setTimeout(() => {
        router.push("/");
      // }, 3000);
      // if(results.user_role === 'user') {
      // }
    },

    //=========================== CArt ===================================================
    getCart: (context, id) => {
      if (context.state.user.user_id === null) {
        alert("Please Login");
      } else {
        id = context.state.user.user_id;
        fetch(`https://capt.herokuapp.com/users/${id}/cart`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.results != null) {
              context.commit("setCart", data.results);
            }
          });
      }
    },

    addToCart: async (context, product, id) => {
      console.log(product);
      if (context.state.user === null) {
        alert("Please Login");
      } else {
        id = context.state.user.user_id;
        fetch(`https://capt.herokuapp.com/users/${id}/cart`, {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "x-auth-token": context.state.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data != null) {
            context.dispatch("getCart", id);
            // }
          });
      }
    },

    DeletItem: async (context, product, id) => {
      console.log(product);
      id = context.state.user.user_id;
      fetch(`http://localhost:3000/users/${id}/cart/${product}`, {
        method: "DELETE",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data != null) {
          context.dispatch("getCart", id);
          // }
        });
    },

    adminGuy: (context) => {
      let user = context.state.user;
      if (user != null) {
        if (user.user_role === "admin") {
          context.state.admin = true;
        }
        context.dispatch("getCart");
      }
    },
  },

  modules: {},
});
