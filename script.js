const capy = document.getElementById("capybara");
const cactus = document.getElementById("cactus");
const restart = document.getElementById("restart");
const errorDiv = document.getElementById("gameover");


restart.addEventListener("click", function(e) {
  e.preventDefault;
  
  cactus.classList.remove("animation");
  cactus.classList.remove("pause");
  capy.classList.remove("pause");
  
  void cactus.offsetWidth;
  
  cactus.classList.add("animation");
}, false);


function jump() {
  if (capy.classList != "jump") {
    capy.classList.add("jump");
  
    setTimeout(function () {
      capy.classList.remove("jump");
    }, 600)
  }
}


let isAlive = setInterval(function () {

  let capyTop = parseInt(window.getComputedStyle(capy).getPropertyValue("top"));
  let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

  /* Código para detectar colisão */

  if (cactusleft < 50 && cactusleft > 0 && capyTop >= 140) {
    errorDiv.classList.remove("visibility");
    cactus.classList.add("pause");
    capy.classList.add("pause");
  }
  else {
    errorDiv.classList.add("visibility");
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("touchstart", function (event) {
  jump();
});
