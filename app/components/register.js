import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormElementInput from  "../molecules/formEleInput";
import Submit from  "../atoms/submit";
import axios from 'axios';

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          username: '',
          email: '',
          password:'',
          superadmin:'',
          userError:''
        };
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ userError:'' });
        const { name, username, email, password, superadmin } = this.state;
        axios.post('/api/register', { name, username, email, password, superadmin })
        .then((result) => {
            if(result.data.success){
                this.props.history.push("/");
            } else {
                this.setState({ userError:result.data.message });
            }
        })
        .catch(error => {
            console.log(error.response)
        });
       
    };
    render() {
        const { name, username, email, password,superadmin } = this.state;
    return(
        <div className="row">

            <div className="registerFrom col-md-4">
            <h3>Register your account</h3>
            <p className="text-danger">{this.state.userError}</p>
            <form onSubmit={this.onSubmit}>
               
                <FormElementInput data={{type:'text', name:'name',text:'Name',currentVal:name}} onChange={this.onChange} />
                <FormElementInput data={{type:'text', name:'username',text:'User Name',currentVal:username}} onChange={this.onChange} />
                <FormElementInput data={{type:'email', name:'email',text:'Email',currentVal:email}} onChange={this.onChange} />
                <FormElementInput data={{type:'password', name:'password',text:'Password',currentVal:password}} onChange={this.onChange} />
                <FormElementInput data={{type:'password', name:'superadmin',text:'Super Admin Key',currentVal:superadmin}} onChange={this.onChange} />

                <div className="form-group">
                    <Submit data={{type:'submit',text:'Submit'}}/>
                    <Link to="/" className="btn btn-primary">Cancel</Link>
                </div>
                
            </form>
            </div>
        </div>
    )};
}

export default Register;