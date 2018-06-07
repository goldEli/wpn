import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import styles
import "weui";
import Main from "./component/Main";

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();
