import React, {useReducer} from 'react';

import {initialState, reducer} from './reducers/reducer.js';


import {ToDo} from './components/ToDo.js';
import {Form} from './components/Form.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('App.js:state', state)
  // console.log('App.js:dispatch', dispatch)


 



  return (
    <div className="App">
   
      <h1>ToDo List</h1>
        <Form dispatch={dispatch}/>
         <ToDo state={state} />
      
     
    </div>
  );
}

export default App;
