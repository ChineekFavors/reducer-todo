
export let initialState = [
	 {
	   item: 'Learn about reducers',
	  completed: false,
	  id: 3892987589,
	},
];	 


	console.log('reducer.js: initialState', initialState)

export const reducer = (state = initialState, action) => {
	
	switch(action.type){
		case 'TOGGLE':
			return [{
				...state, 
				completed: !false,
			}]
		case 'ADD_TODO':
		
			return [
				...state,
				 action.payload,			
			]	

		default: 
			return state
	
	}
		
};


