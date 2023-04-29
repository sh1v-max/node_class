//*********empty buffer/

var buff=Buffer.alloc(10)
console.log(buff)

//*********buffer with content/

var buff=Buffer.alloc(10)
buff.write("Hello")
console.log(buff)
console.log(buff.toString())

//****another way of creating buffer */
var buff2=Buffer.from('welcome')   //no size allocation
console.log(buff2)    //size will be allocated randomly

//fill
const buff3=Buffer.alloc(5) 
console.log(buff3.fill('a'))
console.log(buff3.toString())
