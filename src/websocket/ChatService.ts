import { io } from "../http"

io.on("connect", socket =>{
  socket.emit("chat_iniciado", {
    message:"seu chat foi iniciado"
  })
})