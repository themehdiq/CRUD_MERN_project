

const addAnime = (data) => (req, res) => {
  const { name, id } = req.body;
  const newChar = {
    name,
    id,
  };
  data.push(newChar);
  res.status(201).json(data);
};

module.exports = addAnime;
