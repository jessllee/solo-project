const {MongoClient} = require('mongodb');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const coffeeController = require('./controller.js')

const PORT = 3000;

const mongo_uri = `mongodb+srv://USERNAME:PASSWORD@cluster0.dbgka.mongodb.net/DBNAME?retryWrites=true&w=majority`;

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'coffeeDB'
})
  // .then(() => console.log('database connected'))
  // .catch(() => console.log('error occured while connecting to database'));

const coffeeDB = mongoose.connection
coffeeDB.on('error', console.error.bind(console, 'connection error: '))
coffeeDB.once('open', () => {
  console.log('Connected Successfully')
})

// parse req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const coffeeRouter = express.Router()
app.use('/api', coffeeRouter)



coffeeRouter.post('/',
  // console.log('hello from fetch'),
  coffeeController.getCoffee,
  (req, res) => {
    // console.log('for the love of god...')
    if (!res.locals.coffee) return res.json({error: 'Choose another drink combination.'})
    return res.status(200).json({drinks: res.locals.coffee})
  }
)




// route handler for main app
coffeeRouter.use('/',
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