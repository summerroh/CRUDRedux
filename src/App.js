// CreateScreen, ReadScreen, UpdateScreen, ListScreen,
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

import ListScreen from './ListScreen';

function App() {

  
  // const unsubscribe = store.subscribe(() => {
    //   console.log("Store changed!", store.getState())
    // })
    
    // store.dispatch(bugAdded("Bug0d2dddd1"))
    
    // unsubscribe();
    
    
  return (
      < ListScreen />
  );
}

export default App;
