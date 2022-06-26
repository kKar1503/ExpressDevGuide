const express = require("express");

const route1 = require("./route1");
const route2 = require("./route2");
const route3 = require("./route3");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("This is the home page.");
});

router.use("/route1", route1);

router.use("/route2", route2);

router.use("/route3", route3);

router.get("*", (req, res) => {
	res.status(404).send("Resources not found");
});

module.exports = router;

app.use((req, res, next) => {
	console.log("Time:", Date.now());
	next();
});

router.use((req, res, next) => {
	console.log("Time:", Date.now());
	next();
});
