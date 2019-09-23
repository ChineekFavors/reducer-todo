import React, {useState, useContext} from 'react';




export const Form = () => {
	
	const [newTodo, setNewTodo] = useState({item:''})
	

	
	const handleChange = (e) => {

		e.preventDefault();
		setNewTodo({
			
			item: e.target.value,
			completed : false,
			id: Date.now()

		});	
		console.log('form.js:Form:handleChang:newTodo',newTodo)
		return {
			
			newTodo
		};
	}
	const handleSubmit = (e) => {
		e.preventDefault();

	}
	
	return (
		<form onSubmit={ handleSubmit}>

			<input placeholder='create a new todo item' 
				value={newTodo.item}
				onChange={(e) => handleChange(e)} 
			/>
			<button>add todo</button>
		</form>
	)
}


