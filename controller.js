const Coffee = require('./model.js')


const CoffeeController = {
  getCoffee(req, res, next) {
    console.log('hello from controller')
    console.log('req', req.body)
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

module.exports = CoffeeController;