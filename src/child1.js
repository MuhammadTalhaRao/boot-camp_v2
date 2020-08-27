import React, { useContext } from 'react';
import MaCounter from './CounterHook';
import './button.css';

function Child1(){
    let counterValue = useContext(MaCounter);

    return(
        <div>
            <h1>Child1 Counter: {counterValue[0]}</h1>
            <button className = 'ClassicButton' onClick = { 
                ()=> counterValue[1](++counterValue[0]) 
                } >C1++</button>
        </div>
    );
}

export default Child1;