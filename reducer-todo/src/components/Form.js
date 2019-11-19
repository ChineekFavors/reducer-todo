import React, {useState} from 'react';



export const Form = ({dispatch}) => {
	
	const [item, setNewTodo] = useState({item:''});
	
	
	const handleChange = (e) => {
		
		setNewTodo({
			item: e.target.value,
			id: Date.now(),
			completed: false,

		});		
		
	}

	const submit = (e)=> {
		e.preventDefault()
		
		if (item === '') {
			return;
		}
		dispatch({type:'ADD_TODO',payload: item})
		setNewTodo({item:''})
	}

	
	return (
		<form onSubmit={submit}>
			<input placeholder='create a new todo item' 
				value={item.item}
				onChange={(e) => handleChange(e)} 
			/>
			<button onClick={submit}>add todo</button>
		</form>
	)
};


