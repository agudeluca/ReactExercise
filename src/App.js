import React, { Component } from 'react';
import './App.css';
import ViewMain from './views';
import configureStore from './stores';
import { Provider } from 'react-redux';
let store = configureStore();
class App extends Component {

  render() {
     
    return (
      <Provider store={ store }>
      <ViewMain/>
      </Provider>
    );
  }
}

export default App;
