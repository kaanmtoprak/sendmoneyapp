const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  symbol: {
    type: String,
  },
  image: {
    type: String,
    default: "money.png",
  },
  price: {
    type: String,
    require: true,
  },
});

const Exchange = mongoose.model("ExRate", ExchangeSchema);

module.exports = Exchange;
