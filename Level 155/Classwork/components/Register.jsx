import { useEffect, useState } from 'react';

import { auth, googleProvider } from "../config/auth";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        console.log(auth?.currentUser?.email)
    })

    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    const signWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h2>Register</h2>

            <input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type='password'  placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={signup} >Sign Up</button>
            <button onClick={signWithGoogle}>Continue with Google Account</button>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Register;