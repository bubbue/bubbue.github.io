const twitterButton = document.getElementById("twitter-btn");
const discordButton = document.getElementById("discord-btn");
const steamButton = document.getElementById("steam-btn");
const xboxButton = document.getElementById("xbox-btn");

const firefoxButton = document.getElementById("firefox")

twitterButton.addEventListener("click", function() {
    window.location.href = "https://x.com/dreamnuker0";
});

xboxButton.addEventListener("click", function() {
    window.location.href = "https://www.xbox.com/pl-PL/play/user/loggen249t/";
});


steamButton.addEventListener("click", function() {
    window.location.href = "https://steamcommunity.com/id/dreamnuker/";
});

discordButton.addEventListener("click", function() {
    let text = "@dreamnuker"
    navigator.clipboard.writeText(text);
    alert("Username copied to clipboard: " + text)
});

firefoxButton.addEventListener("click", function(){
    window.location.href = "https://www.firefox.com/pl/"
})