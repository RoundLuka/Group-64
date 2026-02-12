import React, {useContext} from 'react';
import './Components.css';
import { nameContext } from './Component1';

export default function Component4 () {
    const terter = useContext(nameContext);
    

    return (
        <div className='item'>
            <h2>Component 4</h2>
            <h2>Welcome {terter}</h2>
        </div>
    )
}