const express = require("express");

const route2 = express.Router();

route2.get("/", (req, res) => {
	res.json({ message: "This is the home page of route2." });
});

route2.get("/subroute", (req, res) => {
	res.json({ message: "This is the subroute of route2." });
});

module.exports = route2;
