import express from "express";

const app = express();

app.get("/", (reques,response)=>{
  return response.json({
    message:"Hello Websocket"
  })
})


app.listen(3000, ()=> console.log('Server is running on port 3000'))