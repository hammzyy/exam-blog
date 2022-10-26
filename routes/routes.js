const router = require("express").Router()
const Blog = require("../models/blog")

router.get("/", (req, res)=>{
    Blog.find()
        .then(result=>{
            console.log(result)
            res.render("blogs/index",{
                title: "Home",
                blogs: result
            })
        })
    
})

router.get("/create-blog", (req, res)=>{
    res.render("blogs/create-blog", {
        title: "Create Blog"
    })
})

router.post("/create-blog", (req, res)=>{
    const blog = Blog(req.body)
    blog.save()
        .then(()=>{
            res.redirect("/blogs")
        })
})

module.exports = router