// Check if two objects are equal
let object1 = {
  name: "Nala",
  age: 3,
};

let object2 = {
  name: "Nala",
  age: 3,
};

let equalObjects = (object1, object2) => {
  let isSameObject = true;
  for (const prop in object1) {
    if (object1[prop] !== object2[prop]) {
      isSameObject = false;
    }
    return isSameObject;
  }
};

console.log(equalObjects(object1, object2));

// Get the intersection of two objects
let cat1 = [
  {
    name: "nala",
    age: 3,
  },
  {
    name: "daisy",
    age: 2,
  },
];
let cat2 = [
  {
    name: "nala",
    age: 3,
  },
  {
    name: "nola",
    age: 2,
  },
];

let intersection = (cat1, cat2) => {
  const result = cat1.filter((a) =>
    cat2.some((b) => a.name === b.name && a.age === b.age)
  );
  return result;
};

console.log(intersection(cat1, cat2));

// Merge two array of student data and remove duplicate data

let arr1 = [
  { name: "Barney", email: "barney@mail.com" },
  { name: "Nelo", email: "nelo@mail.com" },
];

let arr2 = [
  { name: "Barney", email: "barney@mail.com" },
  { name: "Nilo", email: "nilo@mail.com" },
];

let mergeTwoArray = (arr1, arr2) => {
  var arr3 = new Set(arr1.map((x) => x.name));
  var merged = [...arr1, ...arr2.filter((x) => !arr3.has(x.name))];
  return merged;
};

console.log(mergeTwoArray(arr1, arr2));

// Values into property and property into values
let kucingA = {
  name: "Barney",
  hobby: "makan",
};

let swap = (kucingA) => {
  let keyKucingA = Object.keys(kucingA);
  let propKucingA = Object.values(kucingA);

  const obj = {};

  propKucingA.forEach((element, index) => {
    obj[element] = keyKucingA[index];
  });
  return obj;
};

console.log(swap(kucingA));

// factorial number using recursion

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(8));
