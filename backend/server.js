const express = require('express');
const userRouter = require('./user')
const cors = require('cors');
const app=express()

app.use(express.json())
app.use(cors("*"))
app.use("/user",userRouter)

app.use("/",(request,response)=>
{
    response.send(`hello from server you are in....`)
})

app.listen(4000,"0.0.0.0",()=>
{
    console.log(`server started on port 4000`)
})
