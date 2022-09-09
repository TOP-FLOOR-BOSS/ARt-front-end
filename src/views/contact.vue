<template>
  <!-- Contact Page -->
  <section id="contact">
    <div class="container container col text-center" id="Conactpgggg">
      <form
        action="https://formspree.io/f/xnqwlzbo"
        method="post"
        target="_blank"
      >
        <p>
          <span class="header2 text-white">CONTACT </span>
          <i class="fa fa-telephone p-3 text-white fs-2"></i>
        </p>

        <div class="login">
          <input type="text" placeholder="Your Name" class="input" />
          <input type="text" placeholder="Your Email Address" class="input" />
        </div>

        <div class="subject">
          <input type="text" placeholder="Subject" class="input" />
        </div>

        <div class="msg">
          <textarea class="area" placeholder="Leave a Message"></textarea>
        </div>

        <div>
          <button type="submit" id="mutton" class="subBtn btn btn-light">
            Submit
          </button>
        </div>

        <br />
        <br />
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Modak");

#contact {
  padding: 0px;
  background: linear-gradient(-45deg, #526fee, #c8ffc8, #23a6d5, #23d5ab);
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

.header2 {
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

.input,
.msg .area {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 25px;
  border: 2px solid #e9eaea;
  font-size: 17px;
  border-radius: 5px;
  outline: none;
  transform: all 0.5s ease;
}

.login .input {
  width: 48%;
  float: left;
  margin-right: 4%;
}

.login .input:last-child {
  margin-right: 0;
}

.msg .area {
  height: 200px;
}

#mutton {
  /* padding: 10px 20px; */
  color: #6f03f4;
  background: #ffffffaa;
  font-size: 36px;
  text-decoration: bold;
  text-transform: uppercase;
  transition: 0.5s;
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
.input:focus,
.msg .area:focus {
  border: 2px solid #486255;
}

::-webkit-input-placeholder {
  font-family: "roboto";
}
</style>