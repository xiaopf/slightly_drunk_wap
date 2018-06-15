
import axios from 'axios';

const ADD_ITEM = 'ADD_ITEM';



var initState = {
	isSignIn:'',
	userName:'',
	password:'',
	msg:''
}


export function drinks(state = initState,action){
	switch (action.type){
	    case ADD_ITEM: 
		    return {...state,...action.payload};
		break;

	    default:
	        return state;
	    break;

	}

}







export function createAddItem(payload){
    return {type:ADD_ITEM ,payload}
}




export function createAddItemAsync(item){
	return dispatch => (
           axios.post('/edit/addItem',item).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createAddItem(res.data))
                 }
           })
	)
}

