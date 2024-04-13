$(".timer").each(function (index, element) {
    var countdownDate = new Date("Apr 13, 2024 18:46:30").getTime() + $(element).attr("hours") * 60 * 60 * 1000;
    var counter = setInterval(() => {
        var now = new Date().getTime();
        var distance = countdownDate - now;
        if (distance > 0) {
            var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
            var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
            var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
            if (!($($(element).find(".hours .value")).text() == hours))
            {
                $($(element).find(".hours .value")).text(hours);
                $($(element).find(".hours .value")).toggleClass("changer");
            }
            if (!($($(element).find(".minutes .value")).text() == minutes))
            {
                $($(element).find(".minutes .value")).text(minutes);
                $($(element).find(".minutes .value")).toggleClass("changer");
            }
            if (!($($(element).find(".seconds .value")).text() == seconds))
            {
                $($(element).find(".seconds .value")).text(seconds);
                $($(element).find(".seconds .value")).toggleClass("changer");
            }
        }
        else {
            // Reveal the image
            $(element.parentElement.parentElement).removeClass("blur-image");
            $(element).next().show();
            $(element).remove();
            clearInterval(counter);
        }
    }, 1000);
});

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    setTimeout(() => {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }, 500*i);
  }
}

window.addEventListener("load", () => {
  createBalloons(20)
});