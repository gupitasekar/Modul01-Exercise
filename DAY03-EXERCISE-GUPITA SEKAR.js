// Membuat sebuah program : kelipatan 3 Bizz, kelipatan 5 Buzz, kelipatan 3 & 5 Bizz Buzz
// let number = 90;
// for (var i = 1; i <= number; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`BizzBuzz ==> ${i}`);
//   } else if (i % 5 == 0) {
//     console.log(`Buzz ==> ${i}`);
//   } else if (i % 3 == 0) {
//     console.log(`Bizz ==> ${i}`);
//   }
// }

// Multiplication
let number = 10;
for (var i = 1; i <= number; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}

// Palindrome
let word = "atta";
let splitWord = word.split("");
let reverseWord = splitWord.reverse();
let joinReverseWord = reverseWord.join("");
if (word == joinReverseWord) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}

// CM to KM
let centimeter = 500000;
let kilometer = centimeter / 1e5;
console.log(`${centimeter} cm is ${kilometer} km`);

// format number as currency
let num = new Number(1000000);
let currency = num.toLocaleString("id", { style: "currency", currency: "IDR" });
console.log(currency);

// Remove word
let fruit = "hello world";
let result = fruit.replace("llo", "");
console.log(result);

// Capitalize first letter of each word
let random = "minnie mouse";
let splitRandom = random.split(" ");

for (var i = 0; i < splitRandom.length; i++) {
  splitRandom[i] =
    splitRandom[i].charAt(0).toUpperCase() + splitRandom[i].slice(1);
}

let joinRandom = splitRandom.join(" ");
console.log(joinRandom);

// Reverse a string
let sentence = "halo kucing";
let splitSentence = sentence.split("");
let reverseSentence = splitSentence.reverse();
let joinReverseSentence = reverseSentence.join("");
console.log(joinReverseSentence);

// Vowel and consonant
let beverage = "iced coffee";
let noSpaceBeverage = beverage.replace(" ", "");
let vowels = ["a", "i", "u", "e", "o"];
let consBeverage = "";
let vowBeverage = "";

for (let char of noSpaceBeverage) {
  if (vowels.indexOf(char) === -1) {
    if (consBeverage.indexOf(char) === -1) {
      consBeverage += char;
    }
  } else if (vowBeverage.indexOf(char) === -1) {
    vowBeverage += char;
  }
}

console.log(`Consonant = ${consBeverage}`);
console.log(`Vowel = ${vowBeverage}`);
