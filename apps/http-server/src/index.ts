import express from "express"
const app = express();

app.get("/",(req,res)=>{
    res.send("Hola Amigo... Kaise ho thik ho...Part2 ?")
})

app.listen(3001);