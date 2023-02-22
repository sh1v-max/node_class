//let sum=0;
// let number=parseInt(prompt("Enter a number"))
// while(number>=0){
// sum=sum+number
// number=parseInt(prompt("Enter a number"))
// }
// console.log(sum);
// console.log(`${sum}`);

/************************do while******************** */


// var a="string";

// console.log(a.toLowerCase);
// console.log(a.toUpperCase);
// console.log(a.split(3));
// console.log(a.slice(1,3));
// console.log(a.slice(3));
// console.log(a.replace("ring","ming"));
// let b ="mutable";
// console.log(a.concat(b));
// let c= " riay ";
// console.log(c.trim());

// let d="this is a session id and numner is 2201";

// let e=Number.parseInt(d.slice(35));

// console.log(typeof(e));

// let arr=[1,2,3,4,5,"String",7,8];
// arr[7]=78;
// arr[0]=6;
// console.log(arr);
// delete arr[0];
// console.log(arr);
// arr.sort();
// console.log(arr);

// arr.sort(function(a,b){
// return a-b;
// })
// console.log(arr);
// arr.sort(function(a,b){
// return b-a;
// })
// console.log(arr);
let arr1=[1,2,3,4,5];
for(i=0;i<arr1.length;i++){
b=arr1[i]*arr1[i];
console.log(b);
}
let x=arr1.splice(2,1,23,34)
console.log(arr1);
console.log(x);

// arr1.forEach()//declasration as object

let name="sunil";
let a=Array.from(name)
console.log(a);

//Map will creates one new array by preferencing
let numbers = [4, 9, 16, 25];
let c=numbers.map((value)=> {
console.log(value);
return value +1;
})
console.log(c);