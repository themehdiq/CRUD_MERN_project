

const modifyAnime = (data) => (req, res) => {
  const idAnime = parseInt(req.params.id);
  console.log(idAnime);
  const indexAnime = data.findIndex((elem) => elem.id === idAnime);
  console.log(indexAnime);
  if (indexAnime != -1) {
    if (req.query.name) {
      data[indexAnime].name = req.query.name;
    }
  }
  res.status(201).json(data);
};

module.exports = modifyAnime;
