import React from 'react';



function Cool_name(props){

    return(
        <h1>Ma Name is {props.l_name}, {props.f_name + props.l_name}</h1>
    );
}

export default Cool_name;