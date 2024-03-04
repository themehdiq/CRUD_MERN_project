const animesChar = require("..");



const getData = (data) => (req, res) => {
  res.send(animesChar);
};

module.exports = getData