
import axios from 'axios';

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';


const initState = {
	isSignIn:'',
	userName:'',
	password:'',
	msg:''
}


export function sign(state = {},action){
	switch (action.type){
	    case SIGN_UP: 
		    return state;
		break;

        case SIGN_IN: 
    	    return state;
    	break;

	    default:
	        return state;
	    break;

	}

}








export function createSignUp(user){
    return {type:SIGN_UP,...user}
}


export function createSignIn(user){
    return {type:SIGN_IN,...user}
}



export function createSignUpAsync(user){
	return dispatch => (
           axios.post('/user/signup',user).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createSignUp(user,res.data))
                 }
           })
	)
}

