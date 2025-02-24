const express =require('express')
const mongoose = require('mongoose');
const PORT = 4700
const app = express()


const port = process.env.PORT || 3000;


const mongoURI = `mongodb+srv://sambabupolimetla:root@cluster0.xxyl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 

let dbConnected = false;


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!!');
    dbConnected = true; 
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    dbConnected = false; 
  });


app.get('/', (req, res) => {
  if (dbConnected) {
    res.send('MongoDB connected successfully!');
  } else {
    res.status(500).send('MongoDB connection failed!');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});