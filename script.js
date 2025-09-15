const marquee = document.getElementById("welcome");
const body = document.getElementById("body");
const mcaudio = document.getElementById("clickAudio");
const mhaudio = document.getElementById("holdAudio");
const marqueeTable = ["kagura, my beloved", "hello", "hello, world", "pokemon", "rise and shine, mr. freeman", "OH MY GAH!!!", "Hello Everynyan"]
let randomMarquee = Math.floor(Math.random() * marqueeTable.length);

console.log(marqueeTable[randomMarquee])

marquee.textContent = marqueeTable[randomMarquee]

body.addEventListener("contextmenu", function(event){
    event.preventDefault();
    return false;
});

/* body.addEventListener("mousehold", function(){
    mhaudio.play()
});

body.addEventListener("mouseup", function(){
    mcaudio.currentTime = 0;
    mcaudio.play()
}); */