//when we have to handle continous data or big files

// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./trial/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

// const { createReadStream } = require('fs')

// const stream = createReadStream('./trial/big.txt')

// stream.on('data', (result) => {
//   console.log(result)
// })
// stream.on('error', (err) => console.log(err))

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })


//this will help send our big file in chunkssss
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./trial/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)