const fs = require('fs');

fs.readFile('test.txt', function(err, data) {
    if (err) {
        console.log(err)
        return
    }
    
    console.log('File contents : ', data.toString())

    fs.writeFile('dummy.txt', data, function(err) {
        if (err)
            return console.log('Error in writing to dummy')
    })
})



console.log('Things work differently in Node.js')