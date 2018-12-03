const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authController = require('./authController')
const socket = require('socket.io')
const creationController = require('./creationController');
require('dotenv').config();
const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    
}))
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected')
})
//Login Endpoints
 app.post('/auth/login', authController.loginPlayer)
 app.post('/auth/register',authController.newPlayer)
 app.get('/auth/logout', authController.logout)
 app.get('/auth/check', authController.checkLogin)
 //Other Endpoints
 app.get('/api/races', creationController.getRaces)
 app.get('/api/races/:name', creationController.getRace)
 app.get('/api/classes', creationController.getClasses)
 app.get('/api/skills', creationController.getSkills)
//Server Generic
app.listen(SERVER_PORT, () =>{
    console.log(`hatching wyverian eggs on port ${SERVER_PORT}`)
})
