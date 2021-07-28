console.log("Hi");

/**
 * Viết lại phương thức reduce
 */

// var arr = [2, 4, 5, 10];

// Array.prototype.reduce2 = function (callback, initialValue) {
//   var arrLength = this.length;
//   var i = 0;
//   if (initialValue === undefined) {
//     initialValue = this[0];
//     i++;
//   }
//   for (; i < arrLength; i++) {
//     initialValue = callback(initialValue, this[i], i, this);
//   }
//   return initialValue;
// };

// var result = arr.reduce2(function (total, current) {
//   return total + current;
// });

// console.log(result);

// var result = arr.reduce(function (total, current) {
//   return total + current;
// }, 0);

// console.log(result);
