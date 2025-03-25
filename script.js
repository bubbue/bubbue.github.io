document.getElementById("kopiuj").addEventListener("click", function() {
	let buttone = document.getElementById("kopiuj");
    let pole = document.getElementById("username"); 
    let tekst = pole.innerText;

    navigator.clipboard.writeText(tekst) 
        .then(() => {
            buttone.classList.add("copied"); 

            setTimeout(() => { 
                buttone.classList.remove("copied"); 
            }, 200);
    })
});
