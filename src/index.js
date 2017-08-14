import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './scenes/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
