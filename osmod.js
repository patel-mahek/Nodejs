//built in module os so dont need to install nayhting

const { log } = require('console')
const os = require('os')

//info abt current user
const user = os.userInfo()
console.log(user)


//method returning ysstem suptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
} 
console.log(currentOS)


