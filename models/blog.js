const mongoose = require("mongoose")

const Schema = mongoose.Schema


const blogSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: false
    },
    summary:{
        type: String,
        required: true
    },
})

const Blog = mongoose.model("articles", blogSchema)

module.exports = Blog