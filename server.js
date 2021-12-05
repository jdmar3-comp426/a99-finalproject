// Define app using express
var express = require("express")
var app = express()
//var flash = require('connect-flash')
// Require database SCRIPT file
var db = require("./database.js")
// Require md5 MODULE
var md5 = require("md5")
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


app.listen(8080, () => {
	console.log("listening on port 8080")
})


app.get('/game', (req, res) => {
	res.sendFile(__dirname + "/public/game.html")
})


app.get('/leaderboard', (req, res) => {
	res.sendFile(__dirname + "/public/leaderboards.html")
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/index.html")
})


app.post('/register/', (req, res) => {
	let user = req.body.Username ? req.body.Username : ''
	let pass = req.body.Password1
	
	const stmt = db.prepare("INSERT INTO userinfo (user, pass, score) VALUES (?, ?, ?)");
	const info = stmt.run(user, md5(pass), 0)

	res.redirect('/game')
})


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

// LOGIN a user with a given username and password (at endpoint /app/login/:username/:password)
app.post("/login", (req,res) => {
	let user = req.body.Username
	let pass = req.body.Password

	const stmt = db.prepare("SELECT * FROM userinfo WHERE user= ? AND pass = ?");
	const info = stmt.get(user, md5(pass));

	res.redirect('/game')
    // if (info >= 0) {
    //     res.redirect('/game')  
    // } else {
    //     res.status(200).json({
    //         "result": "failure",
    //         "message": "This username password combination doesn't exist"
    //     });  
    // }
})

// Default response for any other request
// app.use(function(req, res){
// 	res.json({"message":"Endpoint not found. (404)"});
//     res.status(404);
// });

// Tell STDOUT that the server is stopped
process.on('SIGTERM', () => {
	app.close(() => {
		console.log('Server stopped.')
	})
})