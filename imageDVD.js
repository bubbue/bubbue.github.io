const image = document.getElementById("kagura")
const imgTable = ["kaguraimages/IMG_1281.png", "kaguraimages/IMG_1398.webp", "kaguraimages/kagura_sd.gif", "kaguraimages/kagura_hd.gif", "kaguraimages/huggies.jpg", "kaguraimages/kagurastare.jpg", "kaguraimages/kagura-azumanga-kagura.gif"]
let randomIMG = Math.floor(Math.random() * imgTable.length);

image.src = imgTable[randomIMG];

console.log(randomIMG, imgTable[randomIMG]);

image.addEventListener("mousedown", function(event) {
    event.preventDefault()
    return false;
});

image.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    return false;
});

let x = 0;
let y = 20;
let speedx = 2;
let speedy = 2;

async function BounceMe() {
    x += speedx;
    y += speedy;

    if (x + image.width > window.innerWidth || x < 0) {
        speedx = -speedx
    }
    if (y + image.height > window.innerHeight || y < 20) {
        speedy = -speedy
    }

    image.style.position = "absolute";
    image.style.top = y + "px";
    image.style.left = x + "px";

    requestAnimationFrame(BounceMe)
}

BounceMe()