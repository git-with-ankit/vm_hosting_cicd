import express from "express"
const app = express();

app.get("/",(req,res)=>{
    res.send("Hola Amigo... Kaise ho thik ho ?")
})

app.listen(3000);