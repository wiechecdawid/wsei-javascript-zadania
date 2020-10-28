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
}