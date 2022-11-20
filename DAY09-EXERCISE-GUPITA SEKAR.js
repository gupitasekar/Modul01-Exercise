// Push tanpa push
let arr = [];
arr[arr.length] = 1;
arr[arr.length] = 2;
arr[arr.length] = 3;
// console.log(arr);

// Algorithm
// pseudocode : rancangan penulsian program berdasarkan algorithm yang dibuat
// Title: Function Penjumlahan 2 angka

// Input:
// 1. Need two params numbA and numbB with NUMBER data type

// Proses:
// 1. Use value from params to add(+)
// 2. Return result of add process from numbA and numbB

// Output:
// Result with NUMBER data type

// Fuction:
function addition(numbA, numbB) {
  return numbA + numbB;
}

// Pseudocode untuk detect angka ganjil dan genap
// Input:
// 1. Need one parameter (number)

// Proses:
// 1. Create a conditional statement
// 2. If the result of Modulus by 2 the number equals 0, then print "Even Number"
// 3. Else print "Odd Number"

// Output:
// Result with String data type

// Pseudocode untuk reverse string
// Input :
// 1. Need one parameter (string)
let reverse = (word) => {
  return word.split("").reverse().join("");
};

// console.log(reverse("Nelo gendut sekali"));
// Proses:
// 1. Split the string with "" as the separator into an array
// 2. Reverse the array
// 3. Join the reversed array by "" into a string

// Output:
// Result with String data type

// Duplicate Map
let arrOfNumbers = [1, 2, 3, 4, 5, 7, 9, 10];
// let arrOfObjects = ["kucing", "anjing", "kelinci", "kura kura"];

// Pseudocode
// 1. Create a function with two parameters - array and callback function
// 2. Create an empty array
// 3. Loop through the array parameter
// 4. Create a new variable as a resulf of calling Callback function with array index as the parameter
// 5. Push the result to the empty array
// 6. Return arr

let duplicateMap = (arrOfNumbers, multi) => {
  let arr = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let result = multi(arrOfNumbers[i], i);
    arr.push(result);
  }
  return arr;
};

let multi = (arrOfNumbers, i) => {
  // return arrOfNumbers * i;
  return `${i + 1}. ${arrOfObjects[i]}`;
};

let map = duplicateMap(arrOfObjects, multi);

console.log(map);

// Duplicate Filter
let duplicateFilter = (arrOfNumbers, filter) => {
  let arr = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let result = filter(arrOfNumbers[i], i);
    if (result) {
      arr.push(arrOfNumbers[i]);
    }
  }
  return arr;
};

let filter = (arrOfNumbers, i) => {
  return arrOfNumbers > 4;
};

// console.log(duplicateFilter(arrOfNumbers, filter));

// Array.filter
let result = arrOfNumbers.filter((x) => x > 4);
// console.log(result);

// Duplicate findIndex
let duplicateFindIndex = (arrOfNumbers, findIndex) => {
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let result = findIndex(arrOfNumbers[i], i);
    if (result) {
      return i;
    }
  }
};

let findIndex = (arrOfNumbers, i) => {
  return arrOfNumbers == 9;
};

let res = duplicateFindIndex(arrOfNumbers, findIndex);
console.log(res);

// console.log(arrOfNumbers.findIndex((x) => x == 7));
