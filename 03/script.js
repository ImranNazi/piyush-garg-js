// let x = (a, b, cb) => {
//   let res = a + b;
//   cb(res);
//   //   return console.log(res);
// };

// let y = x(2, 3, (z) => {
//   console.log(z);
// });
/*This code defines a function `x` that takes three parameters: `a`, `b`, and `cb`, where `cb` is a callback function. Inside `x`, it adds `a` and `b`, then calls the callback `cb` with the result. 

Then, it defines another function `y` which invokes `x` with arguments `2`, `3`, and a callback function that logs the result `z`. 

Overall, `y` invokes `x` with `2` and `3`, and when `x` calculates the sum `5`, it calls the callback function passed to it, which logs `5`. */

/*start */
let x = (a, b, cb) => {
  let res = a + b;
  cb(res);
  return console.log(res);
};

let y = x(2, 3, () => {});
