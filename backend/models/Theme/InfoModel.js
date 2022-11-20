const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InfoModel = new Schema({
  information: {
    type: String,
    require: true,
    maxLength:60
  }
});

const Information = mongoose.model("information", InfoModel);

module.exports = Information;
