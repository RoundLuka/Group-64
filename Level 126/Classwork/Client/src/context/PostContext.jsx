import React, { useState, createContext, useContext } from 'react';

// constants
const API_URL = "http://localhost:3000/root/auth"


export const PostContext = createContext();

export const useAuth = () => useContext(PostContext)

export default function PostProvider ( {children} ) {
    const [user, setUser] = useState(null);

    return (
        <PostContext.Provider value={{nothing: ""}} >
            {children}
        </PostContext.Provider>
    )
}