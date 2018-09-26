// message = "Het is maandag!"

// var i = message.length

// while (i >= 0) {
//     i--;
//     console.log(message.charAt(i));
// }

// var n = 1;
// while (n <= 10) {
//     console.log(n);
//     n++; // n=n+1

// }

// const word = "Geweldig";

// let reversedWord= "";

// let count = word.length; //8

// while (count >0) {
//     reversedWord = reversedWord + word.charAt(count - 1);
//     console.log(reversedWord);
//     count--;

// }
// console.log(reversedWord);

// for (let i = 0; i <= 10; i++) {
// console.log(i)
//};


// const sentence = "Het is maandag!"

// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence.charAt(i));
// }



// for (let i = 1; i <= 25; i++) {
//     if (i % 3 == 0) {
//         console.log(`${i}is deelbaar door 3`);
//     }

//     else {
//         console.log(`${i} is niet deelbaar door 3`);
//     }
// }





//OPDRACHT 1

// //let input = 800;
// let i = 1;

// while(i <= input && i != 0){
//     if(i / 4 ==  Math.floor(i / 4)){
//         console.log(`${i} is deelbaar door 4`);
//     } else {
//         console.log('false');
//     }
//     i++;
// }



//OPDRACHT 2

// function fibonnaci () {
//     let a = 1
//    let  b = 1

//     while (a <  50) {
//         console.log(a);
//         console.log(b);
//         a = a+b;
//         b = a+b;
//     }
   
// }


// fibonnaci();

// OPDRACHT 3



for (i = 1; i==1; i ++){
    let array = [2, 4, 8, 9, 12, 13];
    function Total (total,num)
    {
        return total+num;
    }
    console.log(array.reduce(Total));
}
