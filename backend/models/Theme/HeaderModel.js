const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeaderModel = new Schema({
  header: {
    type: String,
    require: true,
    maxLength:100
  }
});

const Header = mongoose.model("header", HeaderModel);

module.exports = Header;
