<template>
  


<!-- Start of Left Split Screen -->

<div class="left-container">
<router-link to="/products">

  <div id="l-one" class="card">
    <h1>  Gaming  </h1>
  </div>

</router-link>
</div>


<!-- Start of Center Split Screen -->
<div class="center-container">
  <router-link to="/products">

    <div id="c-one" class="card">
    <h1> Anime </h1>
  </div>

  </router-link>

</div>

<!-- Start of Right Split Screen -->
<div class="right-container">
  <router-link to="/products">
    <div id="r-one" class="card">
    <h1> Parallel Art</h1>
  </div>
  </router-link>


</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}


.left-container, 
.right-container,
.center-container {
  position:fixed;
  width:33.33%;
  height: 100%;
  /* overflow-y: scroll; */
	/* rotate: 3deg; */
  /* padding-top: 9px; */


}

.left-container {
  left:0;

  
}

.center-container {
  left:33.33%;
}

.right-container {
  left:66.66%;
}

.card {
  padding:50px;
  color:white;
  /* font-family: helvetica, arial, sans-serif; */
  font-weight: bold;
  font-size: 30px;
  height: 100vh;
  width:100%;
  
}
/* individual styles for left cards */
#l-one {
  background: url(../assets/kratos_god_of_war_4_by_zack_awesome_dc1i0t4.jpg);
  background-size: contain;
  font-family: 'Silkscreen', cursive;
  font-size: 39px;

  
}

/*effect-underline*/
#l-one:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 4px solid;
  margin-top: 7px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);  
  color: #7303f4;
}

#l-one:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);

}




/* individual styles for centered cards */
#c-one {
	background: url(../assets/73990.jpg);
  background-position:bottom;
  background-size: contain;
  font-family: 'Teko', sans-serif;
  font-size: 39px;
}

/*effect-underline*/
#c-one:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 4px solid;
  margin-top: 1px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
  color: #03ecf4;
}

#c-one:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}




/* individual styles for right cards */
#r-one {
background: url(../assets/bILLIE.jpg);
  background-position:bottom;
  background-size: contain;
  font-family: 'Rock Salt', cursive;
  font-size: 34px;
}

/*effect-underline*/
#r-one:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 4px solid;
  margin-top: 11px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
  color: rgb(213, 252, 255);

}

#r-one:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}


.subBtn {
  position: relative;
  display: inline-block;
  /* padding: 10px 20px; */
  color: #03e9f4;
  font-size: 26px;
  text-decoration: none;
  text-transform: uppercase;
  width: 60%;
  overflow: hidden;
  transition: .5s;
  /* margin-top: 520px; */
  letter-spacing: 4px;
  opacity: 80%;
}

.subBtn:hover {
  background: #230b27;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #43f403,
              0 0 25px #ffffff,
              0 0 50px #f403d4,
              0 0 100px #03f40f;
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
  50%,100% {
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
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
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
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
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
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>