const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coffeeSchema = new Schema ({
  name: { type: String, required: true },
  description: { type: String, required: true },
  coffee: {type: Boolean, required: true },
  espresso: {type: Boolean, required: true },
  steamedMilk: {type: Boolean, required: true },
  foamedMilk: {type: Boolean, required: true },
  frothedMilk: {type: Boolean, required: true },
  condensedMilk: {type: Boolean, required: true },
  cream: {type: Boolean, required: true },
  whippedCream: {type: Boolean, required: true },
  iceCream: {type: Boolean, required: true },
  sugar: {type: Boolean, required: true },
  chocolate: {type: Boolean, required: true },
  alcohol: {type: Boolean, required: true },
  water: {type: Boolean, required: true }
})

const Coffee = mongoose.model('coffee', coffeeSchema)

module.exports = Coffee