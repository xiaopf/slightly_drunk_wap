import axios from 'axios';



const GET_DATA = 'GET_DATA';


export function getData (state = {},action){
	switch (action.type){
	    case GET_DATA: 
	        state = action.data;
		    return state;
	    default:
	        return state;
	}

}




export function addNum(data){
    return {type:'GET_DATA',data:data}
}


export function getDataAsync() {
	return dispatch => (
		axios.get('/list').then((res)=>{
		    if(res.status == 200){
		  		dispatch(addNum(res.data))
		    }
		})
	)
}

