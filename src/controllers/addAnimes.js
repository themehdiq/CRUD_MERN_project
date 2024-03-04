let animesChar = require("..");



const addAnime = (data) => (req, res) => {
  const { name, id } = req.body;
  const newChar = {
    name,
    id,
  };
  animesChar.push(newChar);
  res.send(animesChar);
};

module.exports = addAnime;
