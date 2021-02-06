// Zad 1
const newElement = document.createElement('div');
newElement.innerText = "To jest nowy element";

document.body.appendChild(newElement);

// Zad 2
const fruits = ["jabłko", "mango", "banan", "kiwi", "pomarańcza", "mandarynka"]
let fruitList = document.createElement('ul');

fruits.forEach(el => {
    let fruit = document.createElement('li');
    fruit.innerText = el;
    fruitList.appendChild(fruit)
});

document.body.appendChild(fruitList);

// Zad 3
fruitList.addEventListener('click', () =>{
    let fruitChildren = [...fruitList.children];

    for(let i = 0; i < fruitChildren.length; i++){
        if(i % 2 != 0) {
            fruitList.removeChild(fruitChildren[i])
        }
    }
});

//Zad 4
const magicButton = document.createElement('button');
magicButton.innerHTML = "Hide";
magicButton.addEventListener('click', () => {
    document.body.removeChild(magicButton)
});

document.body.appendChild(magicButton);

// Zad 5
const randomNum = Math.floor(Math.random() * 10) + 1;

for(let i = 0; i < randomNum; i++) {
    let div = document.createElement('div');
    div.innerText = `to jest div numer ${i + 1}`;

    document.body.appendChild(div);
}

//Zad 6
const structure = document.createElement('div');
structure.innerHTML = "<div class=\"div1\">to jest div</div><span class=\"span1\">to jest span</span><div class=\"div2\"><div class=\"div3\">to jest div</div></div><span class=\"span2\">to jest span</span>";

document.body.appendChild(structure);

// Zadanie 7
function switchLists(firstList, secondList) {
    let itemList = [...firstList.children];

    let last = itemList[itemList.length-1];
    firstList.removeChild(last);
    secondList.appendChild(last);
}

const items = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];

const list1 = document.createElement('ul')

items.forEach(item => {
    let listItem = document.createElement('li');
    listItem.innerText = item;

    list1.appendChild(listItem);
})

const list2 = document.createElement('ul')

const button1 = document.createElement('button');
button1.innerHTML = "List1 button";

const button2 = document.createElement('button');
button2.innerHTML = "List2 button";
button2.disabled = true;

button1.addEventListener('click', () => {
    switchLists(list1, list2);
    button2.disabled = false;
    
    if(list1.childElementCount === 0) {
        button1.disabled = true;
    }
});

button2.addEventListener('click', () => {
    switchLists(list2, list1);
    button1.disabled = false;
    
    if(list2.childElementCount === 0) {
        button2.disabled = true;
    }
});

document.body.appendChild(list1);
document.body.appendChild(button1);
document.body.appendChild(list2);
document.body.appendChild(button2);

//Zad 8

let form = document.createElement('form');
let elType = document.createElement('input')
elType.type = "text"
elType.Name = "type"
elType.placeholder = ("Enter element type")

let elText = document.createElement('input')
elText.placeholder = ("Enter element text")

let elTextColor = document.createElement('input')
elTextColor.placeholder = ("Enter text color")

let elCount = document.createElement('input')
elCount.placeholder = ("Enter number of occurences")

let submitButton = document.createElement('input')
submitButton.type = "submit";
submitButton.value = "Submit";

const types = [elType, elText, elTextColor, elCount, submitButton];
elTextColor
types.forEach(t => {
    form.appendChild(t)
});

document.body.appendChild(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log("starting task");
    for (let i = 0; i < elCount.value; i++) {
        let el = document.createElement(elType.value);
        el.innerText = elText.value;
        el.style.color = elTextColor.value;

        document.body.appendChild(el);
    }
});

// Zadanie 8
function DivCreator() {
    this.div = document.createElement('div');
    this.div.innerHTML = "<input type=\"text\" placeholder=\"Imię\"><input type=\"text\" placeholder=\"Nazwisko\"><input type=\"text\" placeholder=\"Wiek\"><input type=\"text\" placeholder=\"Liczba dzieci\">"
}

