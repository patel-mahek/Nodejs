//to access the module
const names = require('./module1')
const sayHi = require('./modules')

// sayHi(secret)
sayHi(names.john)
sayHi(names.peter)

const data = require('./modules3')
console.log(data)

require('./addition')