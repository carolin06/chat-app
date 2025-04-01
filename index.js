import {createServer} from "http"
import {Server} from "socket.io"
const httpServer=new createServer()
const io=new Server(httpServer, {
    cors:{
        origin: process.env.NODE_ENV==="producton"? false : ["http://localhost:5500","http://127.0.0.1:5500"] //we dont want anyone from outside to access it
    }
})

io.on('connection', socket=>{
    console.log(`User ${socket.id} connected`)
    socket.on('message', data=>{
        console.log(data)
        
        io.emit('message', `${socket.id.substring(0,5)
        }: ${data}`) //(0,5) indiactes first 5 charcters
    })
})

httpServer.listen(3500, ()=> console.log('listening on port 3500'))