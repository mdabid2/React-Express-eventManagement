import {connect} from 'react-redux';
import { mapDispactherToProps } from '../action'
import EVM from '../App';

const mapStateToProps = State =>({
    text:"hello"
})

const EVMTools = connect(mapStateToProps, mapDispactherToProps)(EVM);

export default EVMTools;
