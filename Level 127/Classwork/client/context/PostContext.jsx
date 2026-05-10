import React, { useState, createContext, useContext } from 'react';
import { useAuth } from './AuthContext';
// constants


const API_URL = "http://localhost:3000/root/post"


export const PostContext = createContext();

export const usePost = () => useContext(PostContext)

export default function PostProvider ( {children} ) {
    const [posts, setPosts] = useState([]);

    const { user } = useAuth();

    // if(!user) {
    //     return
    // }
    
    async function createPost (post) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...post, userId: user.id})
            })

            setPosts([...posts, post])

        } catch (error) {
            console.log(error)
        }
    }

    async function getPosts () {
        try {
            const response = await fetch(`${API_URL}/users/${user.id}`)

            const data = await response.json()
            if(!response.ok) {
                alert(data.mesage)
            }

            console.log(data)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getAllPosts () {
        try {
            const response = await fetch(API_URL)

            const data = await response.json()
            if(!response.ok) {
                alert(data.mesage)
            }

            console.log(data)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostContext.Provider value={{createPost, getPosts, getAllPosts, posts}} >
            {children}
        </PostContext.Provider>
    )
}