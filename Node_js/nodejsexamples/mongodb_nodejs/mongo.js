const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/?retryWrites=true&w=majority'

// Create a new MongoClient
const client = new MongoClient(uri); //, { useNewUrlParser: true, useUnifiedTopology: true }




async function getdata(){

  let result=await client.connect();

  let db=result.db("salama");        //connect to Database

  let collection=db.collection("tablets");

  let data=await collection.findOne({ stripqty: '15'});

  console.log((data.cost))
}

getdata();



