setTimeout(()=>{
    console.log("chapter 1")
},1000)
try{
    console.log(Hello)
}
catch(err)  //err here is the error object it targets error message and error name
{
    console.log("error caught")
    console.log(err.name)     //display name/type of error (reference error in this case)
    console.log(err.message)    //reason of the error (here it will print "hello" is not defined and is obvious)
}

setTimeout(() => {
  console.log("chapter 2");
}, 2000);
setTimeout(() => {
  console.log("chapter 3");
}, 3000);
setTimeout(() => {
  console.log("chapter 4");
}, 4000);
