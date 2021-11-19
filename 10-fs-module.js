const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./test-folder/first.txt', 'utf8')
const second = readFileSync('./test-folder/second.txt', 'utf8')

writeFileSync(
  './test-folder/result-sync.txt', 
  `Concat files: ${first}, ${second}`,
  { flag: 'a'}
)

console.log('done with this one')
console.log('starting next one')