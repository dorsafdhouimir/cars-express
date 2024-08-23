const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute')
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/user',userRoute)

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/cars").then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});