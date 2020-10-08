/*//Zadanie 1
let a = 1;
let b = 2;
if(a>b){
  console.log(a);
} else {
  console.log(b);
} // 2
*/

//Zadanie 2
/*let a = 1;
let b = 2;
let c = 3;

if(a > b && a > c) {
  console.log(a);
} else if(b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
} //3
*/

//Zadanie 3 
/*
let sentence = "Lubię Javascript";
for(let i = 0; i < 10; i++){
  console.log(sentence);
}
*/

//Zadanie 4
/*let result = 0;
for(let i = 1; i <= 10; i++) {
  result += i;
}
console.log(result); // 55
*/

//Zadanie 5
/*var n = 5;
for(let i = 0; i <= n; i++) {
  console.log(i);
}
*/

//Zadanie 6
/*for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 10; j++){
    console.log("i = "+ i + ", j = " + j);
  }
}*/

//Zadanie 7
/*let fizzBuzz = "FizzBuzz";
console.log(0);
for(let i = 1; i <= 100; i++) {
  if(i % 3 == 0 && i % 5 == 0){
    console.log(fizzBuzz);
  } else if(i % 3 == 0){
    console.log(fizzBuzz.substring(0, 4));
  } else if( i % 5 == 0){
    console.log(fizzBuzz.substring(4, 8));
  } else{
    console.log(i);
  }
}*/

//Zadanie 8
//a
/*let pattern = '*'
for(let i = 0; i < 5; i++){
  console.log(pattern);
  pattern += '*';
}
*/

//b
/*let countLeft = 4;
let right = '*';

for(let i = 0; i < 5; i++){
  let left = '';
  for(let j = 0; j < countLeft; j++){
    left += ' '
  }
  console.log(left+right);
  right += ' *';
  countLeft--;
}
*/

//c
/*let countLeft = 4;
let right = '*';

for(let i = 0; i < 5; i++){
  let left = '';
  for(let j = 0; j < countLeft; j++){
    left += ' '
  }
  console.log(left+right);
  right += '**';
  countLeft--;
}
*/

//d
/*let stars = '*';
let digits = '1234';

for(let i = 0; i < 5; i++) {
  if(i == 4){
    console.log(stars);
  } else {
    console.log(stars+digits);
    stars += '*';
    digits = digits.substring(1, 4);
  }
}
console.log('-----');

for(let i = 4; i >= 0; i--) {
  if(i == 4){
    console.log(stars);
    digits = i + digits;
    stars = stars.substring(1, 5);
  } else {
    console.log(stars+digits);
    digits = i + digits;
    stars = stars.substring(1, 4);
  }
}
*/

//e
/*let countLeft = 4;
let right = '*';

for(let i = 0; i < 8; i++){
  if(i == 5 || i == 6 || i ==7){
    console.log('    *')
  }else {
    let left = '';
    for(let j = 0; j < countLeft; j++){
      left += ' '
    }
    console.log(left+right);
    right += ' *';
    countLeft--;
  }
}
*/