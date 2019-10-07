import React, {useState} from 'react';

export const Form = (props) => {
	
	const [newTodo, setNewTodo] = useState({item:''})
console.log(newTodo)
	
	const handleChange = (e) => {

		
		setNewTodo({
			
			item: e.target.value,
			completed : false,
			id: Date.now()

		});	

		return newTodo;
		
	}
	
	
	return (
		<form >

			<input placeholder='create a new todo item' 
				value={newTodo.item}
				onChange={(e) => handleChange(e)} 
			/>
			<button onClick={() => props.dispatch({type:'ADD_TODO',payload: newTodo})}>add todo</button>
		</form>
	)
}


