
import axios from 'axios';

const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';



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

	    case UPDATE_ITEM: 
		    return {...state,...action.payload};
		break;

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


export function createUpdateItem(payload){
    return {type:UPDATE_ITEM ,payload}
}

export function createDeleteItem(payload){
    return {type:DELETE_ITEM ,payload}
}




export function createUpdateItemAsync(item){
	return dispatch => (
           axios.post('/edit/updateItem',item).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createUpdateItem(res.data))
                 }
           })
	)
}

export function createDeleteItemAsync(_id){
	return dispatch => (
           axios.post('/edit/deleteItem',{_id}).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createDeleteItem(res.data))
                 }
           })
	)
}

export function createAddItemAsync(item){
	console.log(item);
	return dispatch => (
           axios.post('/edit/addItem',item).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createAddItem(res.data))
                 }
           })
	)
}
