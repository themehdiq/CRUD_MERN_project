const Anime = require("../models/Anime");

const getData = () => async (req, res) => {
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong !" });
  }
};

module.exports = getData;
