<template>
  <div class="login-box">
    <h2 class="headings">Login</h2>
    <form @submit.prevent="login" id="login">
      <div class="mb-3 user-box">
        <label class="form-label">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3 user-box">
        <label class="form-label">Password</label>
        <input
          type="password"
          v-model="user_password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="subBtn btn btn-light" @click="login()">
        Submit
      </button>
      <p class="form-text font-white fs-5 f-white">
        Dont Have an account? <router-link to="/register" class="subBtn2">Sign up</router-link>
      </p>
    </form>
  </div>

  

</template>
  
<script>
export default {
  data() {
    return {
      email: "",
      user_password: "",
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        user_password: this.user_password,
      };
      this.$store.dispatch("login", user);
    },
  },
};
</script>
  
  <style>


@import url("https://fonts.googleapis.com/css?family=Modak");

.headings {
  font-family: "Modak", cursive;
  font-size: 54px;
  text-shadow: -5px 0 black, 0 8px black, 1px 0 black, 0 -1px black;
  color: black;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(../assets/High_resolution_wallpaper_background_ID_77701497328.jpg)
    no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
}

.login-box {
  position: absolute;
  top: 52%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(242, 180, 209, 0.626);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(174, 47, 47, 0.672);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 26px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: relative;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.subBtn {
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.subBtn:hover {
  background: #7704c9;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #f4031b, 0 0 50px #03e9f4,
    0 0 100px #f4e003;
}


.subBtn2{
  color: #000000;
  font-size:  16px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 50px;
  letter-spacing: 4px;
}

.subBtn2:hover{
  background: #7704c9;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #f4031b, 0 0 50px #03e9f4,
    0 0 100px #f4e003;
}
</style>