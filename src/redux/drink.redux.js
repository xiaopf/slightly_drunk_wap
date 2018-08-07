
import axios from 'axios';



const GET_DRINK_LIST = 'GET_DRINK_LIST';
const SEARCH_DRINK = 'SEARCH_DRINK';




const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const GET_ONE = 'GET_ONE';
const GET_ERROR = 'GET_ERROR';



var initState = {
	isSignIn: false,
	_id:'',
	userName:'',
	password:'',
	image:'',
	cart: [],
	drinkList: [],
	searchDrink:[],
	msg:'',
	code:6
}



export function drink(state = initState,action){
	switch (action.type){
		case GET_DRINK_LIST:

			return { ...initState, isSignIn: true, ...action.payload }

		case SEARCH_DRINK:

			return { ...initState, isSignIn : true, searchDrink : action.payload }


			




	    case ADD_ITEM: 
		    return {...state,...action.payload};
		break;

	    case UPDATE_ITEM: 
		    return {...state,...action.payload};
		break;

	    case ADD_ITEM: 
		    return {...state,...action.payload};
		break;

		case GET_ERROR:
			return { ...initState, 'code': action.payload.code, 'msg': action.payload.msg, isSignIn: false, redirectTo: redirectTo(action.payload.code) }
			break;
		case GET_ONE:
			return { ...initState, 'code': action.payload.code, 'msg': action.payload.msg, 'drink': action.payload.drink }
			break;
		default:
			return state;
	    break;

	}

}


// ////////////////////
// create action

export function createGetDrinkList(payload) {
	return { type: GET_DRINK_LIST, payload }
}

export function createSearchDrink(payload) {
	return { type: SEARCH_DRINK, payload}
}
// ////////////////////

export function createAddItem(payload){
    return {type:ADD_ITEM ,payload}
}

export function createUpdateItem(payload){
    return {type:UPDATE_ITEM ,payload}
}

export function createDeleteItem(payload){
    return {type:DELETE_ITEM ,payload}
}


export function createGetError(payload) {
	return { type: GET_ERROR, payload }
}

export function createGetOne(payload) {
	return { type: GET_ONE, payload }
}


// /////////////////////////
// 异步dispach
export function getDrinkListAsync() {
	return dispatch => (

		axios.get('/api/drinkList').then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createGetDrinkList(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}


export function searchDrinkAsync(value){
	return dispatch => (
		axios.get(`/api/drinkList?search=${value}`).them((res)=>{
			if(res.status === 200){
				if(res.data.code === 6){
					dispatch(createSearchDrink(res.data))
				}else{
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}
// ////////////////////////


export function createUpdateItemAsync(item){
	return dispatch => (
           axios.post('/edit/updateItem',item).then((res) => {
                 if(res.status === 200){
                 	console.log(res.data);
               		dispatch(createUpdateItem(res.data))
                 }
           })
	)
}

export function createDeleteItemAsync(_id){
	return dispatch => (
           axios.post('/edit/deleteItem',{_id}).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createDeleteItem(res.data))
                 }
           })
	)
}

export function createAddItemAsync(item){
	console.log(item);
	return dispatch => (
           axios.post('/edit/addItem',item).then((res) => {
                 if(res.status == 200){
                 	console.log(res.data);
               		dispatch(createAddItem(res.data))
                 }
           })
	)
}





export function getOneAsync(_id) {
	return dispatch => (
		axios.get(`/detail/${_id}`).then((res) => {
			if (res.status == 200) {
				console.log(res.data);
				createGetOne(res.data);
			}
		})
	)
}



function redirectTo(code) {
	switch (code) {
		case 0:
			return '/signin';
			break;
		case 1:
			return '';
			break;
		case 6:
			return '';
			break;
		default:
			return '';
			break;
	}
}