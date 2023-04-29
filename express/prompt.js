// npm install prompt

// whenever we need to take the input from user

var prompt=require('prompt')
//funtion call
prompt.start();

//reading two properties from user ie. name and class
prompt.get(['Name','class'],function(err,result){

    //printing the results
    console.log('Command line input recieved: ');
    console.log('Name: ' +result.Name);
    console.log('class: ' +result.class);
})



