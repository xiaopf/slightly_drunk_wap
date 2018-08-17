
import axios from 'axios';

const COUNT_WINE_TO_CART = 'COUNT_WINE_TO_CART';



var initState = {
	isSignIn: false,
	userName: '',
	password: '',
	image: '',
	cart: [],
	address: [],
	chooseAddr: 0,
	order: [],
	msg: '',
	code: 0
}


export function shop(state = initState,action){
	switch (action.type){
		case COUNT_WINE_TO_CART: 
			return { ...state, isSignIn: true, ...action.payload, redirectTo: redirectTo(action.payload.code)};

	    default:
	        return state;
	}

}


function redirectTo(code){
	switch (code){
		case 0:
			return '/signin';
		case 1:
			return '';
		case 6:
			return '/index';
		default :
			return '';
	}
}





export function createCountWineToCart(payload){
	return { type: COUNT_WINE_TO_CART,payload}
}


export function countWineToCartAsync(cart){
	
	console.log(cart)
	
	return dispatch => (
		axios.post('/user/cart', cart).then((res) => {
                 if(res.status === 200){
					 dispatch(createCountWineToCart(res.data))
                 }
           })
	)
}

