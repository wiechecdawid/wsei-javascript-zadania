//Zadanie 1
var buzParent = document.getElementById('buz').parentElement;
console.log(buzParent);

var bazSibling = document.getElementById('baz').previousElementSibling;
console.log(bazSibling);

var fooChildren = document.getElementById('foo').children;
console.log(fooChildren);

var fooParent = document.getElementById('foo').parentElement;
console.log(fooParent);

var fooFirstChild = document.getElementById('foo').firstElementChild;
console.log(fooFirstChild);

var fooMiddleChild = fooChildren[Math.floor(fooChildren.length / 2)];
console.log(fooMiddleChild);

//Zadanie 2
function printElement(id){
    var clickMe = document.getElementById(id);

    clickMe.addEventListener('click', () => {
        console.log(clickMe.children[0].children[0].children[0].children[1].children[0].children[0].innerText);
    })
}
printElement('ex2');

//Zadanie 3
var buttons = document.querySelectorAll('div#ex3 button');

function programButtons(){   
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let neighbourSpan = button.nextElementSibling;
            neighbourSpan.style.display = 
                                neighbourSpan.style.display == 'none' ?
                                                    'inline' : 'none'
        })
    });
}
programButtons();

//Zadanie 4
buttons.forEach(button => {
    let parent = button.parentElement;
    
    button.addEventListener('click', () => {
        parent.style.backgroundColor = "#" + 
                        Math.floor(Math.random()*16777215).toString(16);
    })
});

//Zadanie 5
var colorDivs = document.querySelectorAll('#ex5 div');
var listedNumbers = document.querySelectorAll('#ex5 li');
var ul = document.querySelector('#ex5 ul');

colorDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
        //Wariant 1
        let ulFirstChild = ul.firstElementChild;
        ulFirstChild.style.color = div.style.backgroundColor;

        //Wariant 2
        // let ulLastChild = ul.lastElementChild;
        // ulLastChild.style.color = div.style.backgroundColor;
        
        //Wariant 3
        // listedNumbers.forEach(number => {
        //     if(number.innerHTML % 2 == 0){
        //         number.style.color = div.style.backgroundColor;
        //     }
        // });
        
        //Wariant 4
        // listedNumbers.forEach(number => {
        //     number.style.color = div.style.backgroundColor;
        // }) 

        //Wariant 5
        //ul.style.backgroundColor = div.style.backgroundColor;
    });
});


//Zadanie 6
const ex6 = document.querySelector("#ex6");
const thirdChild = ex6.children[0].children[0].children[0];
console.log(thirdChild);
const comb2 = ex6.children[0].parentNode.children[0].nextSibling.parentNode;
console.log(comb2);
const comb3 = ex6.parentNode.children[0].parentNode.children[1].children[0].children[0].children[0];
console.log(comb3);
