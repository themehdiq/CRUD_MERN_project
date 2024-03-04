const express = require("express");
const getData = require("../controllers/getAnimes");
const addAnime = require("../controllers/addAnimes");
const animesChar = require("..");
const router = express.Router();


router.get("/", getData(animesChar))

router.post("/", addAnime(animesChar));

module.exports = router;
