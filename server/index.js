const dotenv = require("dotenv").config()
const express = require("express")
const cont = require("./controller")
const massive = require("massive")
const app = express()

app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING)
    .then(db=>{
        app.set('db', db)
        console.log('Database is working')
    })
    .catch(err=>console.error(err))

app.get('/api/house', cont.getHouse)
app.post('/api/house', cont.postHouse)
app.delete('/api/house/:id', cont.deleteHouse)
app.put('/api/house/:id', cont.updateHouse)

app.listen(SERVER_PORT, ()=>console.log(`Server is listening on ${SERVER_PORT}`))