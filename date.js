const date = document.getElementById("date")
const d = new Date();
let month = ""

function realMonth() {
    let monther = d.getMonth() + 1
    if (monther < 10) {
        month = "0" + monther.toString()
    }
    else {
        month = monther.toString()
    }
}

realMonth()

let fullDate = "Today is " + d.getDate() + "." + month + "." + d.getFullYear()

date.textContent = fullDate