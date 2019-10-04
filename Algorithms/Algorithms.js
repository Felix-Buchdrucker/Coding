// var testScores = [32, 84, 55, 63, 75, 69];
// var passingTest = function(test) {
//   return test > 60;
// };
// var graduation = testScores.filter(function(test) {
//   return test > 60;
// });

// forLoop

// var graduation = [];
// for (var i = 0; i < testScores.length; i++) {
//   if (testScores[i] > 60) {
//     graduation.push(testScores[i]);
//   }
// }

var forecast = [
  { day: "Monday", sun: true },
  { day: "Tuesday", sun: false },
  { day: "Wednesday", sun: true },
  { day: "Thursday", sun: false },
  { day: "Friday", sun: false },
  { day: "Saturday", sun: true },
  { day: "Sunday", sun: false }
];
var sunnyDays = [];
for (var i = 0; i < forecast.length; i++);
{
  if (forecast[i].sun) {
    sunnyDays.push(forecast[i]);
  }
}

var sunnyDays = forecast.filter(function(weather) {
  return weather.sun;
});
