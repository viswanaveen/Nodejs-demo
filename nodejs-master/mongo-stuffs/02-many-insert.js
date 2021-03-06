const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';

// Database Name


// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err

  const db = client.db('node-mongo');
  
  const employees = require('./emp.json')

  db.collection("employees").insertMany(employees, function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount)
      console.log(res.insertedIds)
      client.close();
  });
  
});
