postRouter.param("postId", (req, res, next, postId) => {
    const posts = readFile(FILE_URL);
    const myPost = posts.find(post => post.id === parseInt(postId))

    if(!myPost) {
        return res.status(404).json({message: "Post not found"})
    }

    req.myPost = myPost
    req.posts = posts

    next()
})

// postRouter.get("/:postId", (req, res) => {
//     res.status(200).json(req.myPost)
// })