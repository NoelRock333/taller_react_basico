import React from 'react';
const AppContext = React.createContext()

// https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b
class AppProvider extends React.Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {
  AppProvider,
  AppContext  
}