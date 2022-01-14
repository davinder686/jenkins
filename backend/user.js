const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router()

router.get("/", (request,response)=>
{
    const connection=db.openconnection()
    const statement=`select id ,name ,email, age from user`

    connection.query(statement,(error,result)=>
    {
        connection.end()
        response.send(utils.createResult(error,result))
    })
})


router.delete("/", (request,response)=>
{
    const id=request.body.id
    const connection=db.openconnection()
    const statement=`delete from user where id = '${id}'`

    connection.query(statement,(error,result)=>
    {
        connection.end()
        response.send(utils.createResult(error,result))
    })
})

router.post("/", (request,response)=>
{
   
    const {id,name,email,age}=request.body
    const connection=db.openconnection()
   
    const statement=`insert into user values ('${id}' ,'${name}' ,'${email}','${age}')`

    connection.query(statement,(error,result)=>
    {
        console.log(result)
        response.send(utils.createResult(error,result))
    })
})

router.put("/", (request,response)=>
{
    const {id,name,email,age}=request.body
    const connection=db.openconnection()
    const statement=`update user set name='${name}' ,email='${email}', age='${age}' where id=${id}`

    connection.query(statement,(error,result)=>
    {
       
        response.send(utils.createResult(error,result))
    })
})
module.exports=router
