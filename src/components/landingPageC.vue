<template>
  <div id="mainframe">
    <section>
      <div class="title">
        <h3>Unapalgetic Art</h3>
        <h1>Welcome to ....</h1>
      </div>
    </section>

    <section>
      <div class="parallax-one">
        <h2>Injured Generation</h2>
      </div>
      <div>

        <svg class="arrows" >
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>

      </div>
      <div class="content"></div>
    </section>

    <section id="about">
      <div class="block">
        <p>
          <span class="first-character sc">I</span> What is Injured Generation?
          Our website is an art gallery that defies all law of ordinary art, we
          do auctions, in art that might satisfy your need for a beutiful
          painting in the dining room.
        </p>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10">
          The IG (Injured Generation) brand began to symbolize those who
          embraced art that is differnet and accepts their true honest selfs.
          More than that, an special connection and a true feeling of each
          artist through their artwork, just as I had envisioned. People didn't
          just like abstract art, they fell in love with it and even inspired
          others to pick a brush. By the end of the 20's I envision a setting
          where style, and fashion would change on a scale, almost like an
          escpae from reality and the every day norm - in my mind people would
          embrace themselves through the inspiration of these art work on
          display, they wouldnt think twice on what to wear, instead it should
          spark creativity and confidence within these individuals. By 2050, a
          love art should be on everyon's heart, no matter how simple or how
          abstract, its the beuty within.
        </p>
        <router-link to="/login"
          ><button type="submit" id="mutton" class="subBtn btn btn-light">
            Sign In
          </button></router-link
        >
      </div>
    </section>
  </div>
</template>

  <script >
export default {};
</script>
  
  <style scoped>

@import url("https://fonts.googleapis.com/css?family=Modak");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");

@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,700);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic);

#mutton {
  display: flex;
  float: right;
  /* padding: 10px 20px; */
  color: #6f03f4;
  background: #e2b0ffaa;
  font-size: 36px;
  text-decoration: bold;
  text-transform: uppercase;
  width: 97%;
  transition: 0.5s;
  letter-spacing: 4px;
  top: 97%;
  font-family: "Modak", cursive;
  border-bottom: 5px solid black;
  /* opacity: 80%; */
}

#mutton:hover {
  background: #230b27;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f45f03, 0 0 25px #ffbf00, 0 0 50px #f40303,
    0 0 100px #f4ec03;
}

#mutton span {
  position: absolute;
  display: block;
}

#mutton span:nth-child(1) {
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


/* Typography */
/**************************/
#mainframe h1 {
  font-family: "Modak", cursive;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: black;
  padding: 0;
  margin: 0;
}
#mainframe h2 {
  font-family: "Modak", cursive;
  font-size: 80px;
  letter-spacing: 10px;
  text-align: center;
  color: rgb(255, 255, 255);
  text-shadow: -5px 0 black, 0 8px black, 1px 0 black, 0 -1px black;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
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


#mainframe h3 {
  font-family: "Modak", cursive;
  font-size: 14px;
  line-height: 0;
  font-weight: 400;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: black;
}
#mainframe p {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.first-character {
  font-weight: 500;
  float: left;
  font-size: 94px;
  line-height: 64px;
  padding-right: 8px;
  font-family: "Source Sans Pro", sans-serif;
}



/* Section - Title */
/**************************/
#mainframe .title {
  background: white;
  padding: 50px;
  text-align: center;
}
#mainframe .title h1 {
  font-size: 45px;
  letter-spacing: 8px;
}

/* Section - Block */
/**************************/
#mainframe .block {
  background: white;
  padding: 60px;
  width: 820px;
  margin: 0 auto;
  text-align: justify;
}
#mainframe .block-gray {
  background: #f2f2f2;
  padding: 60px;
}


/* Section - Parallax */
/**************************/
#mainframe .parallax-one {
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/david-martos-colossus.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}


/* Media Queries */
@media screen and (max-width: 959px) and (min-width: 468px) {
  #mainframe .block {
    padding: 40px;
    width: 620px;
  }
}
@media screen and (max-width: 567px) {
  #mainframe .block {
    padding: 30px;
    width: 420px;
  }
  #mainframe h2 {
    font-size: 30px;
  }
  #mainframe .block {
    padding: 30px;
  }
  #mainframe .parallax-one{
    padding-top: 100px;
    padding-bottom: 100px;
    width: 400px;
  }

  .arrows{
	width: 20px;
	height: 32px;
  }
 
}
@media screen and (max-width: 479px) {
  #mainframe .block {
    padding: 30px 15px;
    width: 290px;
  }
}

/* Arrow CSS */

.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
}
.arrows path {
	stroke: #000000;
	fill: transparent;
	stroke-width: 4px;	
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
}


@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; 
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; 
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; 
}
</style>