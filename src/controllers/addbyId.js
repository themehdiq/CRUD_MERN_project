const addById = (data) => (req, res) => {
  const idAnime = parseInt(req.params.id);
  const anime = data.find((elem) => elem.id === idAnime);
  res.status(200).json(anime);
};

module.exports = addById;
