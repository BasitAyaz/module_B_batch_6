// var a = {
//   mobiles: {
//     samsung: {
//       a30: {
//         name: "a30",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 2000,
//       },
//       note10: {
//         name: "note10",
//         ram: "6gb",
//         rom: "128gb",
//         camera: "50px",
//         price: 4000,
//       },
//       s10: {
//         name: "s10",
//         ram: "3gb",
//         rom: "128gb",
//         camera: "10px",
//         price: 5000,
//       },
//     },
//     iphone: {
//       iphone4: {
//         name: "iphone4",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       iphone4s: {
//         name: "iphone4s",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 20000,
//       },
//       iphone5: {
//         name: "iphone5",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//       iphone6: {
//         name: "iphone6",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//     },
//     xiomi: {
//       redminote10: {
//         name: "redminote10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redminote11: {
//         name: "redminote11",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10: {
//         name: "redmi10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10pro: {
//         name: "redmi10pro",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//     },
//     oppo: {
//       a3s: {
//         name: "a3s",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//     },
//   },
// };

// var brand = document.getElementById("brand");
// var model = document.getElementById("model");

// function searchMobile() {
//   var obj = a.mobiles[brand.value][model.value];
//   console.log(obj);
// }

// var arr = [0, null, undefined, 1, -1, false, true, "", [], {}];

// var arr = [
//   1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
//   0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1,
//   0, 0, 0, 1, 0, 1,
// ];

// var arr = [
//   1, 2, 3, 45, 2, 1, 3, 4, 5, 68, 1, 2, 3, 1, 5, 31, 585, 1, 2, 3, 4, 851, 3, 2,
//   5, 1, 2, 3, 1, 13, 5, 851, 3,
// ];

// ===== var, let, const =====

// === var ===
// redeclareable(y)
// reassignable(y)
// block scope (n)
// hoist (y)

// === let ===
// redeclareable(n)
// reassignable(y)
// block scope (y)
// hoist (n)

// === const ===
// redeclareable(n)
// reassignable(n)
// block scope (y)
// hoist (n)

// ===== Template Literals =====
// var num = 3;
// var a = `the Square
// root of ${num} is ${num * num}`;

// console.log(a);

// ===== ternary operators =====

// var marks = 80;

// if (marks > 70) {
//   console.log("Mithai");
// } else if (marks > 50) {
//   console.log("Amma se Bachat");
// } else {
//   console.log("Donon se dhulai");
// }

// marks > 70
//   ? console.log("Mithai")
//   : marks > 50
//   ? console.log("Amma se Bachat")
//   : console.log("Donon se dhulai");

// =====  Circuits =====

// let bool = true;

// let total = bool && "ABC";

// console.log(total);

// const obj = {
//   id: 1,
//   name: "ABC",
//   category: "A",
// };
// let arr = Object.keys(obj);
// let arr = Object.values(obj);
// let arr = Object.entries(obj);
// Object.freeze(obj);
// obj.category = "C";

// console.log(obj);

// let arr = [
//   {
//     id: 1,
//     name: "ABC",
//     category: "A",
//     city: "Karachi",
//   },
//   {
//     id: 2,
//     name: "MNO",
//     category: "C",
//     city: "Karachi",
//   },
//   {
//     id: 3,
//     name: "XYZ",
//     category: "A",
//     city: "Karachi",
//   },
//   {
//     id: 4,
//     name: "QWE",
//     category: "A",
//     city: "Lahore",
//   },
//   {
//     id: 5,
//     name: "TZR",
//     category: "A",
//     city: "Karachi",
//   },
//   {
//     id: 6,
//     name: "AMJ",
//     category: "A",
//     city: "Islamabad",
//   },
//   {
//     id: 7,
//     name: "LKO",
//     category: "B",
//     city: "Karachi",
//   },
//   {
//     id: 8,
//     name: "BAO",
//     category: "A",
//     city: "Karachi",
//   },
//   {
//     id: 9,
//     name: "PLK",
//     category: "B",
//     city: "Karachi",
//   },
// ];

// let labels = Object.keys(arr[0]);
// let a = document.getElementById("header");
// let b = document.getElementById("body");

// for (let i = 0; i < labels.length; i++) {
//   a.innerHTML += `<th>${labels[i]}</th>`;
// }
// for (let i = 0; i < arr.length; i++) {
//   let x = arr[i];
//   b.innerHTML += `<tr>
//   <td>${x.id}</td>
//   <td>${x.name}</td>
//   <td>${x.category}</td>
//   <td>${x.city}</td>
//   </tr>`;
// }

// =====  Spread Operator =====

// let config = {
//   inst:'SAIMS',
//   course:'Web and Mobile',
//   batch:6,
//   year:2023
// }
// let std1 = {
//   ...config,
//   name:'Abu Bakar',
//   age:18,
//   sec:'A',
// }

// console.log(std1)

// let a = ['a','b','c']
// let c = [1,...a,2,3]

// console.log(c)

// let a = {
//   name:'ABC'
// }
// let b = {...a}

// b.id = 123

// console.log(a,b)

// let a = ['a','b','c']

// let b = [...a]

// b.push(123)
// console.log(a,b)

// let a = [
//   {
//     name: "ABC",
//     id: 1,
//     details: {
//       city: "Karachi",
//       country: "Pak",
//     },
//   },
// ];
// let b = JSON.parse(JSON.stringify([...a]))

// delete b[0].details;
// console.log(a,b);

// =====  Rest Operators =====

// function abc(...rest){
//   console.log(rest)
// }
// abc(1,2,3,4)

// =====  DeStructure =====

// let dataFromLocalStorage = {
//   id:1,
//   name:'ABC',
//   userName:'abc123',
//   contact:'12345687'
// }

// let {userName,name,id,contact} = dataFromLocalStorage

// console.log(userName)
// console.log(name)
// console.log(id)
// console.log(contact)

// let arr = ['abc','mno','pqr','jkl','xyz']

// let [a,b,,d] = arr

// console.log(d)

// let arr = [
//   2,
//   2,
//   3,
//   "abc",
//   "ty",

//   [
//     //5th index
//     true,
//     {
//       id: 374,
//       details: [
//         {
//           id: 1,
//           name: "Abu Bakar",
//           dt: [1, 2, 3, 4, 5],
//         },
//       ],
//     },
//   ],
// ];
// const obj = arr[5][1].details[0];
// let { name } = obj;
// let [a, b] = obj.dt;

// console.log(a, b);

// === Higher Order Functions ===

// === Call Back Functions ===

// function abc(a) {
//   console.log(a);
// }
// function xyz(x) {
//   return x;
// }

// abc(xyz("Abdul Basit Ahmed"));

// function abc(a) {
//   console.log(a);
//   return function (b) {
//     console.log(b);
//   };
// }

// abc("ABC")("XYZ")

// let a = function () {
//   console.log("ABC");
// };
// a();

// let b = (a) => {
//   console.log(a);
// };
// b("ABC");

// let a = (() => {
//   return "ABC";
// })();

// console.log(a);

