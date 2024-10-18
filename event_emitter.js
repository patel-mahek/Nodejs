// const EventEmitter = require('events')

// const customEmitter = new EventEmitter() 
// //on - listen the event
// //emit - emit an event

// customEmitter.on('response',()=>{
//     console.log(`data recieved`)
// })

// customEmitter.emit('response')

// 1.as many lsitening fucntion we want
// 2.listen for the event and then emit it
// 3.can pass arguemnts while commiting the event


// const EventEmitter = require('events')
// const customEmitter = new EventEmitter() 
// customEmitter.on('response', (name, id) => {
//     console.log(`data recieved user ${name} with id:${id}`)
//   })
  
//   customEmitter.on('response', () => {
//     console.log('some other logic here')
//   })
  
//   customEmitter.emit('response', 'john', 34)

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// // Using Event Emitter API
// const server = http.createServer()
// // emits request event
// // subcribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//   res.end('Welcome')
// })

// server.listen(5000)