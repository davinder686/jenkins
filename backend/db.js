const mysql = require('mysql2');

const openconnection=()=>
{
    const connection = mysql.createConnection(
        {
            uri : "mysql://db:3306",
            user : "root",
            password : "root",
            database : "mydb"
        }
    
    )
    connection.connect()
    return connection
}

module.exports={
    openconnection,
}


