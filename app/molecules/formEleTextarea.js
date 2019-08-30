import React from 'react';
import Label from "../atoms/label";
import Textarea from "../atoms/textarea";

const textArea = props =>  {
    return(
        <div className="form-group">
            <Label data={props.data}/>
            <Textarea data={props.data} onChange={props.onChange} />
        </div>
       
    );
}

export default textArea;