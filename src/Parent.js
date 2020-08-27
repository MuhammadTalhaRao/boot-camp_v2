import React, { useState, useContext } from 'react';
import Child1 from './child1';
import Counter_Hook from './contextHook';

function Parent(){
    let p_counter = useState(0);

    return(
        <Counter_Hook.Provider value = {p_counter} >
        <div>
            <h1>This is Parent</h1>
            <Child1 />
        </div>
        </Counter_Hook.Provider>
    );
}

export default Parent;