<template>
  
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |    
    <router-link to="/register">Register</router-link> |
    <router-link to="/products">Products</router-link> |

  </nav> -->

  <nav class="navbar hulu fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" ><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" ><router-link to="/genre">Products</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" ><router-link to="/genre">About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page"><router-link to="/register">Register</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style>

.hulu {
  background: linear-gradient(-45deg, #5608cb, #ffffff, #2124ff, #000000);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
</style>