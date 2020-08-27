import React, { useState, useContext } from 'react';
import Child1 from './child1';
import Counter_Hook from './contextHook';
import Child2 from './Child2';

function Parent(){
    let p_counter1 = useState(0);
    
    return(
        <Counter_Hook.Provider value = {p_counter1} >
        <div>
            <h1>This is Parent</h1>
            <Child1 />
            <Child2 />
        </div>
        </Counter_Hook.Provider>
    );
}

export default Parent;