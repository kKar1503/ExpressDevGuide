const express = require("express");

const route1 = express.Router();

route1.get("/", (req, res) => {
	res.json({ message: "This is the home page of route1." });
});

route1.get("/subroute", (req, res) => {
	res.json({ message: "This is the subroute of route1." });
});

module.exports = route1;
