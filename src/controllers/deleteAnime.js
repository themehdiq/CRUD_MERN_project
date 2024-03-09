const Anime = require("../models/Anime");

const deleteAnime = () => async (req, res) => {
  const idAnime = req.params.id;
  try {
    const anime = await Anime.findByIdAndDelete({ _id: idAnime });
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong !" });
  }
};
module.exports = deleteAnime;
