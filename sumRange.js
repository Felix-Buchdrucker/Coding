var numbers = [22, -5, 6, 180];
var max = numbers[0];
var min = numbers[0];
var total = 0;
function numbersRange() {
  //   var result = Math.min(numbers) + Math.max(numbers);
  //   return result;

  for (var i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  total = max + min;
  {
    return total;
  }
}
numbersRange();
