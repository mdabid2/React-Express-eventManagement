import React from 'react';
const input = props =>  {
    return(
        <div className="form-group">
            <input type={props.data.type} className="form-control" id={props.data.name} placeholder={props.data.text} name={props.data.name} value={props.data.currentVal} onChange={props.onChange} required readOnly={props.readonlyval}/>
        </div>
    );
}

export default input;