# COMP 426 Final Project - Team finalproject
Members - 
BACKEND LEADS: \
Aubrie Barnhart \
Emma Drew \
Manuela Danso-Fordjour 

FRONT END LEADS: \
Peter Romero \
Xavier Prat Fernandez 

#### a99 Reaction Game
# How does it work?
Our team created a game that tests users' reaction speed by clicking on a circle when it turns green.
We allow users to log in or sign up to our website before playing the game to store their information (username, password, and score) in a database.
![Photodemonstration](./RGScreenshot.png)
## Front End 
The front includes reactionGame.js, game.html, index.html, and style.css.
Our main page is our index.html page, which features the ability to either login to your account or sign up for a profile if you don't already have one. Additionally, you can go directly to the game page to try it for yourself.
## Back End 
The back end includes forms.js, database.js, user.db, and server.js
Our API creates a database of users (user.db) that is managed by our server.js file. Input into this database is linked via our form.js file.
## Dependencies 
Browersync, Bulma, node-js, MD5, better-sqlite and concurrently


#### Technical Documentation
# HTML & CSS
Our game has two different HTML pages: a homepage (index.html) and a page to play the game (game.html). We used bulma to style our website using different classes that we learned from a02 and Bulma documentation (style.css). Additionally, we created a login and sign up form to input people's usernames and passwords for storage in our database.
# Javascript
We used a Javascript file to develop the functionality of our reaction game, as well as three other Javascript files to manage our API database (including server.js, database.js, and form.js).
# API
Our API is managed by three of our Javascript files (database.js, form.js, and server.js). Additionally, we have a database file called user.db that is created upon running the code on a local host).
# DEMO
Check out a quick walkthrough of our game! => https://www.youtube.com/watch?v=rwE6hR7VwcM



# How to Use this Site
1. Clone the A99-FINALPROJECT repository and store it in a directory to begin.
2. In visual studio code, you may view many of the files that we have created.
3. In terminal, run the following command: npm install browser-sync better-sqlite3 concurrently md5 node-js
4. Now you should have the required dependencies in your own repository if you didn't already have them installed. Now, run the following command: npm run start
5. Visit this link to view our page: http://localhost:8080/
6. You are now looking at the main page of our website! Your next steps are now up to you:
    a. You may wish to login to an existing account via the Login feature.
    b. ...Or you can create a new account if you don't already have one from the main page.
    c. You can go directly to the game page and play the game yourself!


