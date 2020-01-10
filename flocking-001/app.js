let environment = flock.init();
let playing = false

document.addEventListener("DOMContentLoaded", () => {
    
    environment.start()

    let playSynth = (val) => {
        
        let synth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.sin",
                freq: val,
            }
        });

        playing ? synth.pause() : synth.play()
        playing = !playing
    }
    
    document.addEventListener('click', (e) => playSynth(e.offsetY))

})