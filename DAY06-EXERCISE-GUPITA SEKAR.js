// No 1

// let students = [
//   {
//     name: "Daisy",
//     email: "daisy@gmail.com",
//     age: "1990-09-11",
//     score: 90,
//   },
//   {
//     name: "Barney",
//     email: "barney@gmail.com",
//     age: "1995-08-12",
//     score: 84,
//   },
//   {
//     name: "Nala",
//     email: "nala@gmail.com",
//     age: "1986-12-31",
//     score: 86,
//   },
//   {
//     name: "Milo",
//     email: "milo@gmail.com",
//     age: "1999-08-10",
//     score: 82,
//   },
// ];

// let calculateStudent = (students) => {
//   let sortedArr = students.sort((a, b) => a.score - b.score);
//   let lowestScore = sortedArr[0].score;
//   let highestScore = sortedArr[sortedArr.length - 1].score;
//   let arrayOfScores = sortedArr.map((student) => student.score);
//   let sumOfScores = 0;
//   for (let number of arrayOfScores) {
//     sumOfScores += number;
//   }
//   let averageScore = sumOfScores / arrayOfScores.length;
//   let score = {
//     highest: highestScore,
//     lowest: lowestScore,
//     average: averageScore,
//   };
//   let arrayOfAges = [];
//   for (let student of sortedArr) {
//     let ageOfStudent = getAge(student.age);
//     arrayOfAges.push(ageOfStudent);
//   }
//   let lowestAge = arrayOfAges[0];
//   let highestAge = arrayOfAges[arrayOfAges.length - 1];
//   let sumOfAge = 0;
//   for (let number of arrayOfAges) {
//     sumOfAge += number;
//   }
//   let averageAge = sumOfAge / arrayOfAges.length;
//   let age = {
//     highest: highestAge,
//     lowest: lowestAge,
//     average: averageAge,
//   };
//   let result = {
//     score: score,
//     age: age,
//   };
//   return result;
// };

// function getAge(dateString) {
//   var today = new Date();
//   var birthDate = new Date(dateString);
//   var age = today.getFullYear() - birthDate.getFullYear();
//   var m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }

// console.log(calculateStudent(students));

// No 2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  products = [];
  construction(total) {
    this.total = total;
  }

  addToCart(product) {
    this.product.push(product);
    this.total += product.price;
  }

  showTotal() {
    return this.showTotal;
  }

  checkout() {
    return this.products;
  }
}
