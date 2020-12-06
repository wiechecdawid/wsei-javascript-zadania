//Zadanie 1
var testButton = document.querySelector('#test-event');
var testInput = document.querySelector('#input-test');

var events = ['click', 'mousemove', 'mouseover', 'keypress', 'scroll', 'change'];

events.forEach(eventType => {
    if(eventType === 'change'){
        testInput.addEventListener('change', (event) => {
            console.log('Object event', event);
        });
    } else if(eventType === 'scroll'){
        window.addEventListener('scroll', (event) => {
            console.log('Object event',event)
        });
    } else {
        testButton.addEventListener(eventType, (event) => {
            console.log('Object event', event);
        });
    }
});

//Zadanie 2
var ex2Button = document.querySelector('#ex2');
var ex2Span = document.querySelector('#span-ex2')

var buttonDataToSpan = () => {
    var temp = ex2Button.dataset.text;
    ex2Span.innerHTML = temp;
}

ex2Button.addEventListener('click', buttonDataToSpan);


//Zadanie 3
var ex3 = document.querySelector('#ex3');

var changeEx3Color = () => {
    ex3.addEventListener('mouseout', () => {
        ex3.style.backgroundColor = 'red'
    });
    ex3.addEventListener('mouseover', () => {
        ex3.style.backgroundColor = 'blue'
    });
}

changeEx3Color();

//Zadanie 4
function validateInput(e) {
    
}