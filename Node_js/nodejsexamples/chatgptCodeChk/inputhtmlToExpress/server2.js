// const express = require('express');
// const mongoose=require('mongoose')
// const app = express();

// const port = 3000;
// const uri = 'mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(uri);
// const conn=mongoose.connection;

// conn.once('open',()=>{
//   console.log("success fully connected");
// })
// conn.on('error',()=>{
//   console.log("not connectedt");
//   process.exit();
// })



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
