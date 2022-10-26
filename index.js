const express = require("express")
const app = express ()
const mongoose = require ("mongoose")
require("dotenv").config()
const port = process.env.PORT
const db = process.env.MONGODB_URL

app.set("view engine", "ejs")

mongoose.connect(db)
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`App started on port ${port}` )
        })  
    })
