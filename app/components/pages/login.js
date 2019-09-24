import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormElementInput from  "../molecules/formEleInput";
import Submit from  "../atoms/submit";
import auth from'../../utils/auth';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            userError:''
        }
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ userError:'' });
        const {email, password } = this.state;

        axios.post('/api/login', {email, password })
        .then((result) => {

            if(result.data.success){
                auth.setSession('isAuthenticated',true);  
                this.props.history.push("/eventsdashboard");
                
            } else {
                this.setState({ userError:result.data.message });
            }
        })
        .catch(error => {
            console.log(error.response)
        });  
    };
    render(){
        const {email, password } = this.state;
        
    return(
        <div className="row">

            <div className="loginFrom col-md-4">
            <h3>Login to your account</h3>
            <p className="text-danger">{this.state.userError}</p>
            <form onSubmit={this.onSubmit}>
                <FormElementInput data={{type:'email', name:'email',text:'Email',currentVal:email}} onChange={this.onChange} />
                <FormElementInput data={{type:'password', name:'password',text:'Password',currentVal:password}} onChange={this.onChange} />
                <div className="form-group">
                    <Submit data={{type:'submit',text:'Submit'}}/>
                </div>
                <hr />
                {auth.getSession('isAuthenticated')
                ?<div className="form-group">
                    <h6>You are already logged in</h6>
                    <Link to="/eventsdashboard" className="btn btn-primary">View Event Dashboard</Link>
                </div>
                :<div className="form-group">
                    <h6>Not Registered yet, Register Now</h6>
                    <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
                }  
                
            </form>
            </div>
        </div>   
    )};
}
