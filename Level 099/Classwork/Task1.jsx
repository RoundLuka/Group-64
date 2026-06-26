function App() { 
    const [notEnoughChars, setNotEnoughChars] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        if(password.length < 8) {
        setNotEnoughChars(true)
        } else {
        setNotEnoughChars(false)
        }

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" required/>
            <input type="password" placeholder="Password" name="password" required/>
            {notEnoughChars && <p>Password must contain 8 characters</p>}
            <br />
            <input type="submit"/>
        </form>
        </>

    )
}

export default App;