import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import store from './store';

import { bugAdded, bugRemoved, bugResolved } from './actions';

function App() {

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState())
  })

  store.dispatch(bugAdded("Bug0d2dddd1"))
  // store.dispatch(bugRemoved(1))
  store.dispatch(bugResolved(2))
  
  unsubscribe();

  // store.dispatch({
  //   type: actions.BUG_REMOVED,
  //   payload: {
  //     id: 3
  //   }
  // })

  // console.log(store.getState())


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
