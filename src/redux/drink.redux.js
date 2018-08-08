
import axios from 'axios';



const GET_DRINK_LIST = 'GET_DRINK_LIST';
const SEARCH_DRINK = 'SEARCH_DRINK';
const CANCEL_SEARCH = 'CANCEL_SEARCH';
const GET_SINGLE_DRINK = 'GET_SINGLE_DRINK';




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
	singleDrink:{},
	msg:'',
	code:0
}



export function drink(state = initState,action){
	switch (action.type){
		case GET_DRINK_LIST:

			return { ...initState, isSignIn: true, ...action.payload }

		case SEARCH_DRINK:

			return { ...initState,  ...action.payload }

		case CANCEL_SEARCH:

			return { ...initState,...action.payload,code:6 }

		case GET_SINGLE_DRINK:

			return { ...initState, ...action.payload }

		case GET_ERROR:
			return { ...initState, isSignIn: false, ...action.payload,  redirectTo: redirectTo(action.payload.code) }




	    case ADD_ITEM: 
		    return {...state,...action.payload};
		break;

	    case UPDATE_ITEM: 
		    return {...state,...action.payload};
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

export function createCancelSearch(payload) {
	return { type: CANCEL_SEARCH , payload}
}

export function createGetSingleDrink(payload) {
	return { type: GET_SINGLE_DRINK , payload }
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
// 同步dispach

export function cancelSearchSync(payload){

    return dispatch => (
		dispatch(createCancelSearch(payload))
	)
	
}
/////////////////////////
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


export function searchDrinkAsync(value,payload){
	return dispatch => (

		axios.get(`/api/drinkList?search=${value}`).then((res)=>{
			if(res.status === 200){
				if(res.data.code === 5){
					dispatch(createSearchDrink({...payload,...res.data}))
				}else{
					dispatch(createGetError({ ...payload, ...res.data }))
				}
			}
		})
	)
}

export function getSingleDrinkAsync(_id) {
	return dispatch => (

		axios.get(`/api/drinkList?_id=${_id}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createSearchDrink(res.data))
				} else {
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