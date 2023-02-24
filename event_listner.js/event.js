let x =function(e)
{
    alert("content 1")    //alert1
}
let y=function(e)
{
    alert("another content")    //alert 2
}
btn.addEventListener('click',x)
btn.addEventListener("click", y);
let a = prompt("enter number")
if(a=="2")
{
    btn.removeEventListener("click", y);
}