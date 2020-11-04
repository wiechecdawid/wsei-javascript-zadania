//Zadanie 1
// function Person(firstName, lastName, age, country, city, language){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.city = city;
// }

// function changeAge(age){
//     this.age = age;
// }

// function changeCity(city){
//     this.city = city;
// }

// Person.prototype.country = "USA";
// Person.prototype.language = "English";
// Person.prototype.changeAge = changeAge;
// Person.prototype.changeCity = changeCity;

// let champions = [
//     new Person("LeBron", "James", 35, "USA", "Akron", "English"),
//     new Person("Anthony", "Davis", 27, "USA", "Chicago", "English"),
//     new Person("Danny", "Green", 33, "USA", "North Babylon", "English"),
//     new Person("Dwight", "Howard", 34, "USA", "Atlanta", "English"),
//     new Person("Rajon", "Rondo", 34, "USA", "Louisville", "English")    
// ];

// champions.forEach(champion => {
//     champion.changeCity("Los Angeles");
//     champion.changeAge(champion.age + 1);

//     console.log(champion);
// });


//Zadanie 2
// function add(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a,b){
//     if(b == 0){
//         console.log("Cannot divide by zero!");
//         return;
//     }    
//     return a / b;
// }

// function Calculator(){
//     this.memory = [];
//     this.showMemory = () => console.log(this.memory);
//     this.resetMemory = () => this.memory = [];
//     this.calculate = (a,b,operation) => {
//         this.memory.push(operation(a,b));
//         return operation(a,b);
//     }
// }

// let calc = new Calculator();
// let kalk = new Calculator();

// console.log(calc.calculate(5, 10, add));
// console.log(calc.calculate(5, 23, divide));
// console.log(calc.memory);

// console.log(kalk.calculate(5.3, 10, multiply));
// console.log(kalk.calculate(15, 23, subtract));
// console.log(kalk.memory);

// calc.showMemory();
// kalk.resetMemory();
// console.log(kalk.showMemory());

//Zadanie 3
function generateRandomNumber(){
    min = 1;
    max = 10;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

MessWithNumber.prototype.shouldBeGenerated = false;
MessWithNumber.prototype.number = 0;

function MessWithNumber(){
    this.startRandomNumbers = () => {
        this.shouldBeGenerated = true;
        let i = 1;
        while(this.shouldBeGenerated){
            let temp = generateRandomNumber();
            i++;
            this.stopRandomNubmbers(temp);

            this.number = temp;
            console.log(this.number);
        }   
    }

    this.stopRandomNubmbers = (newNumber) => {
        if(newNumber - this.number == 5)
            this.shouldBeGenerated = false;
    }
}


let m = new MessWithNumber();
let n = new MessWithNumber();

m.startRandomNumbers();