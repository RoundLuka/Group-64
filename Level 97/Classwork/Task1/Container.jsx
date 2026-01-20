function Container() {
    const [sum, setSum] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const number1 = e.target.elements.num1.value;
        const number2 = e.target.elements.num2.value;

        setSum(parseFloat(number1) + parseFloat(number2))
    }

    return (
        <Presentational handleSubmit={handleSubmit} sum={sum} />
    )
}

export default Container;