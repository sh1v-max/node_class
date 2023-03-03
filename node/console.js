// go to (https://nodejs.org/docs/latest-v16.x/api/console.html#console) for more information

// to create previous file you need to type (node console.js{node<file name(console.js in this case)}) in TERMINAL

// FS module:- var fs = require('fs'); Common use for the File System module: Read files. Create files. Update files.

const fs =require('fs')
fs.writeFileSync('read.text', "this is node js module"); //('file name', "content in file")
fs.appendFileSync('read.text', " i am editing your file")  // to update the content inside file
fs.copyFileSync('read.text','read2.text')
console.log('data copied')

fs.renameSync('read2.text','myfile.text')    //it will rename the file name read2 to myfile.text
fs.rmSync('myfile.text')    //it will remove the file given in parameter

// to read a file from terminal..... write <node file_name>/ node console.js in this case

const b=fs.readFileSync('read.text');  //command to read the content
console.log(b);
// this will show output in different data type which is (buffer) ie. you wont get actual content.
// output:- <Buffer 74 68 69 73 20 69 73 20 6e 6f 64 65 20 6a 73 20 6d 6f 64 75 6c 65 20 69 20 61 6d 20 65 64 69 74 69 6e 67 20 79 6f 75 72 20 66 69 6c 65>

c=b.toString();    //to convert buffer data into string
console.log(c);
// output:- <Buffer 74 68 69 73 20 69 73 20 6e 6f 64 65 20 6a 73 20 6d 6f 64 75 6c 65 20 69 20 61 6d 20 65 64 69 74 69 6e 67 20 79 6f 75 72 20 66 69 6c 65>
// this is node js module i am editing your file