//Zadanie 1
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//     console.log(element);
// });


//Zadanie 2
// let arr = [1, 2, "trololo", 3, "Dawid", 4, 5];

// console.log(arr[0] + " " + arr[1]);
// console.log(arr[arr.length - 1]);
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     if((i%2)===1) {
//         console.log(arr[i]);
//     }
// }

// arr.forEach((element) => {
//     if(typeof(element) == "string") {
//         console.log(element);
//     }
// });

// arr.forEach((element) => {
//     if(typeof(element) == "number") {
//         console.log(element);
//     }
// });


//Zadanie 3
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = arr[0];
// let diff = arr[0];

// for(let i = 1; i < arr.length; i++){
//     sum += arr[i];
//     diff -= arr[i];
// }
// let avg = sum / arr.length;

// console.log(sum);
// console.log(diff);
// console.log(avg);

// let odd = [];
// let even = [];
// let max = arr[0];
// let min = arr[0];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2 === 0){
//         even.push(arr[i]);
//     } else {
//         odd.push(arr[i]);
//     }
//     if(arr[i] > max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }

// console.log(even);
// console.log(odd);

// console.log(max);
// console.log(min);

// let reversed = [];

// for(let i = arr.length -1; i > -1; i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed);


//Zadanie 4
// function sum(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });

//     return sum;
// }

// console.log(sum([1,2,12,3,5,401]));


//Zadanie 5
// function avg(arr){
//     let sum = 0;

//     arr.forEach(element => {
//         sum += element;
//     });

//     return sum / arr.length;
// }

// let arr = [1,2,3,4,5,6,7,8,9];

// console.log(avg(arr)); // 5


//Zadanie 6
// function evenAvg(arr){
//     let temp = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]%2 === 0){
//             temp.push(arr[i]);
//         }
//     }

//     return avg(temp);
// }
// function avg(arr){
//     let sum = 0;

//     arr.forEach(element => {
//         sum += element;
//     });

//     return sum / arr.length;
// }

// console.log(evenAvg([5,6,7,8,8]));


//Zadanie 7
// function returnSorted(arr){
//     return arr.sort((a, b) => {
//         return a- b;
//     });
// }

// console.log(returnSorted([15, 6, 5, 32, 54, 4, 88, 3, 2]));


//Zadanie 8
// function arrSum(arr1, arr2){
//     let temp = [];
//     let length = arr1.length > arr2.length ? arr1.length : arr2.length;

//     for(let i = 0; i < length; i++){
//         if(typeof(arr1[i]) == "undefined"){
//             temp[i] = arr2[i];
//         } else if(typeof(arr2[i]) == "undefined"){
//             temp[i] = arr1[i];
//         } else {
//             temp[i] = arr1[i] + arr2[i];
//         }
//     }
//     return temp;
// }

// console.log(arrSum([1,2,3,4,5], [1,2,3,4]));


//Zadanie 9
// function removeElement(arr, element){
//     let first = arr.slice(0, arr.indexOf(element));
//     let second = arr.slice(arr.indexOf(element)+1, arr.length);

//     return first.concat(second);
// }

// console.log(removeElement([1,2,3,4], 1));


//Zadanie 10
function invert(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = - arr[i];
    }

    return arr;
}

console.log(invert([-2,-1,0,1,2]));