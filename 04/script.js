const x = [23, "rah"];
x[2] = "bal";
for (i = 0; i < x.length; i++) {
  console.log(x[i] + "");
}
x.push("OK");
console.log(x);

x.pop();
console.log(x);
