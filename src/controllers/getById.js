const Anime = require("../models/Anime");

const getById = () => async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id).select("-_id");
    if (anime) {
      res.status(200).json(anime);
    } else {
      res.status(404).json({ message: "anime not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong !" });
  }
};

module.exports = getById;
