<template>

  <div class="landing">
    
    <div class="Header">
         <div class="text text-1">Welcome</div><div class="text text-2">To</div><div class="text text-3">Injured</div><div class="text text-4">Generation.</div>
    </div>
    
   
    <div class="content">

    <div class="d-grid gap-2  mx-auto">
      <button class="btn btn-outline-light" type="button">  
         <router-link to="/login" class="nav-link active">Login</router-link> 
        </button>
      <button class="btn btn-outline-light" type="button">Button</button>
    </div>

    </div>

  </div>

</template>
  
  <script>
export default {};
</script>
  
  <style >
.landing {
  height: 100vh;
  background: url(../assets/lightning_before_rain_by_bisbiswas_df98ppt.jpg)
    no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
}

/* .deepshadow {
  color: #edb200;
  background-color: rgba(66, 68, 75, 0.622);
  letter-spacing: 0.1em;
  font-size: 5rem;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 7px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);
} */

@import url("https://fonts.googleapis.com/css?family=Modak");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #151515;
    text-align: center
}

.text {
    height: 180px;
    display: inline-block;
    font-size: 90px;
    line-height: 84%;
    font-family: Modak;
    padding-left: 7px;
    padding-top: 25px;
    background-clip: text;
    color: transparent;
    text-shadow: 7px 7px 0px #d2d2d22e;
    height:fit-content;
    border-radius:10px ;
}

.Header{
    padding-top: 40px;
position: absolute;
align-content: center;
width: 50%;
}

.content{
position: absolute;
bottom: 1px;
width: 50%;
right: 20px;
font-family: 'Alfa Slab One', cursive;
font-size: 33px;
color: white;
}
.text-1 {
    color: white;

}

.text-2 {
    color: white;


}

.text-3 {
    color: white;

}

.text-4 {
    color: white;

    
}


</style>