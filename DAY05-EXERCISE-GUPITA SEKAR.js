// 1. Function to get Lowest, Highest, Average value in the array
// let arrayOfScores = [19, 35, 22, 89, 44];

// let calculate = (arrayOfScores) => {
//   let sortedArr = arrayOfScores.sort((a, b) => a - b);
//   let lowestScore = sortedArr[0];
//   let highestScore = sortedArr[arrayOfScores.length - 1];
//   let sumOfScores = 0;
//   for (let number of arrayOfScores) {
//     sumOfScores += number;
//   }
//   let averageScore = sumOfScores / arrayOfScores.length;
//   let result =
//     `Lowest Score => ${lowestScore}, Highest Score => ${highestScore},
//     Average Score => ${averageScore}`;
//   return result;
// };

// console.log(calculate(arrayOfScores));

// 2. Function separator
// let arrayOfWords = (arr) => {
//   let arrSlice = arr.slice(0, -1);
//   let arrJoin = arrSlice.join(", ");
//   let arrSliceLast = arr[arr.length - 1];
//   let result = `${arrJoin} and ${arrSliceLast}`;
//   return result;
// };

// console.log(arrayOfWords(["Nola", "Nilo", "Nelo", "Nala"]));

// 3. Split a string and convert to array of words - not done
// let sentence = "Hello World";
// let array = [];

// let split = (sentence, delimiter) => {
//   let sentence2 = "";
//   for (let i = 0; i <= sentence.length; i++) {
//     if (sentence[i] !== delimiter) {
//       sentence2 += sentence[i];
//     } else {
//       array.push(sentence2);
//       sentence2 = "";
//     }
//   }
//   return array;
// };
// console.log(split("Hello World", "l"));

// 4. Calculate each element in the same position
// let arr1 = [5, 7, 3];
// let arr2 = [9, 8, 2];
// let arrResult = [];

// let calculate = () => {
//   for (let i = 0; i < arr1.length; i++) {
//     arrResult.push(arr1[i] + arr2[i]);
//   }
//   return arrResult;
// };

// console.log(calculate());

// 5. Add a unique element to the end of an array
// let arrayStart = ["a", "b", "c", "d"];

// function arrayFinal(element) {
//   if (!arrayStart.includes(element)) {
//     arrayStart.push(element);
//   }
//   return arrayStart;
// }

// console.log(arrayFinal("g"));

// 6. Remove odd numbers and return even numbers

// let a = [11, 12, 13, 14, 15];
// let even = a.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(even);