function createTable(someDataForm) {
    let table = document.createElement('table');
    let header = document.createElement('tr');
    header.innerHTML = "<th>Imię</th><th>Nazwisko</th><th>Wiek</th><th>Liczba dzieci</th>"
    table.appendChild(header);

    const divs = [...someDataForm.children];

    for(let i = 1; i < divs.length; i++) {
        let row = document.createElement('tr');
        const inputs = [...divs[i].children];
        row.innerHTML = `<td>${inputs[0].value}</td><td>${inputs[1].value}</td><td>${inputs[2].value}</td><td>${inputs[3].value}</td>`
        table.appendChild(row);
    }

    return table;
}

let personalForm = document.createElement('form');
let more = document.createElement('button');
more.innerHTML = "Więcej";
document.body.appendChild(more)

let personalData = document.createElement('div');
personalData.className

let firstName = document.createElement('input');
firstName.placeholder = "Imię";
personalData.appendChild(firstName)

let secondName = document.createElement('input');
secondName.placeholder = "Nazwisko";
personalData.appendChild(secondName);

let age = document.createElement('input');
age.placeholder = "Wiek";
personalData.appendChild(age);

let childCount = document.createElement('input');
childCount.placeholder = "Liczba dzieci";
personalData.appendChild(childCount);

let subButton = document.createElement('input');
subButton.type = 'submit';
subButton.value = "Utwórz";

personalForm.appendChild(subButton);
personalForm.appendChild(personalData);

personalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let rows = [...personalForm.children]
    for(let i = 1; i < 0; i++) {
        checkSingleRow(rows[i]);
    }

    const table = createTable(personalForm);
    document.body.appendChild(table)
});

more.addEventListener('click', () => {
    let creator = new DivCreator();

    personalForm.appendChild(creator.div)
});

document.body.appendChild(personalForm);

//Zad 10

function checkSingleRow(singleRow) {
    let inputs = [...singleRow.children];
    inputs.forEach(i => {
        if(i.value.length !== 0) {            
            i.value = i.value[0].toUpperCase() + i.value.slice(1)
        }
    });
}

// Zad 11
function numFinder(someText) {
    let regex = /\d+/g;
    const arr = someText.match(regex); 
    let sum = 0;
    let product = 0

    if(arr != null) {       
        arr.forEach(num => {
            sum = Number(sum) + Number(num);
            product = Number(product) * Number(num);
        })

        for (let i = 0; i < product; i++) {
            const printText = document.createElement('div');
            printText.innerText = someText;
            document.body.appendChild(printText);
        }

        console.log(sum);
    }
}

numFinder('D3jw19-91')

// Zad 12
function newObject(str) {
    return {
        string: str
    }
}

const ala = newObject('Ala ma kota');
ala.convertToOla = function() {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = "Słowo Ala nie występuje w tekście.";
        document.body.appendChild(div);
    }
}

ala.convertToOla();

// Zad 13
let lengthsArray = (stringArr) => {
    let lengthsArr = [];

    stringArr.forEach(str => {
        lengthsArr.push(str.length)
    });

    return lengthsArr;
}

let sumArr = (numArr) => numArr.reduce((a, b) => a + b);

let result = (numArr) => sumArr(numArr) / numArr.length;

// Zad 14
let foo = {
    name: '',
    surname: '',
    age: ''
};

function resetFoo() {
    let resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset Foo"
    resetButton.addEventListener('click', () => {
        foo = {
            name: '',
            surname: '',
            age: ''
        };
    });

    document.body.appendChild(resetButton);
}

function populateObjWithData(first, second, age) {
    foo.name = first;
    foo.surname = second;
    foo.age = age;

    foo.nameLength = foo.name.length;
    foo.surnameLength = foo.surname.length;
    foo.ageLength = foo.age.length;

    if(first.length == 5 || second.length == 5 || age.length == 5) {
        resetFoo();
    }
}

populateObjWithData("Dawid", "Wiecheć", "30");

console.log(foo); //object populated. After pressing reset button object returns to its' initial form