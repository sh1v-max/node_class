var a = 10;
var b = 0;
try {
  if (b == 0) {
    throw new Error("denominator is zero");
  } else {
    console.log(a / b);
  }
} catch (err) {
  console.log(err.message);
  console.log(err);
}
