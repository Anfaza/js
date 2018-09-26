// OPDRACHT 1 heb ik perongeluk al in de opdrachten van loops verwerkt.


//Opdracht 2 Countdown

let time = 10;
let year = new Date()

function countdown() {
    if (time > 0) {
        setTimeout(countdown, 500);
        console.log(time)
        time--
    } else {
    console.log(`Happy  ${year.getFullYear()}`)
    }
}

countdown();

// Ik begreep niet veel van opdracht 3