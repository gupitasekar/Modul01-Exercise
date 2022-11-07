// 1 Convert Celcius to Fahrenheit
let celcius = 30;
let cToF = (celcius * 9) / 5 + 32;
console.log(`Celcius = ${celcius} \nFahrenheit = ${cToF}`);

// 2 Check whether the number is odd or even
let number = 0;
while (number <= 10) {
  if (number % 2 == 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
  number++;
}

// 3 Check whether the number is prime number or not
let integer = 8;
let primeBool = true;
let i;

if (integer > 1) {
  for (i = 2; i < integer; i++) {
    if (integer % i == 0) {
      primeBool = false;
      break;
    }
  }
} else {
  primeBool = false;
}

if (primeBool) {
  console.log(`${integer} is a prime number`);
} else {
  console.log(`${integer} is not a prime number`);
}

// 4 Sum of the number 1 to N
let num = 0;
for (var i = 1; i <= 10; i++) {
  num += i;
}
console.log(num);

// 5 Factorial of a number
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(5));

// 6 Print the first N fibonacci numbers
// Fn = Fn - 1 + (Fn - 2);
function fibonacci(n) {
  fq = [0, 1];
  if (n <= 1) {
    console.log(fq[0]);
  }
  if (n == 2) {
    console.log(null, fq);
  }
  if (n > 2) {
    for (let i = 1; i <= n - 2; i++) {
      fq.push(fq[fq.length - 1] + fq[fq.length - 2]);
    }
    console.log(null, fq);
  }
}

fibonacci(8);

//7 Get difference between dates in days
let date1 = new Date("11/1/2022");
let date2 = new Date("11/10/2022");
let diffTime = Math.abs(date2 - date1);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays + " days ");
