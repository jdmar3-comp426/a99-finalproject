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

// Set server port
var HTTP_PORT = 5000
// Start server
app.listen(HTTP_PORT, () => {
	console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
	res.json({ "message": "Your API works! (200)" });
	res.status(200);
});
	

// Define other CRUD API endpoints using express.js and better-sqlite3
// CREATE a new user (HTTP method POST) at endpoint /app/new/
app.post("/app/new/", (req, res, next) => {
	const user = {user: req.body.user, pass: req.body.pass ? md5(req.body.pass): null}
	const stmt = db.prepare('INSERT INTO userinfo (user,pass) VALUES(?, ?)')
	const output = stmt.run(user.user, user.pass)
	res.status(201).json({"message": output.changes + " record created: ID " + output.lastInsertRowid + " (201)"})
}
);

// READ a list of all users (HTTP method GET) at endpoint /app/users/
app.get("/app/users", (req, res) => {
	const stmt = db.prepare('SELECT * FROM userinfo').all();
	res.status(200).json(stmt);
});
