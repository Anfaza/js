//Opdracht 1
const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 

let run = { time : [55.99,63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
};

console.table(run.time);

//Namen van de properties zijn 0 tm 7, de index van de Arrays.

// Opdracht 2

const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux'
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino'
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple'
    }
]


for (let index = 0; index < teachers.length; index++) {
    

    console.log(`I have a ${teachers[index].profession} named ${teachers[index].name} and he likes to work on an ${teachers[index].brand} computer.`);
};



//Opdracht 3
for (let index = 0; index <= 2; index++) {
   
    teachers [index].hoursPerWeek = 38; 
    teachers [index].SalaryPerWeek = 600
    teachers [index].SalaryPerHour = teachers[index].SalaryPerWeek/teachers[index].hoursPerWeek;
    
}
console.table(teachers)

 