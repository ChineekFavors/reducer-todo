
export let initialState = [ 
	{
	  item: 'Learn about reducers',
	  completed: false,
	  id: 3892987589,
	},
	{
	  item: 'figure out how to add more object of todo',
	  completed: false,
	  id: 7589,

	},
]





export const reducer = (state, action) => {
	console.log('reducer.js: function reducer', state, action);
	
	switch(action.type){
		case 'ADD_TODO':
			return {
				...state,
				
			}

		default:
					

	}
		
};


