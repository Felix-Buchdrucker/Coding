var forecast = [
  { day: "Monday", sun: true, humidity: 10 },
  { day: "Tuesday", sun: false, humidity: 75 },
  { day: "Wednesday", sun: true, humidity: 10 },
  { day: "Thursday", sun: false, humidity: 100 },
  { day: "Friday", sun: false, humidity: 120 },
  { day: "Saturday", sun: true, humidity: 15 },
  { day: "Sunday", sun: false, humidity: 45 }
];

// var humid = [];

// for (var i = 0; i < forecast.length; i++) {
//   humid.push(forecast[i].humidity);
// }

// var humid = forecast.map(function(wetness) {
//   return wetness.humidity;
// });
var numbers = [5, 10, 15, 20, 25];
// var triples = numbers.map(function(num){
//     return num*3
// });

var children = ["Max", "Lisa"];

// var double = numbers
//   .map(function(num) {
//     return num * 2;
//   })
//   .map(function(num) {
//     return num + 1;
//   });

var greeting = ["hi", "hello", "hey", "thanks"];
var shout = greeting.map(function(str) {
  return str.toUpperCase();
});
var shoutHi = shout.shift();
