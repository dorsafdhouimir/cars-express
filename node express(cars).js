const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


mongoose.connect({'mongodb://localhost:27017/crud'});

const carS = new mongoose.Schema({
    name: "fiat 500",
    color: "red",
    milesRun: 15000,
    forRent: true,
    forSale: false
});

const userS = new mongoose.Schema({
    name: "dorsaf",
    password: "password123?"
});

const Car = mongoose.model('Car', carS);
const User = mongoose.model('User', userS);

app.use(bodyParser.json());
app.


const uri = "mongodb+srv://<username>:<mdarsfa123?>@cluster0.djie1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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


















app.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/cars', async (req, res) => {
    const car = new Car(req.body);
    await car.save();
    res.json(car);
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${}`);
});


































































app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});