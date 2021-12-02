// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db = require("./database.js")
// Require md5 MODULE
var md5 = require("md5")
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE a new user (HTTP method POST)
app.post("/app/new",  (req, res) => {
	const stmt = db.prepare("INSERT INTO userinfo (user, pass) VALUES (?, ?)");
	const info = stmt.run(req.body.user, md5(req.body.pass));
	res.status(201).json({"message": info.changes+ " record created: ID " +info.lastInsertRowid + " (201)"});
});
// READ a list of all users (HTTP method GET)
app.get("/app/users", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo").all();
	res.status(200).json(stmt);
});

// READ a single user (HTTP method GET) 
app.get("/app/user/:id", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo WHERE id = ?").get(req.params.id);
	res.json(stmt);
	res.status(200);
});
// UPDATE a single user (HTTP method PATCH)
app.patch("/app/update/user/:id", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET user = COALESCE(?,user), pass = COALESCE(?,pass) WHERE id = ?"
	);
	const info = stmt.run(req.body.user, md5(req.body.pass), req.params.id);
	res.status(200).json({"message": info.changes+ " record updated: ID " +req.params.id + " (200)"});
});
// DELETE a single user (HTTP method DELETE)
app.delete("/app/delete/user/:id", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE id = ?");
	const info = stmt.run(req.params.id);
	res.status(200).json({"message": info.changes+ " record deleted: ID " +req.params.id + " (200)"});
});