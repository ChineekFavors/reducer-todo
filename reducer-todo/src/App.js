import React, {useReducer} from 'react';

import {initialState, reducer} from './reducers/reducer.js';


import {ToDo} from './components/ToDo.js';
import {Form} from './components/Form.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


 

console.log('app.js:app:state',state)

  return (
    <div className="App">
   
      <h1>ToDo List</h1>
        <Form dispatch={dispatch} />
         <ToDo item={state} dispatch={dispatch}/>
      
     
    </div>
  );
}

export default App;
