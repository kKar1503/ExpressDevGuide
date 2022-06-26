const express = require("express");

const route3 = express.Router();

route3.get("/", (req, res) => {
	res.json({ message: "This is the home page of route3." });
});

route3.get("/subroute", (req, res) => {
	res.json({ message: "This is the subroute of route3." });
});

module.exports = route3;
