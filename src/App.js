// CreateScreen, ReadScreen, UpdateScreen, ListScreen,
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ListScreen from './ListScreen';
import ReadScreen from './ReadScreen';
import CreateScreen from './CreateScreen';
import UpdateScreen from './UpdateScreen';

function App() {

  
  // const unsubscribe = store.subscribe(() => {
    //   console.log("Store changed!", store.getState())
    // })
    
    // store.dispatch(bugAdded("Bug0d2dddd1"))
    
    // unsubscribe();
    
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListScreen />} />
        <Route path="/read" element={<ReadScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/update" element={<UpdateScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
