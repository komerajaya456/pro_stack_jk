// const mongoose = require('mongoose');

// // // Connection URI
// const url= 'mongodb+srv://komerajaya456:Komerajaya987@firstcluster.dkqu5xk.mongodb.net/?retryWrites=true&w=majority'
// const dbName = 'gowjkhvn';
// // // Connect to MongoDB
// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // Get the default connection
// // const db = mongoose.connection;

// // // Bind connection to error event (to get notification of connection errors)
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) throw err;

//     console.log('Connected to the database server');

//     const db = client.db(dbName);

//     // Your database-related code goes here

//     client.close();
// });














// // const MongoClient = require('mongodb').MongoClient;

// // // Connection URL
// // const url = 'mongodb://localhost:3000';

// // // Database Name
// // const dbName = 'yourDatabaseName';

// // // Create a new MongoClient
// // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// // // Use connect method to connect to the server
// // client.connect(async (err) => {
// //   if (err) throw err;
  
// //   console.log('Connected to the database');

// //   const db = client.db(dbName);
// //   const collection = db.collection('yourCollectionName');

// //   // Example document to insert
// //   const document = { key1: 'value1', key2: 'value2' };

// //   // Insert the document
// //   await collection.insertOne(document);
  
// //   console.log('Data inserted successfully');

// //   // Close the connection
// //   client.close();
// // });
