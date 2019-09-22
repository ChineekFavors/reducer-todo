import React, {useContext} from 'react';

import {ToDoContext} from '../contexts/ToDoContext.js'



export const ToDo = () => {
	const todos = useContext(ToDoContext);
	console.log(todos);

	return (
		<section>
			<h3>{todos.item}</h3>
		</section>		
	);

}