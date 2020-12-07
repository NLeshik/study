console.log('1');

var a = 42;
// console.log(a);

// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// function filterRangeInPlace(arr, a, b) {
//   arr.forEach((item, index) => {
//     if (item <= a || item >= b) {
//       arr.splice(index, 1);
//     }
//   })
// }

// console.log('---',filterRangeInPlace(arr, 1, 4),'arr', arr);

// arr.sort( (a, b) => a - b ).reverse();

// function copySorted(arr) {
//   return arr.slice(0, arr.length).sort();
// }

let alex = { name: "Саша", age: 35 };
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let first = { name: "Ноэль", age: 16 };
let masha = { name: "Маша", age: 28 };

let arr = [ alex, vasya, petya, first, masha ];
//
// function sortByAge(arr) {
//   return arr.sort( (a, b) => a.age - b.age );
// }
// console.log('sorted', sortByAge(arr));

// let arr = [1, 2, 3, 4, 5];

// function shuffle(array) {
//   let currentIndex = array.length;
//   let temporaryValue;
//   let randomIndex;
//
//   while (0 !== currentIndex) {
//
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

// function getAverageAge(users) {
//   console.log('users', users)
//   return users.reduce((sum, item) => sum + item.age, 0)/users.length;
// }


// console.log('--', getAverageAge(arr) );

function unique(arr) {
  let result = [];
  arr.forEach((item) => {
    if (result.indexOf(item, 0) === -1) {
      result.push(item);
    }
  });
  return result;
}

let strings = ["кришна", "кришна", "харе", "харер", "харел", "харе", "кришна", "кришнать", ":-O"];

// console.log(unique(strings));

let salaries = {
  "John": 100,
  "Alex": 300,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for  (let [key, value] of Object.entries(salaries)) {
    console.log('--', value, key);
    if ( max <= value ) {
      max = value;
      maxName = key;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));

// let user = {
//   name: 'John',
//   age: 30,
//   surname: 'Smith'
// };
//
// function count(obj) {
//   return Object.keys(obj).length;
// }

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log('name', name, 'age', age, 'isAdmin', isAdmin);
