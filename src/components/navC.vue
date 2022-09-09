<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |    
    <router-link to="/register">Register</router-link> |
    <router-link to="/products">Products</router-link> |

  </nav> -->

  <nav class="navbar hulu sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand">
        <i class="fa fa-arrows-alt"></i>
      </a>

      <span class="UseCart" tooltip="Get Down." flow="down">
        <router-link to="/login">
          <a><i class="fa fa-sign-in"></i> </a>
        </router-link>

        |

        <router-link to="/user">
          <a><i class="fa fa-user"></i></a>
        </router-link>
        |

        <router-link to="/cart">
          <a><i class="fa fa-shopping-cart"></i></a>
        </router-link>
      </span>

      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcvas-title" id="offcanvasNavbarLabel">
            <a class="navbar-brand">
              <i class="fa fa-arrows-alt"></i>
            </a>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link">
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <span class="icon"></span>
                  Home
                </a>
              </router-link>
            </li>
            
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/genre">
                  <i class="fa fa-cubes" aria-hidden="true"></i>
                  <span class="icon"></span>
                  Products</router-link
                ></a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <span class="icon"></span>
                <router-link to="/register">Register</router-link></a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span class="icon"></span>
                <router-link to="/contact">Contact</router-link></a
              >
            </li>

            <div v-if="admin">
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fa fa-bomb" aria-hidden="true"></i>
                  <span class="icon"></span>
                  <router-link to="/admin">Product Admin</router-link></a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                  <span class="icon"></span>
                  <router-link to="/Useradmin">User Admin</router-link></a
                >
              </li>
            </div>
          </ul>
        </div>

        <button id="logsOUT" type="button" @click="logout">
          Log out <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";
export default {
  mounted() {
    this.$store.dispatch("adminGuy");
  },

  computed: {
    user() {
      return this.$store.state.user;
    },

    admin() {
      return this.$store.state.admin;
    },
  },

  methods: {
    logout() {
      // this.$store.dispatch("logout");
      localStorage.removeItem("user");
      this.$store.state.user = null;
      // console.log(context.state.user);
      // setTimeout(() => {
      router.push("/");
      // }, 3000);
      // if(results.user_role === 'user') {
      // }
    },
  },
};
</script>


<style scoped>
.hulu {
  background: linear-gradient(-40deg, #ffffff, #9ca4ff, #d6aaff, #ffffff);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  /* padding-bottom: 12px; */
  min-height: 10vh;
}

.offcanvas-body {
  background: url(../assets/63fbdf26ce09b08283d2d1daae0c5865.jpg);
  background-position: bottom;
}

.navbar-nav {
  font-size: 24px;
}
.icon {
  margin: 10px;
}

.UseCart {
  position: absolute;
  right: 90px;
  font-size: 37px;
}

.navbar-brand {
  font-size: 40px;
  rotate: 50%;
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

#logsOUT {
  font-size: 30px;
}
</style>