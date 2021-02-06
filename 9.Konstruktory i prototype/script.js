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
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    if(b == 0){
        console.log("Cannot divide by zero!");
        return;
    }    
    return a / b;
}

function Calculator(){
    this.memory = [];
    this.showMemory = () => console.log(this.memory);
    this.resetMemory = () => this.memory = [];
    this.calculate = (a,b,operation) => {
        this.memory.push(operation(a,b));
        return operation(a,b);
    }
}

let calc = new Calculator();
let kalk = new Calculator();

console.log(calc.calculate(5, 10, add));
console.log(calc.calculate(5, 23, divide));
console.log(calc.memory);

console.log(kalk.calculate(5.3, 10, multiply));
console.log(kalk.calculate(15, 23, subtract));
console.log(kalk.memory);

calc.showMemory();
kalk.resetMemory();
console.log(kalk.showMemory());

//Zadanie 3
function RandNum() {
	this.changeNumber = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}
const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5()