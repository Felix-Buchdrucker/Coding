// var names =
//   (["John", "Sarah", "Eric", "Jane", "February", "March", "December"], 7);
// // names.splice(2,0, "Tom");

// // names.splice(3,1);

// function chopper(arr, excess) {
//   names.splice(3, excess);
//   return arr;
// }
var str = "I did, did I?";

function palindrom(inStr) {
  inStr = inStr.replace(/\W/g, "").toLowerCase;
  //   for (var i = 0; i < inStr.length; i++) {
  //     if (inStr !== inStr.length[inStr.length - 1 - i]) {
  //       return false;
  //     }
  //   }

  return (
    str ===
    str
      .splice("")
      .reverse()
      .join("")
  );
}

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];

var goOutside = [];
// for(var i = 0; i < weather.length; i++){
//   if(weather[i] > 70){
//     goOutside.push(weather[i]);
//   }
var goOutside = weather.filter(function(temp) {
  return temp > 70;
});
