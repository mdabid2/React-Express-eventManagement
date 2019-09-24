import React from 'react';
const textArea = props =>  {
    return(
        <div className="form-group">
            <textarea className="form-control" rows="3" id={props.data.name} placeholder={props.data.text} name={props.data.name} value={props.data.currentVal} onChange={props.onChange} required />
        </div>
       
    );
}

export default textArea;