const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./test-folder/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err)
    return null;
  }
  const first = result;
  readFile('./test-folder/second.txt', 'utf8', (err, result) => {
    if(err){
      console.log(err)
      return null;
    }
    const second = result
    writeFile(
      './test-folder/result-async.txt', 
      `Concat files: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return null
        } 
        console.log('done')
      }
    )
  })
})
console.log('starting next one')