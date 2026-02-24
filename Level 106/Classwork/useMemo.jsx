import React, { useState, useMemo} from 'react';

// useMemo

function slowFunction (num) {
    console.log("Slow function executed")
    for(let i = 0; i < 1000000000; i++) {}
    
    return num * 2;
}

function App () {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);
    const [double, setDouble] = useState(1);

    // cached value
    const getDouble = useMemo(() => slowFunction(number), [number])

    return (
        <>
            <button onClick={() => {setCount((prev) => prev + 1)}}>
                Count + 1
            </button>

            <p>Count value: {count}</p>

            <button onClick={() => setNumber((prev) => prev + 1)}>
                Number + 1
            </button>
            <p>Number value: {number}</p>

            <button onClick={() => setDouble(getDouble)}>
                Double
            </button>

            <p>Current doubled number: {double}</p>
        </>
    )
}

export default App;