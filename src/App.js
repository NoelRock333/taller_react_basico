import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './AppContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AppContext.Consumer>
            {(context) => (
              <div>
                <span>{context.number}</span>
                <button onClick={context.inc}>INC</button>
              </div>
            )}
        </AppContext.Consumer>
        <Link to="/todo">Todo List</Link>
      </div>
    );
  }
}

export default App;
