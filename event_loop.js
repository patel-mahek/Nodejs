// The event loop is what allows Node.js to perform non-blocking I/O operations —
//  despite the fact that a single JavaScript thread is used by default — by offloading
//  operations to the system kernel whenever possible.

// it registers the task and only when the operation is ocmplete it executes it

// console.log('first task')   //synchronous
// setTimeout(()=>{
//     console.log('second task')  //asynchronous
// },0)
// console.log('next task')  //synchronous

// when we execute the above code no matter what happens the second task will appear at the end as 
// This is an asynchronous operation. Even though the timeout is set to 0, the callback function console.log('second task') is placed in the callback queue. It will only be executed after all synchronous code in the current execution context is completed.


//example 1: event loop ka
// const {readFile} = require('fs')

// console.log('started the task')

// readFile('trial/test1.txt','utf8',(err,result)=>{
//     if(err){
//         console.log('opps! an error has occured')
//         return
//     }
//     console.log(result)
//     console.log('This is under the readfile and hence will take time')
// })

// console.log('this line is after read me file which wil be printed first')


// const http  = require('http')

// const server = http.createServer((req,res)=>{
//     console.log('request sent')
//     res.end('hello world')  //"Request end" may refer to the HttpResponse.End method in C#, which sends all buffered output to the client, stops page execution, and raises the EndRequest event.
// })

// server.listen(5000,()=>{
//     console.log('server listening on port 5000...')
// })



// const http  = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page')
//     }
//     if(req.url === '/about'){
//         //blocking code
//         for(let i =0;i<1000;i++){
//             for (let j= 0;j<1000;j++){
//                 console.log(`${i} ${j}`)
//             }
//             //thsi code will not only block the current perosn thta is requesting the page but for all the users till it odesnt reach 999 999
//         }
//         res.end('About page')
//     }
// })

// server.listen(5000,()=>{
//     console.log('server listening on port 5000...')
// })



// const {readFile} = require('fs')
// // This code defines a function getText that reads a file at a given path and returns a Promise. Promises are used to handle asynchronous operations, like file reading, in a cleaner way than using callback functions.
// const getText = (path) =>{
//     // designed to accept a file path (path) as an argument. Its purpose is to read the contents of the file and return a Promise that either resolves with the file's content or rejects with an error.
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./trial/test2.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))



// //better approach than above one - uusing async functions
// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./trial/test1.txt', 'utf8')
// const second = readFileSync('./trial/test2.txt', 'utf8')

// writeFileSync(
//   './trial/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')
