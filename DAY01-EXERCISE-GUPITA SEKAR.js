// 1. area of rectangle
// w * l
let width = 3;
let length = 6;
console.log(width * length);

// 2. perimeter of rec
// 2*(w+l)
console.log(2 * (width + length));

// 3. diameter, circumference, area circle
// diameter = 2r
// circumference = 2*Math.PI*r
// area = Math.PI * Math.pow(r)

let radius = 7;
console.log(`diameter = ${2 * radius}`);
console.log(`circumference = ${2 * Math.PI * radius}`);
console.log(`area = ${Math.PI * Math.pow(radius, 2)}`);

// 4. angles of triangle if two angle are given
// 180 - a - b
let ang1 = 60;
let ang2 = 80;
console.log(180 - ang1 - ang2);

// 5. difference between dates in days
// 11/10/2022
// 20/10/2022

// let date1 = new Date("2022/10/11");
// let date2 = new Date("2022/10/20");
// let diffInMilliseconds = Math.abs(date1 - date2); // in milliseconds
// let date = new Date(diffInMilliseconds);
// console.log(date.getDay());

// 6. convert days to years, months, days
var days = 400;
var year = Math.floor(days / 365);
var daysLeft = days % 365;

var month = Math.floor(daysLeft / 30);
daysLeft = daysLeft % 30;

console.log(`${days} hari = ${year} tahun, ${month} bulan, ${daysLeft} hari`);
