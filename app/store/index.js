import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from '../reducers';

const EVMTools = createStore(reducer, devToolsEnhancer());

export default EVMTools;
