import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router';

const API_URL = "http://localhost:3000/root/auth"

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider ( {children} ) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

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
            navigate('/profile')
        } 
        catch (err) {
        console.log(err)
        }
    }

    const logout = () => {
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{register, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}