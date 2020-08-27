import React from 'react';
import Counter_Hook from './contextHook';

const CounterReducer = (state, action)=>{
    switch (action){
        case 'INCREMENT':
            return state+1;
    }
}

export default CounterReducer;