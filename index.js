const express = require('express') 
const app = express() 
const http = require('http') 
const server = http.createServer(app) 
const { Server } = require('socket.io') 
const io = new Server(server) 
const PORT = 8000 
server.listen(PORT, () => { 
    console.log(`server is running on http://localhost:${PORT}`);
})
app.get('/', (req,res) => { 
    res.sendFile(__dirname+"/index.html")
})

io.on('connection', (socket) => { 
    socket.join("room1") 
    ///==>Let's find out the connected members of room<===///
    const members = io.sockets.adapter.rooms.get('room1').size;

    io.sockets.in('room1').emit('room1Chat', `we are chatting in room1 and total members = ${members}`) 
    
    
})