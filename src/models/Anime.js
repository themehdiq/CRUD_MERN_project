const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const animeSchema = new Schema({
  // id: Number,
  name: {
    type: String,
    required: true,
  },
});

const Anime = model("Anime", animeSchema);

module.exports = Anime;
