function Presentational({handleSubmit, sum}) {
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

export default Presentational;