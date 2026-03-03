import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function NotFound() {
    const naviagte = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            naviagte("/")
        }, 2000)
    })



    return <h1>Not Found</h1>
}
export default NotFound;