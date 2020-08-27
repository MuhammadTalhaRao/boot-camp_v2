import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick = {()=>alert(this.state.count+=1)} >Counter ++</button>
                <button onClick = {()=>alert(this.state.count-=1)} >Counter --</button>
            </div>
        );
    }
}

export default Counter;