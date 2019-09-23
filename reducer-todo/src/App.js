import React, {useReducer} from 'react';

import {initialState, reducer} from './reducers/reducer.js';


import {ToDo} from './components/ToDo.js';
import {Form} from './components/Form.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const toggleToDo = (e) => {
    console.log('click', e.target.className)
    if(e.target.className === 'notComplete'){
      e.target.className.add('completed');   
    }
  }
 

console.log('app.js:app:state',state)

  return (
    <div className="App">
   
      <h1>ToDo List</h1>
        <Form />
         <ToDo item={state}/>
      
     
    </div>
  );
}

export default App;
