const deleteAnime = (data) => (req, res) => {
  const idAnime = parseInt(req.params.id);
  //   console.log(idAnime);
  const indexAnime = data.findIndex((elem) => elem.id === idAnime);
  //   console.log(indexAnime);
  if (indexAnime != -1) {
    data.splice(indexAnime, 1);
    for (i = indexAnime; i < data.length; i++) {
      data[indexAnime].id = data[indexAnime].id - 1;
    }
  }
  res.status(200).json(data);
};

module.exports = deleteAnime;
