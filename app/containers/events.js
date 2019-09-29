import {connect} from 'react-redux';
import {getAllEventsRequest} from '../action';
import EVENTS from '../components/organisms/events';

const mapStateToProps = State =>(console.log("Store",State),{
  events:State.events
})
const mapDispactherToProps = dispatchEvent => {
  return{
    getAllEventsRequest: () => dispatchEvent(getAllEventsRequest())
  }
}
const ALLEVENTS = connect(mapStateToProps,mapDispactherToProps)(EVENTS);

export default ALLEVENTS;
