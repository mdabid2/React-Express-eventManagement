// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import EVMToolsStore from './store';

ReactDOM.render(
<Provider store={EVMToolsStore}>
    <App />
 </Provider>, (document.getElementById('app'):any));

//ReactDOM.render(<App />, document.getElementById('app'));

