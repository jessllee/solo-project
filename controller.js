const controller = {}

controller.getDrinks = (req, res, next) => {
  console.log('body', req.body)
  return next()
}

module.exports = controller;