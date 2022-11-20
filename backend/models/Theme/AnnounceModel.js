const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnnounceModel = new Schema({
  announce: {
    type: String,
    require: true,
    maxLength:60
  }
});

const Announce = mongoose.model("announce", AnnounceModel);

module.exports = Announce;
