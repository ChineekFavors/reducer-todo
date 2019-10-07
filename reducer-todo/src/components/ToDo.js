import React from 'react';

import ToDoList from './ToDoList.js';




export const ToDo = (props) => {
	
	console.log('ToDo.js:ToDo:props.item',props.item)
	return (
			
		<div>
			
			<h3>Items need to do</h3>
			<ToDoList item={props.item.item} />
		</div>		
			
	);

}

