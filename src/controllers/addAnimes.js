const Anime = require("../models/Anime");

const addAnime = () => async (req, res) => {
  try {
    const newAnime = new Anime({
      name: req.body.name,
    });

    const data = await newAnime.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error adding new anime !" });
  }
};

module.exports = addAnime;
