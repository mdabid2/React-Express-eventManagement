import React from 'react';

const label = props =>  {
    return(
        <label htmlFor={props.data.name}>{props.data.text}</label>
    );
}

export default label;