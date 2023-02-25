let num=1;
c=prompt('enter the value');
c=Number.parseInt(c);
var multi=(a)=>{
    let q=(a*num);
    if(q==(c*11)){
        clearInterval(id);
    }
    else{
        document.write('multiple of ${a} *${num} is :'+q+ "<br>")
        n++
    }
    let id = setInterval(multi,1000,c)
}