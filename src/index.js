import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Todo from './components/Todo';

// https://reacttraining.com/react-router/web/example/basic
const MyClientRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/todo" component={Todo} />
    </div>
  </Router>
)

ReactDOM.render(<MyClientRoutes />, document.getElementById('root'));
registerServiceWorker();
