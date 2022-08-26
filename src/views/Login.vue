<template>
  <h1>Login</h1>

  <form @submit.prevent="login" id="login">
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input
        type="password"
        v-model="user_password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click="login()">Submit</button>
  </form>
</template>

<script>

export default {
    data(){
      return{
          email: '',
          user_password: '',
      }
    },
    methods:{
      login(){
        const user = {
            email: this.email,
            user_password: this.user_password
        }
      this.$store.dispatch('login', user) 
      }
    }
};
</script>

<style>
</style>