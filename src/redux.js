import axios from 'axios';



const GET_DATA = 'GET_DATA';
const SIGN_UP = 'SIGN_UP';




export function getData (state = {},action){
	switch (action.type){
	    case GET_DATA: 
	        state = action.data;
		    return state;
	    default:
	        return state;
	}

}

export function signUp(state = {},action){
	switch (action.type){
	    case SIGN_UP: 
		    return state;
	    default:
	        return state;
	}

}




export function createGetData(data){
    return {type:GET_DATA,data:data}
}
export function CreateSignUp(data){
    return {type:SIGN_UP}
}




export function getDataAsync() {
	return dispatch => (
		axios.get('/list').then((res)=>{
		    if(res.status == 200){
		  		dispatch(createGetData(res.data))
		    }
		})
	)
}

