/**
 * Viết lại phương thức map
 */

// var arr = [2, 4, 5, 10];

// Array.prototype.map2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }

//   var result = [];
//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// var result = arr.map2((item) => {
//   return item + 2;
// });

// console.log(result);

// var result = arr.map(123);

// console.log(result);

/**
 * Viết lại phương thức reduce
 */

// var arr = [2, 4, 5, 10];

// Array.prototype.reduce2 = function (callback, initialValue) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }
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
