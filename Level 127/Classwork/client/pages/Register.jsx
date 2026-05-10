import { useAuth } from "../context/AuthContext";


const Register = () => {
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        register(account)
        e.target.reset()
    }

    return (
        <>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />

                <button>Submit</button>
            </form>
        </>
    )
}

export default Register;