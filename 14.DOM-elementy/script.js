// zad 1
const divs = document.querySelectorAll('.more-divs');

function listTags(divArr){
    let newArr = [];

    divArr.forEach(e => {
        newArr.push(e.tagName)
    });

    return newArr;
}

console.log(listTags(divs));

//Zad2
const elementDetails = (element) => {
    console.log(element.innerHTML)
    console.log(element.outerHTML)
    console.log(element.className)
    console.log(element.classList)
    console.log(element.dataset)
}

elementDetails(document.querySelector('.short-list'))

//Zad 3
const check = document.querySelector('#datasetCheck');
const first = check.dataset.numberone;
const second = check.dataset.numbertwo;
const third = check.dataset.numberThree;

console.log(first+second+third);
console.log(first-second-third);

//zad4

document.getElementById("spanText").innerText =  "dowolny";

//zad5

document.getElementById("spanText").className =  "newClassName";

//Zad 6
function func(classes){
    let arr = [];

    classes.forEach(el => {
        console.log(el);
        arr.push(el);
    });
    console.log(arr.join("+"));
};

const element = document.getElementById("classes");

func(element.classList)

//Zad 7
function addAttr(els) {
    const filtered = [...els].filter(el => !el.getAttribute('data-text'));
    filtered.forEach((el) => {
      el.setAttribute('data-text', 'text');
    })
  }
  
  addAttr(document.getElementById('longList').getElementsByTagName('li'));

//Zad 8
function stringToObject(input) {
    let a = {newClass: input};
    assignClass(a);
};

function assignClass(obj) {
    let b = obj.newClass;
    document.getElementById('myDiv').className = b;
};

stringToObject('short-list');

//Zad 9
function addClass(param){
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}
var randomNum = Math.floor(Math.random() * 10) + 1;
addClass(randomNum)

//Zad 10
function takeFromLongList(longList){
    let listChildren = longList.children;

    return listChildren;
}

let longList = document.getElementById('longList');

console.log(takeFromLongList(longList));

//Zad 11
const messWithLongListChildren = longListChildren => {
    longListChildren.forEach(listChild =>{
        listChild.dataset.oldVal = listChild.innerText;
        let newVal = Math.floor(Math.random() * 10) + 1;

        listChild.innerText = newVal
    });
}

messWithLongListChildren([...longList.children]);