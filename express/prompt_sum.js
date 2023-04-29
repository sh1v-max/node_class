//find the sum of all the positive numbers until user gives a negetive no using prompt
//install<< npm install prompt-sync

const prompt=require("prompt-sync")()
let sum=0
let number=parseInt(prompt('enter a number'))
while(number>=0)
{
    sum+=number
    number=parseInt(prompt('enter a number'))
}
console.log(`the sum is ${sum}`)   //remember to use backticks here