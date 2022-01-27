const Coffee = require('./model.js')


const CoffeeController = {
  getCoffee(req, res, next) {
    Coffee.find({...req.body},
      (err, data) => {
        if (err) return next(err)
        else {
          res.locals.coffee = [...data]
          return next()
        }
      }
    )
  }
}

module.exports = controller;