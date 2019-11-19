import React, {useEffect} from 'react';



export const ToDo = ({todos}) => {
	console.log('todos.js:todos:',todos)
	const handleToggle = (e) => {
		e.preventDefault();
		e.target.classList.toggle('completed');
		
		// todos.dispatch({type: "TOGGLE"});

	};
	
	
	useEffect(() => {
		
	},[todos]);	
	 	
	return (	
		<div>
			<h1>Items need to do?</h1>
			{todos.state.map(todo => 
				<div key={todo.id}
					className='false'
					onClick={ handleToggle}
				>
					{todo.item}
				</div>
			)}
			<button>clear completed</button>
		</div>				
	);

}

