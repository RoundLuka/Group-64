import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router';

const API_URL = "http://localhost:3000/root/auth"

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider ( {children} ) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if(storedUser) {
            setUser(storedUser)
        }
        navigate('/profile')
    }, [])

    const register = async (user) => {
        try  {
            const data = await fetch(API_URL + "/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
        
            const response = await data.json()

            alert(response.message)
                
            if(!data.ok) {
                return
            }

            navigate('/login')
        } 
        catch(err) {
            console.log(err)
        }
    }

    const login = async (user) => {
        try  {
        const data = await fetch(API_URL + "/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const response = await data.json()

            console.log(response)
                
            if(!data.ok) {
                return
            }
            
            setUser(response)
            localStorage.setItem("user", JSON.stringify(response))
            navigate('/profile')
        } 
        catch (err) {
        console.log(err)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }
    
    return (
        <AuthContext.Provider value={{register, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}