import { useEffect } from 'react';

export default function useLogUpdate(initalState) {
    const [value, setValue] = useState(initalState);

    useEffect(() => {
        console.log(value)
    }, [value])

    return [value, setValue]
}