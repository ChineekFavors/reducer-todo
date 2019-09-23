import React from 'react';

const ToDoList = (props) => {
	console.log(props)

	return(
		<p>{props.item}</p>
	);
	

 }
 export default ToDoList;
