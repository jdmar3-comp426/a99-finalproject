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
	const stmt = db.prepare("INSERT INTO userinfo (user, pass, score) VALUES (?, ?, ?)");
	const info = stmt.run(req.body.user, md5(req.body.pass), 0);
	res.status(201).json({"message": info.changes+ " record created: Username " + req.body.user + " (201)"});
});
// READ a list of all users (HTTP method GET)
app.get("/app/users", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo").all();
	res.status(200).json(stmt);
});

// READ a single user (HTTP method GET) 
app.get("/app/user/:user", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo WHERE user = ?").get(req.params.user);
	res.json(stmt);
	res.status(200);
});
// UPDATE a single user (HTTP method PATCH)
app.patch("/app/update/user/:user", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET user = COALESCE(?,user), pass = COALESCE(?,pass), score = COALESCE(?,score) WHERE user = ?"
	);
	const info = stmt.run(req.body.user, md5(req.body.pass), req.body.score, req.params.user);
	res.status(200).json({"message": info.changes+ " record updated: Username " +req.params.user + " (200)"});
});
// DELETE a single user (HTTP method DELETE)
app.delete("/app/delete/user/:user", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE user = ?");
	const info = stmt.run(req.params.user);
	res.status(200).json({"message": info.changes+ " record deleted: Username " +req.params.user + " (200)"});
});

// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});

// Tell STDOUT that the server is stopped
process.on('SIGTERM', () => {
	server.close(() => {
		console.log('Server stopped.')
	})
})