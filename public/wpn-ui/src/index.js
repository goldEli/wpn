import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import styles
import "weui";
import Login from './component/Login/Login';
import Home from './component/Home/Home';

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
