// array.reduce(function(acc, curr, ind, arr)initialValue)
var numbers = [1, 2, 3, 4];
numbers.reduce(function(acc, curr, idx, arr) {
  return acc + curr;
}, 5);

var multArr = [[0, 1], [2, 3], [4, 5]];
multArr.reduce(
  function(acc, curr, idx, arr) {
    return acc.concat(curr);
  },
  [-2, -1]
);

// var homeruns = [
//   { batter: 12 },
//   { batter: 21 },
//   { batter: 48 },
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

var numbers = [10, 15, 25, 30, 40];

var sumNumbers = numbers.reduce(function(a, c) {
  console.log(a + c);
  return a + c;
});

var multNumbers = numbers.reduce(function(a, b) {
  return a * b;
});

var large = numbers.reduce(function(acc, curr) {
  //   for (i = 0; i < numbers.length; i++) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

var triples = numbers.map(function(three) {
  return numbers * 3;
}).reduce(function(three, n){
    return three + n;
},0);
