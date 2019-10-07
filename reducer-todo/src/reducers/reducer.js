
export let initialState = 
	{
	  item: 'Learn about reducers',
	  completed: false,
	  id: 3892987589,
	};
	






export const reducer = (state, action) => {
	
	console.log('reducer.js:reducer:action', action)


	
	switch(action.type){
		case 'TOGGLE':
			return {
				...state,

				 
				
		}
		case 'ADD_TODO':
			return {
				...state,
				

				

			}	

		default: return state
					

	}
		
};


