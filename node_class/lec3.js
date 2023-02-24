// let arr=[22,45,2,44,55,1]
// let arr2=arr.filter((a)=>{
// return a<10
// })
// console.log(arr2);

//reduces the array to a single value and executes the provided function */; ///////
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.reduce((i1, i2) => {
  return i1 + i2;
});
console.log(arr2);

//practice//
let arr3 = [1, 2, 3, 4, 5];
let n = arr.reduce((i1, i2) => {
  return i1 * i2;
});
console.log(n);
