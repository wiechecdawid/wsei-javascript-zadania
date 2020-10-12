//Zadanie 1
/*function success(){
  console.log("Udało się");
}
success();
*/

//Zadanie 2
/*function display(whateverParam){
  console.log(whateverParam);
}
var param = "Yolo";
display(param);
*/

//Zadanie 3
/*function arrayReturner(array){
  return array;
}

let arr = [1, 2, 3, 4, 5];

console.log(arrayReturner(arr));
*/

//Zadanie 4
let string = 'abcd';
let count = 0;

for(let i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(string)
    count ++;
    if(count === 5){
      console.log("KONIEC");
    }
  }, i*3000);
}