import { createStore } from 'vuex'
import { Router } from '/src/router/index'
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    users: null
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

  },
  actions: {
        // adds user to db
        register: async (context, payload) => { 
          // const {
          //   user_name,
          //   user_lastname,
          //   email,
          //   user_role,
          //   user_password,
          // } = payload;


          // await fetch("https://capt.herokuapp.com/register", {
          //     method: "POST",
          //     body: JSON.stringify({
          //       email: email,
          //       user_role: user_role,
          //       password: user_password,
          //     }),
          //     headers: {
          //       "Content-type": "application/json; charset=UTF-8",
          //       // "x-auth-token": context.state.token,
          //     },
          //   })
          //   .then((response) => response)
          //   .then(res => res.json())
          //   .then((data) => {
          //     if (data) {
          //       alert(data.msg);
          //       console.log(data);
          //       // let token = data.token;
          //       context.commit("setusers", user);
          //       // context.commit("setToken", token);
          //     } else {
          //       alert(data.msg);
          //       document.getElementById("register").reset();
          //     }
          //   });
          console.log(payload);
          let res = await axios.post('https://capt.herokuapp.com/register', payload);
          let data = await res.data;
          console.log(data);
        },
  },
  modules: {
  }
})
