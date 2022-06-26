const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("This is the home page.");
});

app.get("/user", (req, res) => {
	const { name } = req.query;
	console.log(name);
	res.status(200).json({ name: name, age: 20 });
});

app.get("/user/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);
	res.sendStatus(200);
});

app.post("/user", (req, res) => {
	const { name, age } = req.body;
	console.log(`User's name is ${name} and is ${age} years old.`);
	res.json({ status: "Received." });
});

app.get("*", (req, res) => {
	res.status(404).send("Resources not found");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
