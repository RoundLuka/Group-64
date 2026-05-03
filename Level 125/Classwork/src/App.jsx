import React, { useState } from 'react';

const API_URL = "http://localhost:3000"

export default function App () {
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  
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
      setRequestSent(true)
      setSuccess(response.success)
      setMessage(response.message)
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const account = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    register(account)
  }
  
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />

          <button>Submit</button>
      </form>
      {requestSent ? (
        <div>
          <p style={ {color: `${success ? "green" : "red"}`}}>{message}</p>
        </div>
      ) : ""}
    </>
  )
}