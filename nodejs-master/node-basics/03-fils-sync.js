const fs = require('fs')

const data = fs.readFileSync('test.txt')

console.log('Synchronous programming')

fs.writeFileSync('synced.txt', data)
