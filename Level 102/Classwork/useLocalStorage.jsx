import { useState, useEffect } from 'react';

function savedValue(key, initalState) {

    const savedInfo = JSON.parse(localStorage.getItem(key))

    if (savedInfo) {
        return savedInfo
    }

    return initalState;
}
function useLocalStorage(key, initalState) {
    const [value, setValue] = useState(() => {
        return savedValue(key, initalState)
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage;