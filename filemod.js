//2 methods for file module-aynchronously (non-blocking) / synchronously (blocking)

const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./trial/test1.txt','utf-8')
const second = readFileSync('./trial/test2.txt','utf-8')

writeFileSync('./trial/result.txt'
    ,`here is the result ${first},${second}`,
    {flag :'a'}
)

// {flag :'a'}//this will append the content
//if we dont use a then it will just overwrite the file