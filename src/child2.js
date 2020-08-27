import React, { useReducer, useContext } from 'react';
import Child1 from './child1';
import CounterReducer from './counterReducer';
import Counter_Hook from './contextHook';

function Child2(){        
    let [state, dispatcher] = useReducer(CounterReducer, 0);

    return(
        <div>
            <h1>Using Reducer</h1>
            <h3>Child2 Counter: {state} </h3>
            <button className = 'ClassicButton' onClick = {()=>dispatcher('INCREMENT')} >++</button>
            <button className = 'ClassicButton' onClick = {()=>dispatcher('DECREMENT') } >--</button>
        </div>
    );
}

export default Child2;