// Every file is a module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-way')
require ('./7-mind-grenade')
for (const [key, value] of Object.entries(names)) {
  sayHi(value)
}
