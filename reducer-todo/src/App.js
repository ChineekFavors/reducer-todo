import React, {useReducer} from 'react';

import {initialState, reducer} from './reducers/reducer.js';
import {ToDoContext} from './contexts/ToDoContext';

import {ToDo} from './components/ToDo.js'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ToDoContext.Provider value={state}>
        <ToDo />
      </ToDoContext.Provider>
    </div>
  );
}

export default App;
