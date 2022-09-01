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
    </section>

    <section >
      <div class="block">
        <p>
          <span class="first-character sc">I</span> What is Injured Generation?
          Our website is an art gallery that defies all law of ordinary art, we
          do auctions, in art that might satisfy your need for a beutiful
          painting in the dining room.
        </p>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10">
          The UGG brand began to symbolize those who embraced sport and a
          relaxed, active lifestyle. More than that, an emotional connection and
          a true feeling of love began to grow for UGG boots, just as Brian had
          envisioned. People didn't just like wearing UGG boots, they fell in
          love with them and literally could not take them off. By the end of
          the 90's, celebrities and those in the fashion world took notice of
          the UGG brand. A cultural shift occurred as well - people were
          embracing, and feeling empowered, by living a more casual lifestyle
          and UGG became one of the symbols of this lifestyle. By 2000, a love
          that began on the beaches had become an icon of casual style. It was
          at this time that the love for UGG grew in the east, over the Rockies
          and in Chicago. In 2000, UGG Sheepskin boots were first featured on
          Oprah's Favorite Things® and Oprah emphatically declared that she
          "LOOOOOVES her UGG boots." From that point on, the world began to
          notice.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint distinctio, debitis harum, tenetur inventore delectus, neque illo esse ipsa amet modi ea itaque earum quae qui. Nam, quasi quod?
        </p>
         <router-link to="/login"><button type="submit" id="mutton" class="subBtn btn btn-light">Browse</button></router-link>  
      </div>



    </section>
  </div>
</template>

  <script >
export default {};
</script>
  
  <style scoped>
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
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");

@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,700);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic);

/* Override UGG site */
#mutton {
  display: flex;
  float: right;
  /* padding: 10px 20px; */
  color: #6f03f4;
  font-size: 36px;
  text-decoration: bold;
  text-transform: uppercase;
  width: 97%;
  transition: .5s;
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
  box-shadow: 0 0 5px #f45f03,
              0 0 25px #ffbf00,
              0 0 50px #f40303,
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
  50%,100% {
    left: 100%;
  }
}


#main {
  width: 100%;
  padding: 0;
}
.content-asset p {
  margin: 0 auto;
}
.breadcrumb {
  display: none;
}

/* Helpers */
/**************************/
.margin-top-10 {
  padding-top: 10px;
}
.margin-bot-10 {
  padding-bottom: 10px;
}

#mainframe {
  padding-top: 30px;
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
  font-size: 70px;
  letter-spacing: 10px;
  text-align: center;
  color: rgb(255, 255, 255);
  text-shadow: -5px 0 black, 0 5px black, 1px 0 black, 0 -1px black;
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

/* @keyframes neon6 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
      0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
      0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
} */

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
  font-size: 19px;
  line-height: 24px;
}
.first-character {
  font-weight: 400;
  float: left;
  font-size: 84px;
  line-height: 64px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  font-family: "Source Sans Pro", sans-serif;
}

.sc {
  color: #3b8595;
}
.ny {
  color: #3d3c3a;
}
.atw {
  color: #c48660;
}

/* Section - Title */
/**************************/
#mainframe .title {
  background: white;
  padding: 60px;
  margin: 0 auto;
  text-align: center;
}
#mainframe .title h1 {
  font-size: 35px;
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
#mainframe .section-overlay-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
}

/* Section - Parallax */
/**************************/
#mainframe .parallax-one {
  padding-top: 200px;
  /* text-shadow: #3b8595; */
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

/* Extras */
/**************************/
#mainframe .line-break {
  border-bottom: 1px solid black;
  width: 150px;
  margin: 0 auto;
}

/* Media Queries */
/**************************/
@media screen and (max-width: 959px) and (min-width: 768px) {
  #mainframe .block {
    padding: 40px;
    width: 620px;
  }
}
@media screen and (max-width: 767px) {
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
  #mainframe .parallax-one,
  #mainframe .parallax-two,
  #mainframe .parallax-three {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 479px) {
  #mainframe .block {
    padding: 30px 15px;
    width: 290px;
  }
}
</style>