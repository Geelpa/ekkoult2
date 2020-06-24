function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  
  var input = document.getElementById("myInput");
  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("button").click();
    }
  });