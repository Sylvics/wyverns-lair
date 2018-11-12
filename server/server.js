const express = require('express')
const session = require('express-session')
const massive = require('massive')
require('dotenv').config();
const app = express();
app.use(express.json())
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected')
})
app.listen(SERVER_PORT, () =>{
    console.log(`hatching wyverian eggs on port ${SERVER_PORT}`)
})