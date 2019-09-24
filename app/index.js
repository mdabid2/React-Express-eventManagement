import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import EVMTools from './store'

ReactDOM.render(
<Provider store={EVMTools}>
    <App />
 </Provider>, document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('app'));

registerServiceWorker();
