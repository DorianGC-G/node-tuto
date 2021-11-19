const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Wesh gros bien ou bien')
  } else if (req.url === '/about') {
    res.end('Tu veux savoir quoi t\'es flic ou quoi fdp' )
  } else {
    res.end(`
     <h1>WHAT ARE YOU DOING IN MY SWAMP</h1>
     <p>Get the fuck outta here</p>
     <a href="/">FUCK OFF</a>
   `)
  }
})

server.listen(5000)