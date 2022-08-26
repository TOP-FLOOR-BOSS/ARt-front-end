<template>

<div>

<h1>Register</h1>
<form @submit.prevent="register" id="register">
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" v-model="user_password" class="form-control" id="exampleInputPassword1">
  </div>
    <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" v-model="user_name" class="form-control" id="exampleInputPassword1">
  </div>
    <div class="mb-3">
    <label class="form-label">Surname</label>
    <input type="text" v-model="user_lastname" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Keep me updated</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>


</template>

<script>


export default {
  name : 'Register',
  data(){
    return{
        email : '',
        user_password : '',
        user_name: '',
        user_lastname: ''

    };
  },
  methods: {
    register(){
      return this.$store.dispatch("register", {
        email : this.email,
        user_password : this.user_password,
        user_name: this.user_name,
        user_lastname: this.user_lastname
      })
    }
  },

    computed: {
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },

}

  






</script>
