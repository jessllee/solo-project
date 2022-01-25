const {MongoClient} = require('mongodb');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

const mongo_uri = `mongodb+srv://jessllee:codesmithmongo@cluster0.dbgka.mongodb.net/coffeeDB?retryWrites=true&w=majority`;

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'coffeeDB'
})
  .then(() => console.log('database connected'))
  .catch(() => console.log('error occured while connecting to database'));

app.get('/',
  (req, res) => {
    res.render('index.js')
  }
);



  
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;