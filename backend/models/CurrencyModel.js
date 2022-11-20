const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CurrencyModel = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require:true,
  },
  activity:{
    type:Boolean,
    default:true

  }

});

const Currency = mongoose.model("Currency", CurrencyModel);

module.exports = Currency;
