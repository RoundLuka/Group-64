const { readFile, writeFile } = require("../util/file");


const path = require('path');

const FILE_URL = path.join(__dirname, "../Database/posts.json")

const createPost = (req, res) => {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
        return res.status(400).json({message: "Title, content and post author id are all required"})
    }


    const newPost = {
        title,
        content,
        userId,
        id: Date.now()
    };

    writeFile(newPost, FILE_URL)
    
    res.status(201).json({message: "Post created succesfuly"})
}

// my posts
const getPosts = (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({message: "User id is required"})
    }

    const posts = readFile(FILE_URL);
    const myPosts = posts.filter(post => post.userId === parseInt(userId))

    res.status(200).json(myPosts)
}

const getAllPosts = (req, res) => {
    const posts = readFile(FILE_URL);
    
    res.status(200).json(posts)
}

const deletePost = (req, res) => {
    

    const { post, user } = req.body;

    if(!post || !user) {
        return res.status(400).json({message: "Post and user info are required"})
    }

    if(post.userId !== user.id) {
        return res.status(401).json({message: "You  are not authorized to delete this post"})
    }

    const posts = readFile(FILE_URL);
    const postToDelete = posts.find(p => p.id === post.id)

    if(!postToDelete) {
        return res.status(404).json({message: "Post not found"})
    }
    
    const filteredPosts = posts.filter(p => p.id !== post.id)


}

const testRoute = (req, res) => {
    console.log(req.body)
}

module.exports = {
    createPost,
    getPosts,
    getAllPosts,
    deletePost,
    testRoute
}

