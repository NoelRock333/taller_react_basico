import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Todo from './components/Todo';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
