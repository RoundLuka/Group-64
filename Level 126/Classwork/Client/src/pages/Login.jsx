import { useAuth } from "../context/AuthContext";


const Login = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        login(account)
        e.target.reset()
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login;