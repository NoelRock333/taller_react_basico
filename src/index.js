import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Todo from './components/Todo';
import { AppProvider } from './AppContext';

// https://reacttraining.com/react-router/web/example/basic
const MyClientRoutes = () => (
  <AppProvider>
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/todo" component={Todo} />
        </div>
    </Router>
  </AppProvider>
)

ReactDOM.render(<MyClientRoutes />, document.getElementById('root'));
registerServiceWorker();
