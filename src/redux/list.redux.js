import axios from 'axios';

const GET_LIST = 'GET_LIST';
const GET_BANNER = 'GET_BANNER';
const GET_ONE = 'GET_ONE';
const GET_ERROR = 'GET_ERROR';


var initState = {
	isSignIn:'',
	drinkList:[],
	userName:'',
	password:''
}

export function getData (state = initState ,action){
	switch (action.type){
	    case GET_LIST: 
		    return {...initState,'code':action.payload.code,'msg':action.payload.msg,'drinkList':action.payload.drinkList,'banners':action.payload.banners,...action.payload.user,isSignIn:true}
		break;   
        case GET_ERROR: 
  	        return {...initState,'code':action.payload.code,'msg':action.payload.msg,isSignIn:false,redirectTo:redirectTo(action.payload.code)}
  	    break;
        case GET_ONE: 
	        return {...initState,'code':action.payload.code,'msg':action.payload.msg,'drink':action.payload.drink}
	    break;
	    default:
	        return state;
	}

}

export function createGetData(payload){
    return {type:GET_LIST,payload}
}
export function createGetError(payload){
    return {type:GET_ERROR,payload}
}

export function createGetOne(payload){
    return {type:GET_ONE,payload}
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


export function getOneAsync(_id) {
	return dispatch => (
		axios.get(`/detail/${_id}`).then((res)=>{
		    if(res.status == 200){
		    	console.log(res.data);
                createGetOne(res.data);
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