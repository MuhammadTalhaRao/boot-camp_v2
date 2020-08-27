import React, { useContext } from 'react';
import MaCounter from './CounterHook';

function Child2(){
    let couunterValue = useContext(MaCounter);
    return(
        <div>
            <h1>Child2 Counter: {couunterValue[0]}</h1>
            <button className = 'ClassicButton' onClick = {
                ()=> couunterValue[1](couunterValue[0]++)
            } >C2++</button>
        </div>
    );
}

export default Child2;