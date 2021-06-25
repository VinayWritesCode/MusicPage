var music = document.getElementById("music");
var playbtn = document.getElementById("playbtn");

playbtn.onclick = function () {
    if(music.paused) {
        music.play();
        playbtn.src = "./resources/images/pausebtn.png";
    }
    else {
        music.pause();
        playbtn.src = "./resources/images/playbtn.png";
    }
}