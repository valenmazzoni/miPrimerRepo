
/*const video = document.getElementById("miVideo");
const playPauseBtn = document.getElementById("playPause");
const barraProgreso = document.getElementById("barraProgreso");

video.addEventListener("timeupdate", function() {
    barraProgreso.value = (video.currentTime / video.duration) * 100;
});

playPauseBtn.addEventListener("click", function() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = "Pausar";
    } else {
        video.pause();
        playPauseBtn.textContent = "Reproducir";
    }
});

barraProgreso.addEventListener("input", function() {
    video.currentTime = (barraProgreso.value / 100) * video.duration;
})*/

let video= document.getElementById('miVideo')

const reproducir= ()=>{
    video.play()
}

const pausar= ()=>{
    video.onpause()
}
