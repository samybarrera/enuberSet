import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slide from './Slide';
import Somos from './Somos';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Slide />, document.getElementById('slin'));
registerServiceWorker();

ReactDOM.render(<Somos />, document.getElementById('soom'));
registerServiceWorker();


