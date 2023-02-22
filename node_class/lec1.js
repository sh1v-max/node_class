var a=120;
var b=20;
var c=20;
                //arithmetic operator
console.log(a+b);
console.log(a-b);
console.log(a * b);//
console.log(a / b);
console.log(b%a);

                //increment decrement operator
console.log(++a);
console.log(a++);
console.log(a--);
console.log(--a);

                //comparison operator
console.log(a==b);
console.log(a===b);
console.log(b===c);

                //logical operator
var x = 15;
var y = 20;
console.log(x && y);
console.log(x||y);

                //and operator
const m=5 ,n=3;
console.log((m>6)&&(y<5));

                //ternary operator
var t="hey google";
var f="hey siri";
const ans=(t=f)?"bingo" :"you loose";
console.log(ans);

                //positive negetive numbers
let k=prompt("enter a number please! ") //prompt to take input
console.log(typeof k)                   //typeof to get type of the given data
a=Number.parseInt(k)                    //convers string into integer
if(k==0)
{
    alert("the entered number is ZERO")
}
else if(k<0)
{
    alert("the entered number is negetive");
}
else{
    alert("the entered number is positive");
}


                //for...in loop
let obj = {
  stu1: "John",
  stu2: "Doe",
  stu3: "Mayank",
  stu4: "Prem",
  stu5: "Dheer",
};

for (let a in obj) 
{
    b="$" + obj[a]                      //to fetch the value along with the "$" symbol
    console.log(`${a}:${b}`);           //used symbol is backtick"`"
}

                //for...in loop to print a string one character at once

const a ='code'
for(let i in a)
{
    console.log(a[i])
}


                //to get sum until user gives negetive input
let sum=0
let num=parseInt(prompt('enter the number please!'))
while(num>=0)
{
    sum +=num
    num=parseInt(prompt('enter the number again'))
}
console.log(`the sum is :${sum}`)               //note the dollar sign and backtrick

                //average of two numbers
function avg(x,y)
{
    return(x+y/2)
}
let a =10
let b =20
let c =30
console.log("average of a and b", avg(a,b))
console.log("average of b and c", avg(b, c))
console.log("average of c and a", avg(c, a))