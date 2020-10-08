//Zadanie 1
/*for(let i = 1; i < 16; i++){
  setTimeout(() => console.log(i), i * 3000);
}
*/

//Zadanie 2
let arr = [1, 2, 3, 4, 5, 6]

setTimeout(arr.forEach((item) => console.log(item)), 2000);

for(let i = 0; i < arr.length; i++){
  setTimeout(() => console.log(arr[i]), (i + 1) * 3000);
}