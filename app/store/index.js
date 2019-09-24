import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from '../reducer/index';

const EVMTools = createStore(reducer, devToolsEnhancer());

export default EVMTools;
