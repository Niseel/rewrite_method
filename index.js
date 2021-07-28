/**
 * Viết lại phương thức filter
 */

// Mảng thử

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const words = [2, 5, 1, 6, 8, 12, 623, 11];
// const words = [
//   1,
//   {},
//   "asda",
//   [9, 5, 7],
//   function () {
//     console.log("Xin chao");
//   },
// ];

// Overwrite

// Array.prototype.filter2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }
//   var result = [];

//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     pushItem = callback(this[i], i, this) ? this[i] : false;
//     if (!!pushItem) {
//       result.push(pushItem);
//     }
//   }

//   return result;
// };

// Gọi hàm thử

// const result = words.filter2(function (word, i, arr) {
//   console.log(word, i, arr);
//   //return word.length > 16;
//   //return word % 2 !== 0;
//   //return typeof word === "object";
// });
//console.log(result);

// Gọi hảm nguyên bản
// const result = words.filter2(function (word, i, arr) {
//   console.log(word, i, arr);
//   //return word.length > 16;
//   //return word % 2 !== 0;
//   //return typeof word === "object";
// });
//console.log(result);

/**
 * Viết lại phương thức find
 */

// Mảng thử
// const arr = [5, 12, 8, 130, 44];

// Overwrite
// Array.prototype.find2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }

//   var result;
//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     result = callback(this[i], i, this);
//   }
//   return result === false ? undefined : result;
// };

// Gọi hàm thử
// const found = arr.find2(function (item, i, originArray) {
//   console.log(item, i, originArray);
//   // return item === 0;
//   // return item > 10;
// });
// console.log(found);

// Gọi hàm nguyên bản
// const found = arr.find(function (item, i, originArray) {
//   console.log(item, i, originArray);
//   // return item === 0;
//   // return item > 10;
// });
// console.log(found);

/**
 * Viết lại phương thức forEach
 */

// Mảng thử
// var arr = [2, 4, 5, 10];

// Overwrite
// Array.prototype.forEach2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }

//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     callback(this[i], i, this);
//   }
// };

// Gọi Hàm thử
// arr.forEach2(function (item, i, ar) {
//   console.log(item, i, ar);
// });

// Gọi Hàm nguyên bản
// arr.forEach(function (item, i, ar) {
//   console.log(item, i, ar);
// });

/**
 * Viết lại phương thức map
 */

// Mảng thử
// var arr = [2, 4, 5, 10];

// Overwrite
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

// Gọi hàm thử
// var result = arr.map2((item) => {
//   return item + 2;
// });
// console.log(result);

// Gọi hàm nguyên bản
// var result = arr.map((item) => {
//   return item + 2;
// });
// console.log(result);

/**
 * Viết lại phương thức reduce
 */

// Mảng thử
// var arr = [2, 4, 5, 10];

// Overwrite
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

// Gọi hàm thử
// var result = arr.reduce2(function (total, current) {
//   return total + current;
// });
// console.log(result);

// Gọi hàm nguyên bản
// var result = arr.reduce(function (total, current) {
//   return total + current;
// }, 0);
// console.log(result);
