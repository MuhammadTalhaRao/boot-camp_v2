import React from 'react';
import './button.css';

function Button(props){
    return(
        <button className = 'ClassicButton' >{props.Text}</button>
    );
}

export default Button;