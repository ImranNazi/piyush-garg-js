let x = (...z) => {
  let ans = 0;
  for (let i = 0; i < z.length; i++) {
    ans += z[i];
  }
  return ans;
};

let y = x(22, 34, 54, 23);
console.log(y + " ");
