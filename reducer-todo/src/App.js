import React, {useReducer} from 'react';

import {initialState, reducer} from './reducers/reducer.js';


import {ToDo} from './components/ToDo.js';
import {Form} from './components/Form.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <div className="App">
      <h1>ToDo List</h1>
        <Form dispatch={dispatch}/>
        <ToDo todos={{state,dispatch}} 
          
        /> 
    </div>
  );
}

export default App;
