//Zadanie 1
var lists = document.querySelectorAll('.list');

//Zadanie 2
var element = (parameter) => document.querySelector(parameter);

//Zadanie 3
var list = document.getElementById('list');

//zadanie 4
var lis = document.querySelectorAll('li');
var uls = document.querySelectorAll('ul');
var spans = document.querySelectorAll('span');
var divListSpans = document.querySelectorAll('div.list span');
var divIdSpans = document.querySelectorAll('#spans span');

function display (...args) {
    args.forEach((element) => {
        console.log(element);
    })
}

display(lis, uls, spans, divListSpans, divIdSpans);