// // OPDRACHT 1 heb ik perongeluk al in de opdrachten van loops verwerkt.


// //Opdracht 2 Countdown

// // let time = 10;
// // let year = new Date()

// // function countdown() {
// //     if (time > 0) {
// //         setTimeout(countdown, 500);
// //         console.log(time)
// //         time--
// //     } else {
// //     console.log(`Happy  ${year.getFullYear()}`)
// //     }
// // }

// // countdown();

// // // Ik begreep niet veel van opdracht 3


// // // ARRAYS

// // //array declaration

// // const productsList = [];  

// // productsList [0] ='Tandenborstel';
// // productsList [1]= 'Deodorant';
// // productsList [2]= 'Bakmeel'
// // productsList [3] = 'Wortels'
// // productsList [4] = 'Tandpasta'
// // productsList [5] = 'Krop Sla'
// // productsList [6]= 'Maggi'
// // productsList [7] = 'Croky Chips'
// // productsList [8]= 'WC papier'
// // productsList [9]= 'Shampoo'


// // productsList[7] = 'Lays Chips';

// // console.table(productsList);

// // for (let index = 0; index < productsList.length; index++) {
// //     const element = productsList[index];

// //     console.log(`Op ${index} staat element: ${element}`);    
// // }

// // let newproductsListArray = productsList.map(function(element,index,array)
// // {let newElement =element.toUpperCase();
// // return newElement;
// // });

// // console.table(newproductsListArray);

// // let newproductsList2Array = [];
// // productsList.map(function(element,index,array){
// // let newElement = ('Wattestaafje' + element) });

// // for (let index = 0; index < productsList.length; index++) {
// //     const element = `product ${index + 1} + ${productsList}[index]`;
// //     newproductsList2Array.push(element);

// // }
// // console.table(newproductsList2Array);

// // let newProductsListArray = productsList.map
// // const product = [];

// // 'Tandenborstel',
// // 'Deodorant',
// //  'Bakmeel',
// // 'Wortels',
// // 'Tandpasta',
// //  'Krop Sla',
// // 'Maggi',
// //  'Croky Chips',
// // 'WC papier',
// //  'Shampoo' ;
// //  console.table(product);







// // const price =
// // [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

// // let total = 0


// // for (let index = 0; index < price.length; index++) {
// //     total += price [index];
// // }
// // console.log(total);

// // const average = function(price) {
// //     let newAverage = total/price.length;
// //     return newAverage;
// // }

// // console.log(average(price));




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

// const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];



//     let y = lapRounds.filter(function(num) {
//         // Calls all the numbers under 4
//         return num < 4;
//     })
// //het werkt fijner omdat het veel minder typewerk is.

// console.log(y);
let me = {
    "name": "Anissa",
    "age": 22,
    "Previous_Diploma": "21+",
    favoriteVehicle: {
        name: "auto",
        amountOfWheels: 4
    },
    logfamilyNames: function() {
        me.familyNames.forEach(function(element){
        console.log(element)})
    },

    familyNames: [
        "Piet",
        "Nel",
        "Petra",
        "Henk",
        "Ad"

    ]


};

console.log(me);
me.currentstudy = "HBO-ICT"
me.hobby = "Lezen"
me.eyecolour = "Black"
me.favoritecolour = "Black"
me.brothers = 4
me.weight = 48
me.story = "its just a test"
me.lastName = "Boufrahi"

console.log(me);


// console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.name} en die heeft ${me.favoriteVehicle.amountOfWheels} wielen.`);


for (let index = 0; index < me.familyNames.length; index++) {
    const element = me.familyNames[index];


};

console.log(element);

let logFavoriteVehicle = function() {
    console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.name} en die heeft ${me.favoriteVehicle.amountOfWheels} wielen.`);
};

let logfamilyNames = function()
    me.familyNames.forEach(function(element) {
    console.log(element)
});

me.logFavoriteVehicle()
me.logfamilyNames()