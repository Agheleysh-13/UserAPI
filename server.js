const express = require('express')
const app = express();

app.get("/User",(req,res)=>{
    res.send("API working")
})

const port=process.env.PORT ||3000
app.listen(port,console.log(`Server started and listenting to ${port}`))