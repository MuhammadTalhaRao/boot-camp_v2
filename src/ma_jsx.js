import React, { useState } from 'react';

function Cool_name(props){
    let [g_bond, setBond] = useState(0);        

    return(
        <div>
          <h1>Ma Name is {props.l_name}, {props.f_name + props.l_name}, {g_bond}</h1>
          <button onClick = {()=>setBond(777)} >ma button</button>          
        </div>
    );
}

export default Cool_name;