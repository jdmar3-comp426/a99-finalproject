# COMP 426 Final Project - Team finalproject
#### Reaction Time Game
Members: Aubrie Barnhart, Emma Drew, Manunela Danso-Fordjour, Peter Romero, Xavier Prat Fernandez
See /docs/teamRoles.txt for more information

# How does it work?
Our team created a game that tests users' reaction speed by clicking on a circle when it turns green.
We require users to log in or sign up to our website before playing the game to store their information (username, password, and score) in a database and post their scores to a leaderboard. 

## Front End 
The front includes reactionGame.js, game.html, index.html, leaderboards.html, and style.css
Our main page is our index.html page, which features the ability to either login to your account or sign up for a profile if you don't already have one. Additionally, you can either visit the leaderboard to view other players' top scores or go to the game page to try it for yourself.
## Back End 
The back end includes forms.js, database.js, user.db, and server.js
Our API creates a database of users (user.db) that is managed by our server.js file. Input into this database is linked via our form.js file.
## Dependencies 
Browersync, Bulma
## Technical Documentation
See /docs/techDoc.txt for more information on HTML, JS and API technicals
##### How to Use this Site
1. Clone the A99-FINALPROJECT repository to begin.
2. In visual studio code, you may view many of the files that we have created.
3. In terminal, run the following command: npm install browser-sync
4. Now you should have browser-sync as a dependency in your own repository if you didn't already have it installed. Now, run the following command: npx browser-sync start-sw
5. This should have pulled up our website in a local host, but if it didn't, you may visit this link to view our page: http://localhost:3000/
6. You are now looking at the main page of our website! Your next steps are now up to you:
    a. You may wish to login to an existing account via the Login feature.
    b. ...Or you can create a new account if you don't already have one from the main page.
    c. You can view the leaderboard to see who has achieved the fastest reaction times in the past.
    d. You can play the game yourself!

