/**
 * Viết lại phương thức some
 */

// Mảng thử
// const arr = [1, 3, 20, 5];

// // Overwrite
// Array.prototype.some2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }
//   var result = false;
//   // var arrLength = this.length;
//   // for (var i = 0; i < arrLength; i++) {
//   //   result = callback(this[i], i, this);
//   //   if (result === true) {
//   //     break;
//   //   }
//   // }
//   for (var i in this) {
//     if (this.hasOwnProperty(i)) {
//       result = callback(this[i], Number(i), this);
//       if (result === true) {
//         break;
//       }
//     }
//   }

//   return result;
// };

// // Gọi hàm thử
// var result = arr.some2(function (item, i, arr) {
//   console.log(item, i, arr);
//   return item % 2 === 0;
// });
// console.log(result);

// Gọi hảm nguyên bản
// var result = arr.some(function (item, i, arr) {
//   console.log(item, i, arr);
//   return item % 2 === 0;
// });

// console.log(result);

/**
 * Viết lại phương thức every
 */

// Mảng thử
// const arr = [1, 30, 39, 29, 10, 13];

// // Overwrite
// Array.prototype.every2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }
//   var result = true;
//   // var arrLength = this.length;
//   // for (var i = 0; i < arrLength; i++) {
//   //   result = callback(this[i], i, this);
//   //   if (result === false) {
//   //     break;
//   //   }
//   // }
//   for (var i in this) {
//     if (this.hasOwnProperty(i)) {
//       result = callback(this[i], Number(i), this);
//       if (result === false) {
//         break;
//       }
//     }
//   }

//   return result;
// };

// // Gọi hàm thử
// var result = arr.every2(function (item, i, arr) {
//   console.log(item, i, arr);
//   return item < 30;
// });
// console.log(result);

// // Gọi hảm nguyên bản
// var result = arr.every(function (item, i, arr) {
//   console.log(item, i, arr);
//   return item < 30;
// });

// console.log(result);

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
// words.length = 100;
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
//   for (var i in this) {
//     if (this.hasOwnProperty(i)) {
//       pushItem = callback(this[i], i, this) ? this[i] : false;
//     }
//     if (!!pushItem) {
//       result.push(pushItem);
//     }
//   }

//   return result;
// };
// filter k dung. pushItem not defined
// example

//
// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   const newArray = [];
//   for(let i=0;i<this.length;i++){
//     if(callback(this[i])===true){
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// const new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

// Gọi hàm thử
// const result = words.filter2(function (word, i, arr) {
//console.log(word, i, arr);
// return word == 10;
//return word.length > 16;
//return word % 2 !== 0;
//return typeof word === "object";
// });
// console.log(result);

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
// arr.length = 100;

// var arr = new Array(30);
// arr.push(200);

// // Overwrite
// Array.prototype.find2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }

//   var result = false;
//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     if (callback(this[i], i, this)) {
//       result = this[i];
//     }
//   }

//   // Theo mô tả của Mozilla thì find sẽ chạy hết phần tử, kể cả phần tử
//   // empty chưa gán để lọc hết nên k cần dùng for-in

//   // for (var i in this) {
//   //   if (this.hasOwnProperty(i)) {
//   //     result = callback(this[i], Number(i), this);
//   //     if (result) break;
//   //   }
//   // }
//   return result === false ? undefined : result;
// };

// // Gọi hàm thử
// const found = arr.find(function (item, i, originArray) {
//   console.log(item, i);
//   // return item === 0;
//   return item > 1000;
// });
// console.log(found);

// Chưa làm được truyền đối số thứ 2

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
// arr.length = 100;

// for (var i in arr) {
//   console.log(arr[i]);
// }

// Overwrite
// Array.prototype.forEach2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not function`);
//   }

//   for (var i in this) {
//     if (this.hasOwnProperty(i)) {
//       callback(this[i], Number(i), this);
//     }
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

// // Mảng thử
// var arr = [2, 4, 5, 10];
// //arr.length = 10;

// // Overwrite
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
//   // Chưa sửa đc empty elements
//   // if (initialValue === undefined) {
//   //   initialValue = this[0];
//   // }
//   // for (var i in this) {
//   //   if (this.hasOwnProperty(i)) {
//   //     initialValue = callback(initialValue, this[i], Number(i), this);
//   //   }
//   // }
// };

// // Gọi hàm thử
// var result = arr.reduce2(function (total, current, i, originArray) {
//   console.log(total, current);
//   return total + current;
// }, 0);
// console.log(result);

// Gọi hàm nguyên bản
// var result = arr.reduce(function (total, current, i, originArray) {
//   console.log(current, i);
//   return total + current;
// }, 0);
// console.log(result);
