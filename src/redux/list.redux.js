import axios from 'axios';

const GET_DATA = 'GET_DATA';
const GET_ERROR = 'GET_ERROR';


var initState = {
	isSignIn:'',
	drinkList:[]
}

export function getData (state = initState ,action){
	switch (action.type){
	    case GET_DATA: 
		    return {...initState,...action.payload,isSignIn:true}
		   
      case GET_ERROR: 
  	    return {...initState,...action.payload,isSignIn:false,redirectTo:redirectTo(action.payload.code)}
  	   
	    default:
	        return state;
	}

}

export function createGetData(payload){
    return {type:GET_DATA,payload}
}
export function createGetError(payload){
    return {type:GET_ERROR,payload}
}

export function getDataAsync() {
	return dispatch => (
		axios.get('/list').then((res)=>{
		    if(res.status == 200){
		    	console.log(res.data)
		    	if(res.data.code === 6){
						dispatch(createGetData(res.data))
		    	}else{
		    		dispatch(createGetError(res.data))
		    	}
		  		
		  		

		    }
		})
	)
}




function redirectTo(code){
	switch (code){
		case 0:
			return '/signin';
		break;
		case 1:
			return '';
		break;
		case 6:
			return '';
		break;
		default :
			return '';
		break;
	}
}