const router = require("express").Router()
const Blog = require("../models/blog")

router.get("/createblog", (req, res)=>{
    res.render("blogs/createblog", {
        title: "Create Blog"
    })
})

router.post("/createblog", (req, res)=>{
    const blog = Blog(req.body)
    blog.save()
        .then(()=>{
            res.redirect("/blogs")
        })
})

module.exports = router