
import axios from 'axios';

const GET_USER_INFO = 'GET_USER_INFO';
const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
const CHANGE_USER_IMAGE = 'CHANGE_USER_IMAGE';
const CHANGE_WINE_IN_USER = 'CHANGE_WINE_IN_USER';


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
	warn:'',
	code:0
}


export function sign(state = initState,action){
	switch (action.type){
		case SIGN_IN:
			return { ...state, ...action.payload, ...redirectTo(action.payload.code)};
		case SIGN_OUT:
			return { ...initState, redirectTo: '/signIn' };
		case SIGN_UP:
			return { ...state, ...action.payload , ...redirectTo(action.payload.code)};



		case GET_USER_INFO:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };

		case CHANGE_USER_INFO:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };

		case CHANGE_USER_IMAGE:
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code) };
			
		case COUNT_WINE_TO_CART:
			return { ...state, ...action.payload, redirectTo: redirectTo(action.payload.code) };

		case CHANGE_WINE_IN_USER:
			return { ...state, ...action.payload }
			
	    case ERROR_MSG: 
			return {...state,isSignIn:false,...action.payload};
			
	    default:
	        return state;


	}

}


function redirectTo(code){
	switch (code){
		// 登陆密码错误，用户不存在；注册用户名已存在不跳转
		case 401:
			return { redirectTo: "", isSignIn: false};
		// 注册，登陆成功，跳转/index
		case 201:
			return { redirectTo: '/index', isSignIn: true};
		
		case 6:
			return '';
		
		case 808:
			return '/index';
		case 7:
			return '/address/myAddress';
		

		default :
			return '';
		
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
export function createChangeWineInUser(payload) {
	return { type: CHANGE_WINE_IN_USER, payload }
}
// /////////////////////////













export function createSignUp(payload){
    return {type:SIGN_UP,payload}
}


export function createSignIn(payload){
    return {type:SIGN_IN,payload}
}



export function createErrorMsg(payload){
    return {type:ERROR_MSG,payload}
}



export function signInAsync(user) {

	if (!user.userName || !user.password) {
		return createErrorMsg({ warn: '用户名和密码不可以为空！' });
	}

	return dispatch => (
		axios.post('/user/signin', user).then((res) => {
			if (res.status === 200) {
				dispatch(createSignIn(res.data))
			}
		})
	)
}

export function signOut() {
	return { type: SIGN_OUT }
}

export function signUpAsync(user) {

	if (!user.userName || !user.password || !user.comfirmPassword) {
		return createErrorMsg({ warn: '用户名和密码不可以为空！' });
	} else if (user.password !== user.comfirmPassword) {
		return createErrorMsg({ warn: '两次密码不相同！' });
	}

	return dispatch => (

		axios.post('/user/signup', user).then((res) => {
			if (res.status === 200) {

				dispatch(createSignUp(res.data))
			}
		})
	)
}

















// /////////////////////////
// 异步dispach
export function getUserInfoAsync(_id) {

	return dispatch => (
		axios.get(`/user?_id=${_id}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {

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

		return dispatch => (
			// 参数应该是对象
			axios.post('/user/addr', info).then((res) => {
				if (res.status === 200) {

					dispatch(createChangeUserInfo(res.data))

				}
			})
		)
	}else{

		return dispatch => (
			// 参数应该是对象
			axios.post('/user', info).then((res) => {
				if (res.status === 200) {


					dispatch(createChangeUserInfo(res.data))

				}
			})
		)
	}
	

}

export function changeUserImageAsync(image) {



	return dispatch => (
		// 参数应该是对象
		axios.post('/user/image', image).then((res) => {
			if (res.status === 200) {

				dispatch(createChangeUserInfo(res.data))

			}
		})
	)
}


export function countWineToCartAsync(cart) {

	return dispatch => (
		axios.post('/user/cart', cart).then((res) => {
			if (res.status === 200) {
				dispatch(createCountWineToCart(res.data))
			}
		})
	)
}





export function changeWineInUserAsync(info) {
	return dispatch => (

		axios.post('/user/own', info).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {

					dispatch(createChangeWineInUser(res.data))
				} 
			}
		})
	)
}
// /////////////////////////







