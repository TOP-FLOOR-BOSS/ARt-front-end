<template>
  <div class="login-box">
    <h2 class="headings">Register</h2>
    <form @submit.prevent="register" id="register">
      <div class="row">

        <div class="col ">
          <div class="mb-3 user-box">
            <label class="form-label">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control "
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
        </div>

        <div class="col">
          <div class="mb-3 user-box">
            <label class="form-label">Name</label>
            <input
              type="text"
              v-model="user_name"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 user-box">
            <label class="form-label">Surname</label>
            <input
              type="text"
              v-model="user_lastname"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="subBtn btn">Submit</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      user_password: "",
      user_name: "",
      user_lastname: "",
    };
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        email: this.email,
        user_password: this.user_password,
        user_name: this.user_name,
        user_lastname: this.user_lastname,
      });
    },
  },

  computed: {
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

  <style>

@import url("https://fonts.googleapis.com/css?family=Modak");

.headings {
  font-family: "Modak", cursive;
  font-size: 64px;
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
  display: block;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 600px;
  padding: 80px;
  transform: translate(-50%, -50%);
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
  padding: 10px 20px;
  color: #03e9f4;
  background-color: white;
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

.subBtn span {
  position: absolute;
  display: block;
}

.subBtn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.subBtn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.subBtn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.subBtn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

@media screen and (max-width: 467px) {
  .login-box{
    width: 370px;
  }

  .form-label{
    width: 30px;
  }
}
</style>
  