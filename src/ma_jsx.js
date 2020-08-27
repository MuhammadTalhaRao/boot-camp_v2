import React, { useState } from 'react';
import './ma_css.css';
import './button.css';

function Cool_name(props){
    let [g_bond, setBond] = useState(0);      
    let [theme, changeTheme] = useState(0);

    function click_handler(){
      setBond(777);
      changeTheme(!theme);
    }
    
    return(
        <div className = {` box  ${ theme ? 'dark':'light' } `} >
          <h1>Ma Name is {props.l_name}, {props.f_name + props.l_name}, {g_bond}</h1>
          <button onClick = {click_handler} className = 'ClassicButton' >ma button</button>          
        </div>
    );
}

export default Cool_name;