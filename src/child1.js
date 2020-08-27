import React, { useContext } from 'react';
import Counter_Hook from './contextHook';
import './button.css';

function Child1(){
    let using_c_h = useContext(Counter_Hook);

    return(
        <div>
            <h1>This is Child1 { using_c_h[0] }</h1>
            <button 
                onClick = { () => using_c_h[1]( ++using_c_h[0] ) }
                className = 'ClassicButton'  >
                    Increment</button>
            <button 
                onClick = { () => using_c_h[1]( --using_c_h[0] ) }
                className = 'ClassicButton'  >
                    Decrement</button>
        </div>        
    );
}

export default Child1;