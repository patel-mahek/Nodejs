//has error

const {readFile, writeFile} = require('fs'); // importing the readFile and writeFile functions from Node.js's fs (file system) module.

// In JavaScript, a callback function is a function that is passed as an argument to another 
// function and is executed after some operation has been completed. 
// Callbacks are used to ensure that certain code doesn’t execute until other code has finished. 
//second argument is a callback function
    //arguemnts - 1. error
            //  - 2. Result
//(err, result) => { ... }: This is a callback function. It is called after the file has been read. The callback takes two parameters:
// err: If an error occurs during the read operation, this will hold the error details.
// result: If reading the file is successful, this will hold the content of the file.
readFile('./trial2/test3.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./trial2/test4.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;   
        writeFile('./trial2/result2.txt',`here is the result ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
})

