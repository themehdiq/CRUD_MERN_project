const express = require("express");
const getData = require("../controllers/getAnimes");
const addAnime = require("../controllers/addAnimes");
const modifyAnime = require("../controllers/modifyAnime");
const deleteAnime = require("../controllers/deleteAnime");
const animesChar = require("..");
const addById = require("../controllers/addbyId");

const router = express.Router();

router.get("/", getData(animesChar));

router.get("/:id", addById(animesChar));

router.post("/", addAnime(animesChar));

router.put("/:id", modifyAnime(animesChar));

router.delete("/:id", deleteAnime(animesChar));

module.exports = router;
