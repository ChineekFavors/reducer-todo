
export let initialState = 
	 {
	   item: 'Learn about reducers',
	  completed: false,
	  id: 3892987589,
	};
	 


	

	

export const reducer = (state, action) => {
	
	// console.log('reducer top level', state)
	
	switch(action.type){
		case 'TOGGLE':
		// console.log('reducer.js:actionSwithch',state)
			return {

				state,
				
			
				
		
		}
		case 'ADD_TODO':
		// console.log('reducer.js:ADD-TODO',action.payload)
		
			return {
				...state,
			item : action.payload
			
					
		}	

		default: 
		console.log('default')
			return state
					

	}


		
};


