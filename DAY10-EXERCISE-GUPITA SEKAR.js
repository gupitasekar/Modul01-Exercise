// Function to convert Excel Sheet column title to its corresponding title number

function titleToNumber(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}

let s = "DV";
console.log(titleToNumber(s));

// find element that appears only once
function mapArrayToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return obj;
}

function findOnce(arr) {
  let transformArrToObj = mapArrayToObject(arr);
  for (let key in transformArrToObj) {
    if (transformArrToObj[key] === 1) {
      return key;
    }
  }
}

console.log(findOnce([1, 1, 1, 2, 2, 3]));

// Anagram
let string1 = "kasur";
let string2 = "rusak";

let anagram = (string1, string2) => {
  let result1 = string1.split("").sort().join("");
  let result2 = string2.split("").sort().join("");
  if (result1 == result2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

anagram(string1, string2);

// climbing a staircase
let countStep = (steps) => {
  if (steps < 3) return 1;

  let prev = 1;
  let curr = 1;

  for (let i = 2; i < steps; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(countStep(3));
