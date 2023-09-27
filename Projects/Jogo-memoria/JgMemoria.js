
var btnCores = ["vermelho", "azul", "verde", "amarelo"];

var jogoPadrao = [];
var clickUsuario = [];

var inicio = false;
var nivel = 0;

$(document).keypress(function() {
  if (!inicio) {
    $("#level-title").text("Nivel " + nivel);
    nextSequence();
    inicio = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  clickUsuario.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(clickUsuario.length-1);
});

function checkAnswer(currentLevel) {

    if (jogoPadrao[currentLevel] === clickUsuario[currentLevel]) {
      if (clickUsuario.length === jogoPadrao.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("errado");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Pressione qualquer tecla para reiniciar");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 300);

      startOver();
    }
}


function nextSequence() {
  clickUsuario = [];
  nivel++;
  $("#level-title").text("Nivel " + nivel);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = btnCores[randomNumber];
  jogoPadrao.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  nivel = 0;
  jogoPadrao = [];
  inicio = false;
}
