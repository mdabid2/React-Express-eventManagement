import React from 'react';

const submit = props =>  {
    return(
        <button type={props.data.type} className="btn btn-primary">{props.data.text}</button>
    );
}

export default submit;