import {createStore, applyMiddleware} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const EVMTools = createStore(reducer, applyMiddleware(thunk));

export default EVMTools;
