const os = require('os')

// Info about current user
const user = os.userInfo()

// Return system uptime is sec
const uptime = os.uptime()

// Multiple info in an object
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(user)

console.log(uptime)

console.log(currentOs)