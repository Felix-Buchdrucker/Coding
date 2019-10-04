// Array.filter(function(Value) {
//   return true;
// });
// var testScores = [92, 58, 82, 10, 25];
// var passingTest = function(test){
//   return test > 70;
// }
// var graduation = testScores.filter(function(test) {
//   return test > 60;
// });

// var graduation = [];
// for (var i = 0; i < testScores.length; i++) {
//   if (testScores[i] > 60) {
//     graduation.push(testScores[i]);
//   }
// }

// var weather = [72, 84, 54, 66, 86, 56, 85];
// var goOutside = [];

// for (var i = 0; i < weather.length; i++);
// {
//   if (weather[i] > 70) {
//     goOutside.push(weather[i]);
//   }
// }
// var goOutside = weather.filter(function(temp) {
//   return temp > 60;
// });

var forecast = [
  { day: "Monday", sun: false, humidity: 10 },
  { day: "Tuesday", sun: false, humidity: 10 },
  { day: "Wednesday", sun: true, humidity: 10 },
  { day: "Thursday", sun: false, humidity: 50 },
  { day: "Friday", sun: true, humidity: 100 },
  { day: "Saturday", sun: true, humidity: 52 },
  { day: "Sunday", sun: false, humidity: 25 }
];

// var sunnyDays = [];

// // for (var i = 0; i < forecast.length; i++) {
// //   if (forecast[i].sun) {
// //     sunnyDays.push(forecast[i]);
// //   }
// // }

// var sunnyDays = forecase.filter(function(weather) {
//   return weather.sun;
// });
// var humid = [];

// for (var i = 0; i < forecast.length; i++) {
//   humid.push(forecast[i].humidity);
// }
// var humid = forecast.map(function(wetness) {
//   return wetness.humidity;
// });

// implement Map-method 2 times
// array with number values

// var numbers = [5, 10, 15, 20, 25];
// var double = numbers.map(function(nums) {
//     return nums * 2;
//   })
//   .map(function(nums) {
//     return nums + 1;
//   });

var greeting = ["hi", "hello", "thanks", "hey"];
var shell = greeting.map(function(ways) {
  return ways.toUpperCase();
});
var shellHi = shell.shift();

var greetingLowerCase = shout.map(function(ways) {
  return ways.toLowerCase();
});
