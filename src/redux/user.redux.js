
import axios from 'axios';

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';


var initState = {
	isSignIn:'',
	userName:'',
	password:'',
	msg:''
}


export function sign(state = initState,action){
	switch (action.type){
	    case SIGN_UP: 
		    return {...state,...action.payload,redirectTo:redirectTo(action.payload.code)};
		break;

        case SIGN_IN: 
    	    return {...state,...action.payload,redirectTo:redirectTo(action.payload.code)};;
    	break;

	    default:
	        return state;
	    break;

	}

}


function redirectTo(code){
	switch (code){
		case 0:
			return '';
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



export function createSignUpAsync(user){
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
	return dispatch => (
           axios.post('/user/signin',user).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createSignIn(res.data))
                 }
           })
	)
}

