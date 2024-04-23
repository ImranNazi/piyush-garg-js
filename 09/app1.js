const x = [12, 34, 56, 43];
const y = x.filter((num) => {
  return num % 2 == 0;
});
console.log(y);
let z = x.splice(0, 6);
console.log(z);
