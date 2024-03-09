const Anime = require("../models/Anime");

const modifyAnime = () => async (req, res) => {
  try {
    const idAnime = req.params.id;

    const anime = await Anime.findOneAndUpdate(
      { _id: idAnime },
      { $set: { name: "soufiane" } }
    );
    const animes = await Anime.find();
    res.status(201).json(animes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong !" });
  }
};

module.exports = modifyAnime;
