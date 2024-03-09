const express = require("express");
const getData = require("../controllers/getAnimes");
const addAnime = require("../controllers/addAnimes");
const modifyAnime = require("../controllers/modifyAnime");
const deleteAnime = require("../controllers/deleteAnime");
const animesChar = require("..");
const getById = require("../controllers/getById");

const router = express.Router();

router.get("/", getData());

router.get("/:id", getById());

router.post("/", addAnime());

router.put("/:id", modifyAnime());

router.delete("/:id", deleteAnime());

module.exports = router;
