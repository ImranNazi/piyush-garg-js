// //arrays
// const n = [23, 45, "raj"];
// let nArr = [];
// n.forEach((num) => {
//   nArr.push(num * 2);
// });
// console.log(nArr);

/*triple values in array */
const x = [23, 45, 65, 322];
let y = (num) => {
  return num * 2;
};

const z = x.map(y);
console.log(z);
