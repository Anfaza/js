// //OPDRACHT 1 ARRAYS
// //array
// const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
// // functie declaratie
// function getRandom() {
//     var x = Math.floor(Math.random() * 8)

//     console.log(x);

//     console.log(lapRounds[x])
// }

// getRandom();


// // OPDRACHT 2
// const allMyRecords = [
//     ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
//     ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
//  ];
//  console.log(allMyRecords[1][0])

//  for (let index = 0; index <= 1; index++) {
//      for (let index2 = 0; index2 <=2; index2++) {

//         console.log(index, index2)

//     console.log(allMyRecords[index][index2])  
//      }


//  }
// // OPDRACHT 3

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];



    let y = lapRounds.filter(function(num) {
        // Calls all the numbers under 4
        return num < 4;
    })
//het werkt fijner omdat het veel minder typewerk is.

console.log(y);