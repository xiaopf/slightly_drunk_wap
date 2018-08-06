
import axios from 'axios';

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const ERROR_MSG = 'ERROR_MSG';


var initState = {
	isSignIn:false,
	userName:'',
	password:'',
	msg:''
}


export function sign(state = initState,action){
	switch (action.type){
	    case SIGN_UP: 
		    return {...state,isSignIn:true,...action.payload.data,'code':action.payload.code,'msg':action.payload.msg,redirectTo:redirectTo(action.payload.code)};
		break;

      case SIGN_IN: 
    	    return {...state,isSignIn:true,...action.payload.data,'code':action.payload.code,'msg':action.payload.msg,redirectTo:redirectTo(action.payload.code)};;
    	break;

	    case ERROR_MSG: 
		    return {...state,isSignIn:false,...action.payload};;
			break;

	    case SIGN_OUT: 
			    return {...initState,redirectTo:redirectTo(0)};;
			break;

	    default:
	        return state;
	    break;

	}

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
			return '/index';
		break;
		default :
			return '';
		break;
	}
}





export function createSignUp(payload){
    return {type:SIGN_UP,payload}
}


export function createSignIn(payload){
    return {type:SIGN_IN,payload}
}

export function createSignOut(){
    return {type:SIGN_OUT}
}

export function createErrorMsg(payload){
    return {type:ERROR_MSG,payload}
}


export function createSignUpAsync(user){

	if(!user.userName || !user.password ||!user.comfirmPassword){
	   return createErrorMsg({msg:'用户名和密码不可以为空！'});
	}else if(user.password !== user.comfirmPassword){
	   return createErrorMsg({msg:'两次密码不相同！'}) ;
	}

	return dispatch => (

       axios.post('/user/signup',user).then((res) => {
             if(res.status == 200){
             	console.log(res.data);
           		dispatch(createSignUp(res.data))
             }
       })
	)
}



export function createSignInAsync(user){

	if(!user.userName || !user.password){
	   return createErrorMsg({msg:'用户名和密码不可以为空！'});
	}


	return dispatch => (
           axios.post('/user/signin',user).then((res) => {
                 if(res.status == 200){
               		dispatch(createSignIn(res.data))
                 }
           })
	)
}

export function createSignOutAsync(){
	return createSignOut()
}