function x(a, b, cb) {
  let y = a + b;
  return cb(y);
}

let z = x(2, 3, (val) => {
  console.log(val);
});
