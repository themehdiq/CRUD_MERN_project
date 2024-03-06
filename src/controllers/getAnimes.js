
const getData = (data) => (req, res) => {
  res.status(200).json(data);
};

module.exports = getData;
