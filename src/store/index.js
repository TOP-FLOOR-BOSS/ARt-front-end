import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    users: null,
    products: null,
    product: null
  },
  getters: {
  },


  mutations: {
    setusers: (state, users) => {
      state.users= users;
    },

    setToken: (state, token) => {
      state.token = token;
    },

    setproducts: (state, products) => {
      state.products = products
    },

    setproduct: (state, product) => {
      state.product = product
    }

  },
  actions: {
        // adds user to db
        register: async (context, payload) => { 
          console.log(payload);
          let res = await axios.post('https://capt.herokuapp.com/register', payload);
          let data = await res.data;
          console.log(data);
        },

        //Logsin
        // login: async (context, payload) => { 
        //   console.log(payload);
        //   let res = await axios.post('https://capt.herokuapp.com/register', payload);
        //   let data = await res.data;
        //   console.log(data);
        // },



        // all products
        getProducts: async (context) => {
          await fetch("https://capt.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
              context.commit("setproducts", data.results)});
        },

        //Single Product

        getProduct: async (context, id) => {
          await fetch("https://capt.herokuapp.com/products/" + id)
            .then((res) => res.json())
            .then((data) => {
              console.log(data.results[0]);
              context.commit("setproduct", data.results[0])});
        },


        login(context, payload){
          const { email, user_password } = payload
          fetch('https://capt.herokuapp.com/login', {
          method: 'PATCH',
          body: JSON.stringify({
              email: email,
              user_password: user_password,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          })
          .then((response) => response.json())
          .then((data) => {
            let {msg, token, results} = data;
            // if (data.msg == 'Email Not Found. Please register') {
            //   alert(data.msg)
            // } else {
            //   if (data.msg == 'Password is Incorrect') {
            //     alert(data.msg)
            //   } else {
            //     alert(`Welcome, ${data.user[0].user_name}`)
            //     context.commit('setusers',data.user[0])
            //     context.commit('setToken',data.token)
            //     // context.dispatch('setusers')
            //     setTimeout(()=>{
            //       router.push('/about'), 3000
            //     })
            //   }
            // }
            if(msg == 'Logged in') {
              context.commit('setusers',results);
              context.commit('setToken',token);
              if(results.user_role === 'user') {
                setTimeout(()=>{
                  router.push('/genre'), 3000
                })
              }else {
                // setTimeout(()=>{
                //   router.push('/admin'), 3000
                // })
              }
            }
    
          });
    
        },

  },
  modules: {
  }
})
