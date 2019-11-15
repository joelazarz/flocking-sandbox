let environment = flock.init();
let playing = false

document.addEventListener("DOMContentLoaded", () => {

    let synth = flock.synth({
        synthDef: {
            ugen: "flock.ugen.sin",
            freq: 440,
        }
    });
    
    let playSynth = () => {
        environment.start();
        playing ? synth.pause() : synth.play()
        playing = !playing
    }
    
    
    let play = document.querySelector(".play")
    play.addEventListener('click', playSynth)

})