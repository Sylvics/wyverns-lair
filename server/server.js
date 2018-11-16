const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authController = require('./authController')
const socket = require('socket.io')
require('dotenv').config();
const app = express();
app.use(express.json())

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
app.use(session({
    secret: SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    
}))
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected')
})
app.post('/auth/login', authController.loginPlayer)
app.post('/auth/register',authController.newPlayer)
app.get('/auth/logout', authController.logout)
//Server Generic
app.listen(SERVER_PORT, () =>{
    console.log(`hatching wyverian eggs on port ${SERVER_PORT}`)
})
