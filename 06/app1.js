let x = (a, b, cb) => {
  let y = a + b;
  //   cb(y);
  return () => {
    console.log(y);
  };
};

let z = x(2, 5, () => {});
z();

/*
    The function `x` takes two parameters `a` and `b`, calculates their sum `y`, 
     and returns a function that logs `y`.
     The variable `z` holds the returned function from `x(2, 5)`,
      so calling `z()` logs `7` to the console.
     The parameter `cb` is currently unused.
 */
