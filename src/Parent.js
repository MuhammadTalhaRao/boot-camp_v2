import React, { Component, useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';
import MaCounter from './CounterHook';

function Parent(){
    let countState = useState(0);
    
    return(
        <div>
            <MaCounter.Provider value = {countState} >
                <h1>This is Parent</h1>        
                <Child1 />
                <Child2 />
            </MaCounter.Provider>
        </div>
    );
}

export default Parent;