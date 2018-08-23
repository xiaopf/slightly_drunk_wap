
import axios from 'axios';

const GET_DRINK = 'GET_DRINK';
const SEARCH_DRINK = 'SEARCH_DRINK';
const CANCEL_SEARCH = 'CANCEL_SEARCH';
const GET_SINGLE_DRINK = 'GET_SINGLE_DRINK';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const GET_ERROR = 'GET_ERROR';



var initState = {
	_id:'',
	drinkList: [],
	searchDrink: [],
	singleDrink:{},
	msg:'',
	code:0
}



export function drink(state = initState,action){
	switch (action.type){
		case GET_DRINK:
			return { ...state, ...action.payload }

		case SEARCH_DRINK:
			return { ...state, ...action.payload }

		case CANCEL_SEARCH:
			return { ...state, code: 6, searchDrink:[]}

		case GET_SINGLE_DRINK:
			return { ...state, ...action.payload }

		case GET_ERROR:
			return { ...state,  ...action.payload,  redirectTo: redirectTo(action.payload.code) }

	    case ADD_ITEM: 
		    return {...state,...action.payload};
		
	    case UPDATE_ITEM: 
			return {...state,...action.payload};
			
		default:
			return state;
	    
	}

}

// ////////////////////
// create action

export function createGetDrink(payload) {
	return { type: GET_DRINK, payload }
}

export function createSearchDrink(payload) {
	return { type: SEARCH_DRINK, payload}
}

export function createCancelSearch(payload) {
	return { type: CANCEL_SEARCH , payload}
}

export function createGetSingleDrink(payload) {
	return { type: GET_SINGLE_DRINK , payload }
}

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

// ////////////////////


// /////////////////////////
// 同步dispach

export function cancelSearchSync(){

    return dispatch => (
		dispatch(createCancelSearch())
	)
	
}
/////////////////////////
// /////////////////////////
// 异步dispach
export function getDrinkAsync() {
	return dispatch => (

		axios.get('/api/drink').then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createGetDrink(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}


export function searchDrinkAsync(value){
	return dispatch => (

		axios.get(`/api/drink?search=${value}`).then((res)=>{
			if(res.status === 200){
				if(res.data.code === 5){
					dispatch(createSearchDrink(res.data))
				}else{
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}

export function getSingleDrinkAsync(_id) {
	return dispatch => (

		axios.get(`/api/drink?d_id=${_id}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createGetSingleDrink(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}

export function deleteItemAsync(_id) {
	return dispatch => (
		axios.delete('/drink/list', {
			data: {_id}
			}).then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				dispatch(createDeleteItem(res.data))
			}
		})
	)
}

export function updateItemAsync(item) {
	return dispatch => (
		axios.post('/edit/updateItem', item).then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				dispatch(createUpdateItem(res.data))
			}
		})
	)
}



export function addItemAsync(item) {
	console.log(item);
	return dispatch => (
		axios.post('/edit/addItem', item).then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				dispatch(createAddItem(res.data))
			}
		})
	)
}
// ////////////////////////


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