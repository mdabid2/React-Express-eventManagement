import React, { Component } from 'react';
import ThankYouPage from './thank-you-page';
import FormElementInput from  "../molecules/formEleInput";
import Submit from  "../atoms/submit";
import axios from 'axios';

export default class RegisterInEvents extends Component {
  
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            number:'',
            eventid:'',
            eventname:'',
            venue:'',
            eventdetails:'',
            availableseat:'',
            eventdate:'',
            userError:'',
            thankyouPage:false
        }
    }
    componentDidMount() {
        const eventId=(this.props.history.location.pathname).split('/');
        axios.get(`/api/userregistration/getevents${eventId[2]}`)
        .then(myEvents => { 
            this.setState(
                {...myEvents.data}
            );
            this.setState(
                {eventid:eventId[2]}
            );
        });
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ userError:'' });
        const {name,email, number, eventid,availableseat } = this.state;
        if(availableseat){
        axios.post('/api/userregistration/users', {name, email, number, eventid })
            .then((result) => {
                if(!result.data.success){
                    this.setState({
                        userError:result.data.message
                    });
                } else {
                    this.setState({
                        thankyouPage:true,
                        availableseat:(availableseat-1)
                     });
                     const eventId=(this.props.history.location.pathname).split('/');
                     const availableseatres=this.state.availableseat;
                     axios.put(`/api/udateavailableseat/${eventId[2]}`, {availableseatres})
                         .then((result) => {
                             if(!result.data.success){  
                                 this.setState({ userError:result.data.message });
                             }
                         })
                         .catch(error => {
                             console.log(error.response)
                         });    
                }      
            })
            .catch(error => {
                console.log(error.response)
            });
        } else {
            this.setState({
                userError:"Sorry! Seat Has Been Full"
            });
        }
    };
    render(){
        const {name, email, number, thankyouPage } = this.state;
        const { eventname, venue, eventdetails, eventdate, availableseat} = this.state;

       
    return(
        <div className="userRegistration">
            <div className="row">
                <div className="gaps center margin-auto col-md-8">
                    <h2>Event: {eventname}</h2>
                    <p><strong>Event Date & Location: {eventdate} & {venue}</strong></p>
                    <p>Event Description: {eventdetails}</p>
                    <span className="availableseat">Available Seats: {availableseat}</span>

                    <hr />
                </div>
            </div>
            <div className="row">
            { !thankyouPage && availableseat ? 

            <div className="registerFrom col-md-4">  
                <p className="text-danger">{this.state.userError}</p>
                <h3>Please Register In Events</h3>
                <form onSubmit={this.onSubmit}>
                
                    <FormElementInput data={{type:'text', name:'name',text:'Name',currentVal:name}} onChange={this.onChange} />
                    <FormElementInput data={{type:'email', name:'email',text:'Email',currentVal:email}} onChange={this.onChange} />
                    <FormElementInput data={{type:'number', name:'number',text:'Contact Number',currentVal:number}} onChange={this.onChange} />

                    <div className="form-group">
                        <Submit data={{type:'submit',text:'Submit'}}/>
                    </div> 
            </form>
            </div>
            : null }
            { thankyouPage && name  ? <ThankYouPage name={name} email={email} events={[eventname, venue, eventdetails, eventdate]}/> : null }
            </div>
        </div>
    )};
};
