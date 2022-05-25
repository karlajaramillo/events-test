import { MongoClient } from 'mongodb'

// functions that contains only server side code
// all these API routes will run on the server
// these functions only are triggered when a request is sent to this route --> /api/new-meetup
// POST /api/new-meetup

// route -> /api/new-meetup

async function handler (req, res) {
  if (req.method === 'POST') {
    // the form will contained -> title, description, image, description...
    //const data = req.body; // data from the request
    //const {title, image, address, description} = data;

    //const { title, image, address, description } = req.body.data

    const data = req.body; // to insert as document into the db

    // give a connection client eventually or async
     // This database will be created --> Meetups
    const client = await MongoClient.connect('mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority')
   // create the db to get hold of the db 
   // if the db is not created, it'll be created on the fly --> /Meetups
    const db = client.db();

    // Create the collection, which holds multiple documents
    // inside db.collection('myCollection')
    const meetupsCollection = db.collection('meetups')
    // insert document, which is an object with -> title, image...
    // result will be the object which is an async operation, 
    // the result is an object, and insertOne returns a promise
    const result = await meetupsCollection.insertOne(data);
    //console.log(result);
    // close the connection
    client.close();

    // Send the response to the client
    // 201 -> it was successfully added.
    res.status(201).json({message: 'Meetup inserted!'})

}
}

// you have to export this function
export default handler

//kavajaga
//Events2022
