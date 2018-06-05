import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import styles
import "weui";
import Layout from "./component/Common/Layout/Layout";

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
