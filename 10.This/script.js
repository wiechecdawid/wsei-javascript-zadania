//zadanie 1
// function printPerson(){
//     console.log(this);
// }

// function makeItOlder(){
//     this.age += 1;
// }

// function Person(firstName, secondName, age, country, city){
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.print = printPerson;
//     this.addYear = makeItOlder;
// }

// var person1 = new Person("Dawid", "Wiecheć", 29, "Polska", "Kraków");
// var person2 = new Person("Agnieszka", "Pawluś", 27, "Polska", "Kraków");

// person1.addYear();
// person2.addYear();
// person1.addYear();
// console.log(person1);
// console.log(person2);

//zadanie 2
// function CookPerson(firstName, secondName, age, country, city){
//     Person.call(firstName, secondName, age, country, city);
//     this.favouriteFood = [];
//     this.addFood = (food) => {
//         this.favouriteFood.push(food);
//     }
//     this.showFood = () => {
//         console.log(this.favouriteFood);
//     }
// }

//Zadanie 3
// function Calculator(){
//     this.numberA = 0;
//     this.numberB = 0;

//     this.setA = (number) => {
//         this.numberA = number;
//     }
    
//     this.setB = (number) => {
//         this.numberB = number;
//     }

//     this.add = () => this.numberA + this.numberB;
//     this.subtract = () => this.numberA - this.numberB;    
//     this.multiply = () => this.numberA * this.numberB;
//     this.divide = () => {
//         return this.numberB !== 0 ? this.numberA / this.numberB : 
//                                     console.log("cannot divide by 0"); 
//     }
// }

//Zadanie 4
function LadderTraverser(length){
    this.length = length;
    this.currentLevel = 0;

    this.goUp = () => {
        if(this.currentLevel == this.length + 1)
            console.log("You are on top, cannot go higher");
        else if(this.currentLevel <= this.length)
            this.currentLevel++;
    }

    this.goDown = () => {
        if(this.currentLevel == 0)
            console.log("You are on the ground, cannot go lower");
        else if(this.currentLevel > 0)
            this.currentLevel--;
    }

    this.showLevel = () => {
        if(this.currentLevel == 0)
            console.log("You are on the ground");
        else if(this.currentLevel > this.length)
            console.log("You are on top");
        else
            console.log(`You are on level ${this.currentLevel}`);
    }
}