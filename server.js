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

// route handler for main app
app.get('/',
  (req, res) => {
    console.log('Hi there')
    return res.status(200).sendFile(path.resolve(__dirname, 'index.html'))
  }
);

// catch-all
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = { 
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'Can\'t find your coffee order. Please try again.' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

  
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;