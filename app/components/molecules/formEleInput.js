import React from 'react';
import Label from "../atoms/label";
import Input from "../atoms/input";

const input = props =>  {
    return(
        <div className="form-group">
            <Label data={props.data}/>
            <Input data={props.data} onChange={props.onChange} readonlyval={props.readonlyval}/>
        </div>
    );
}

export default input;
