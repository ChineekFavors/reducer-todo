import React, {useContext, useState} from 'react';

import ToDoList from './ToDoList.js';




export const ToDo = (props) => {
	console.log(props.item)
	
	const [className, setClassName] = useState('notComplete');
	



	return (
			
		<div>
			
			<h3>Items need to do</h3>
			{props.item.map( item => <ToDoList key={item.id} item={item.item}/>)}		
		</div>		
			
	);

}

