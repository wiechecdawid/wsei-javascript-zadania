//Zadanie 1
let car = {
    make: "Skoda",
    model: "Fabia",
    year: 2007,
    color: "red",
    engine: "1.2 HTP",
    doors: 5,
    topSpeed: 160
}

console.log(car);


//Zadanie 2
function changeModel (newModel) {
    this.model = newModel;
};

car.modelChange = changeModel;

car.modelChange("Octavia");

console.log(car);


//Zadanie 3
const adder = new Object();

adder.sum = 0;
adder.sumArr = addArr;

adder.sumArr([1,2,3,4]);

function addArr(arr){
    arr.forEach(element => {
        this.sum += element;
    });
}

console.log(adder.sum);


//Zadanie 4
let car = {
    make: "Skoda",
    model: "Fabia",
    year: 2007,
    color: "red",
    doors: 5,
    topSpeed: 160,

    //Zadanie 5
    engine: {
        volume: 1200,
        fuel: "gas",
        horsePower: 64
    }
}

//Zadanie 6
car.variant = "hatchback";
car.greetDriver = sayHello;

function sayHello(){
    console.log("Hello");
}
