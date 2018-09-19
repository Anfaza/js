//opdracht 1 Types en Variabele

var x = 12;

let y = x / 2;
let w = Math.floor(x / 2);

if (y == w) {
    console.log('even' + x);


}
//opdracht 2  Types en Variabele
else {
    console.log('uneven' + x)
}

const coolString = 'Programming is not so cool'
console.log(coolString);
const coolReplacedString = coolString.replace('not', '');
console.log(coolReplacedString);

//opdracht 3 types en variabele   

console.log(1400 == ' Ik woon in Naboo');
//het is geen handige vergelijking omdat de een een getal is en de ander een zin.


// Opdracht 1 Conditionals

let grade = 5;

if (grade < 6) {
    console.log('onvoldoende');
}

else if (grade > 6 && grade <= 7) {
    console.log('voldoende')
}
else if (grade > 7 && grade <= 9) {
    console.log('goed')

}

else if (grade > 9) {
    console.log('uitmuntend')
}
else { console.error } ('not possible')



// opdracht 2 conditionals

switch (grade) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('onvoldoende');
        break;
    case 6:
    case 7:
        console.log('voldoende');
        break;
    case 8: console.log('goed');
        break;
    case 9:
    case 10: console.log('uitmuntend');
        break;
}

//opdracht 3 Conditionals

let purchasedBook = true;
let job = 'teacher';
let inTrain = true;

if (purchasedBook == true && inTrain == true && job == 'teacher') 
{ 

    console.log('finally i can enjoy my book!'); }

    else { console.error ('Not possible');}

