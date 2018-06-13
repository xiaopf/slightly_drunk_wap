import axios from 'axios';
const GET_DATA = 'GET_DATA';


var initState = {
	code:0,
	drinkList:{}
}

export function getData (state = initState ,action){
	switch (action.type){
	    case GET_DATA: 
		    return {code:6,drinkList:action.payload};
	    default:
	        return state;
	}

}

export function createGetData(payload){
    return {type:GET_DATA,payload}
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

