require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const cors = require("cors");
const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const {Server} = require('socket.io')

app.use(cors())
app.use(express.json())
app.use('/', router)


const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })

}))

const start = () => {
    try {
        server.listen(PORT, () => {
            console.log('Server started on', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}
start()

module.exports = io

