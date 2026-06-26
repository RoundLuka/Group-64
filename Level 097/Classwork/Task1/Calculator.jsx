function Calculator() {
    const [sum, setSum] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const number1 = e.target.elements.num1.value;
        const number2 = e.target.elements.num2.value;

        setSum(parseFloat(number1) + parseFloat(number2))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="num1" required />
                <input type="text" name="num2" required />
                <button>Sum</button>
                <p>Sum: {sum}</p>
            </form>
        </>
    )
}

export default Calculator;