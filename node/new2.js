
//******************here we are linking two different fiile using module or function************************/


const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const mul=(a,b)=>{
    return a*b
}
module.exports.add=add   // using export module by function name(add) to make it use for another file
module.exports.sub=sub   // we will be using new2 in new file and will be importing it there
module.exports.mul=mul