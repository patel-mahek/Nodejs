const path = require('path')

console.log(path.sep)

const filepath = path.join('./path','test.js')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

//The path.resolve() method in Node.js resolves a sequence of paths into an absolute path, meaning it creates a full file path from the given input.
    const absolute = path.resolve(__dirname,'content','subfolder','test.js')
    //dirname willl point ot the current directory here it it the pathmod
    console.log(absolute)
