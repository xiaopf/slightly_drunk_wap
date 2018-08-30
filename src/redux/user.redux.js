
import axios from 'axios';

const GET_USER_INFO = 'GET_USER_INFO';
const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
const CHANGE_USER_IMAGE = 'CHANGE_USER_IMAGE';
const CHANGE_USER_ADDR = 'CHANGE_USER_ADDR';



const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const COUNT_WINE_TO_CART = 'COUNT_WINE_TO_CART';

const ERROR_MSG = 'ERROR_MSG';


var initState = {
	isSignIn:false,
	userName:'',
	password:'',
	image: '',
	cart: [],
	address:[],
	chooseAddr:0,
	order:[],
	msg:'',
	code:0
}


export function sign(state = initState,action){
	switch (action.type){

		case GET_USER_INFO:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };
		case SIGN_OUT:
			return { ...state, isSignIn: false, redirectTo: '/signIn' };
		case CHANGE_USER_INFO:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };

		case CHANGE_USER_IMAGE:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };
			
		case COUNT_WINE_TO_CART:
			return { ...state, ...action.payload, redirectTo: redirectTo(action.payload.code) };
		
			

	    case SIGN_UP: 
			return { ...state, isSignIn: true, ...action.payload.data, 'code': action.payload.code, 'msg': action.payload.msg, redirectTo: '/index'};

        case SIGN_IN: 
			return {
				...state, isSignIn: true, ...action.payload.data, 'code': action.payload.code, 'msg': action.payload.msg, redirectTo: redirectTo(action.payload.code)};

	    case ERROR_MSG: 
			return {...state,isSignIn:false,...action.payload};
			



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
			return '/signin';
		break;
		case 6:
			return '';
		break;

		case 7:
			return '/address/myAddress';
		break;

		default :
			return '';
		break;
	}
}


// /////////////////////////
// create action
export function createGetUserInfo(payload) {
	return { type: GET_USER_INFO, payload }
}

export function createChangeUserInfo(payload) {
	return { type: CHANGE_USER_INFO, payload }
}

export function createChangeUserImage(payload) {
	return { type: CHANGE_USER_IMAGE, payload }
}

export function createCountWineToCart(payload) {
	return { type: COUNT_WINE_TO_CART, payload }
}

// /////////////////////////













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

// /////////////////////////
// 异步dispach
export function getUserInfoAsync(_id) {

	return dispatch => (
		axios.get(`/user?_id=${_id}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createGetUserInfo(res.data))
				} else {
					// dispatch(createGetError(res.data))
				}
			}
		})
	)
}
export function changeUserInfoAsync(info,which) {

	if(which === 'addr'){
		console.log(info)
		return dispatch => (
			// 参数应该是对象
			axios.post('/user/addr', info).then((res) => {
				if (res.status === 200) {

					console.log(res.data)
					dispatch(createChangeUserInfo(res.data))

				}
			})
		)
	}else{
		console.log(info)
		return dispatch => (
			// 参数应该是对象
			axios.post('/user', info).then((res) => {
				if (res.status === 200) {

					console.log(res.data)
					dispatch(createChangeUserInfo(res.data))

				}
			})
		)
	}
	

}

export function changeUserImageAsync(image) {

	console.log(image)

	return dispatch => (
		// 参数应该是对象
		axios.post('/user/image', image).then((res) => {
			if (res.status === 200) {

				console.log(res.data)
				dispatch(createChangeUserInfo(res.data))

			}
		})
	)
}


export function countWineToCartAsync(cart) {

	console.log(cart)

	return dispatch => (
		axios.post('/user/cart', cart).then((res) => {
			if (res.status === 200) {
				dispatch(createCountWineToCart(res.data))
			}
		})
	)
}


// /////////////////////////







export function createSignUpAsync(user){

	if(!user.userName || !user.password || !user.comfirmPassword){
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