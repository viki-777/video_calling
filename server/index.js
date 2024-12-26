const { Server } = require('socket.io');
const cors = require('cors');

const io = new Server(50000,{cors:true,});
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("message", (msg) => {
        console.log(msg);
        io.emit("message", msg);
    });
});

