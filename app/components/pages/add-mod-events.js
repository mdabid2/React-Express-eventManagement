import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormElementInput from  "../molecules/formEleInput";
import FormElementTextArea from  "../molecules/formEleTextarea";
import Submit from  "../atoms/submit";
import axios from 'axios';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state={
            eventname:'',
            venue:'',
            eventdetails:'',
            eventdate:'',
            totalseat:'',
            readonlyflag:this.props.readOnly
        }
        this.editEvent=this.props.editEvent;
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    componentDidMount() {
        const eventID=(this.props.history.location.pathname).split('/');
        if(this.editEvent) {
            axios.get(`/api/editevent/${eventID[2]}`)
            .then(myEvents => { 
                this.setState(
                    {...myEvents.data}
                );
            });
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        this.setState({ userError:'' });
        
        const {eventname, venue, eventdetails, eventdate,totalseat } = this.state;
        
        if(!this.editEvent) {
            axios.post('/api/addevent', {eventname, venue, eventdetails, eventdate, totalseat })
            .then((result) => {
                if(result.data.success){  
                    this.props.history.push("/eventsdashboard");
                } else {
                    this.setState({ userError:result.data.message });
                }
            })
            .catch(error => {
                console.log(error.response)
            });  
        } else {
            const eventID=(this.props.history.location.pathname).split('/');
            axios.put(`/api/editevent/${eventID[2]}`, {venue, eventdetails})
            .then((result) => {
                if(result.data.success){  
                    this.props.history.push("/eventsdashboard");
                } else {
                    this.setState({ userError:result.data.message });
                }
            })
            .catch(error => {
                console.log(error.response)
            });  
        }
        
    };
    render(){
    const {eventname, venue, eventdetails, eventdate, totalseat, readonlyflag } = this.state;
    
    return(
        
        <div className="row">

            <div className="addEvent col-md-4">
            <h3>{this.props.title}</h3>
            <p className="text-danger">{this.state.userError}</p>
            <form onSubmit={this.onSubmit}>
                <FormElementInput data={{type:'text', name:'eventname',text:'Event Name',currentVal:eventname}} onChange={this.onChange} readonlyval={readonlyflag} />
                <FormElementInput data={{type:'text', name:'venue',text:'Venue',currentVal:venue}} onChange={this.onChange} />
                <FormElementTextArea data={{name:'eventdetails',text:'Event Details',currentVal:eventdetails}} onChange={this.onChange} />
                <FormElementInput data={{type:'number', name:'totalseat',text:'Total Seats',currentVal:totalseat}} onChange={this.onChange} readonlyval={readonlyflag}/>
                <FormElementInput data={{type:'date', name:'eventdate',text:'Event Date',currentVal:eventdate}} onChange={this.onChange} readonlyval={readonlyflag}/>
                
                <div className="form-group">
                    <Submit data={{type:'submit',text:'Submit'}}/>
                    <Link to="/eventsdashboard" className="btn btn-primary">Cancel</Link>
                </div>
            </form>
            </div>
        </div>
    )};
}

export default AddEvent;
