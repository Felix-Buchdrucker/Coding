// var numbers = [1, 2, 3, 4];
// numbers.reduce(function(acc, curr, idx, arr) {
//   return acc + curr;
// }, 5);
// var multArr = [[0, 1], [2, 3], [4, 5]];
// multArr.reduce(
//   function(acc, curr, idx, arr) {
//     return acc.concat(curr);
//   },
//   [-2, -1]
// );
//
//

// var homeruns = [
//   { batter: 12 },
//   { batter: 21 },
//   { batter: 28 },
//   { batter: 42 },
//   { batter: 31 },
//   { batter: 22 },
//   { batter: 17 },
//   { batter: 16 },
//   { batter: 5 }
// ];
// var totalHomers = homeruns.reduce(function(a, b) {
//   console.log("accumulative", a, "current", b);
//   return a + b.batter;
// }, 0);

//
// var numbersNew = [5, 20, 15, 10, 25];

// numbersNew.reduce(function(x, y) {
//   console.log(x, y);
//   return x * y;
// });

// numbersNew(function(acc, curr) {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// });

var age = [5, 10, 15, 20, 25, 65];
var comb = [];

var comb = age
  .map(function(mult) {
    return age * 3;
  })
  .reduce(function(a, b) {
    return a + b;
  }, 0);
