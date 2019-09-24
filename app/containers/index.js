import {connect} from 'react-redux';
import EVM from '../App';

const mapStateToProps = State =>({
    text:"hello"
})
const mapDispactherToProps = dispatchEvent => {
    return{
        FilterInventroy: (e) => dispatchEvent(
        {
            type:'FILTER_INVENTORY',
            targetValue:e.target.value
        })
    }
}
const EVMTools = connect(mapStateToProps,mapDispactherToProps)(EVM);

export default EVMTools;
