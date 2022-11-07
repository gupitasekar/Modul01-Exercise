//Exercise 1: Triangle

// function triangle() {
//   var height = 5;
//   var output = "";
//   for (var i = 1; i <= height; i++) {
//     for (var j = 1; j <= i; j++) {
//       output += j + "  ";
//     }
//     console.log(output);
//     output = "";
//   }
// }

// triangle(5);

// Exercise 2: Bizz Buzz FizzBuzz
// function fizzbuzz(loop) {
//   for (var i = 1; i <= loop; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log(`FizzBuzz ==> ${i}`);
//     } else if (i % 5 == 0) {
//       console.log(`Buzz ==> ${i}`);
//     } else if (i % 3 == 0) {
//       console.log(`Bizz ==> ${i}`);
//     }
//   }
// }
// console.log(fizzbuzz(45));

// Exercise 3: BMI
// function bmi(weight, height) {
//   let hasil = weight / Math.pow(height / 100, 2);
//   return hasil;
// }

// if (bmi < 18.5) {
//   console.log("less weight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("ideal");
// } else if (bmi >= 25.0 && bmi <= 29.9) {
//   console.log("overweight");
// } else if (bmi >= 30.0 && bmi <= 39.9) {
//   console.log("very overweight");
// } else {
//   console.log("obesity");
// }

// console.log(bmi(50, 150));

//Exercise 4
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var even = a.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(even);

//Exercise 5
// stringToArray = function (str) {
//   return str.trim().split(" ");
// };
// console.log(stringToArray("Hello World"));
