import React from 'react';



export const ToDo = (state) => {
	// console.log('Todo.js:state',state.state)
	
	 // state.state.map(todoItem => console.log(todoItem.item))

	
	return (
			
		<div>
			
			<h2>Items need to do</h2>
			<h5>{state.state.item}</h5>

			

		</div>		
			
	);

}

