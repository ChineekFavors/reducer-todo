import React, {useState} from 'react';

export const Form = (state) => {
	
	const [newTodo, setNewTodo] = useState('')
 // console.log('Form.js:state',newTodo)
	
	const handleChange = (e) => {
		
		setNewTodo( e.target.value);		
		
	}

	const submit = (e)=> {
	
		e.preventDefault()
		state.dispatch({type:'ADD_TODO',payload: newTodo})
		// console.log('form.js:submitfunctio', newTodo)
		setNewTodo('')
	}

	
	return (
		<form onSubmit={submit}>

			<input placeholder='create a new todo item' 
				value={newTodo}
				onChange={(e) => handleChange(e)} 
			/>
			<button >add todo</button>
		</form>
	)
}


