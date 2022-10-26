const express = require("express")
const app = express ()
const mongoose = require ("mongoose")
require("dotenv").config()
const port = process.env.PORT
app.set("view engine", "ejs")

