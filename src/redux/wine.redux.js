
import axios from 'axios';



const GET_WINE_LIST = 'GET_WINE_LIST';
const CHANGE_WINE_IN_USER = 'CHANGE_WINE_IN_USER';


const SEARCH_WINE = 'SEARCH_WINE';
const CANCEL_SEARCH = 'CANCEL_SEARCH';
const GET_SINGLE_WINE = 'GET_SINGLE_WINE';






const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const GET_ONE = 'GET_ONE';
const ADD_ITEM = 'ADD_ITEM';
const GET_ERROR = 'GET_ERROR';



var initState = {
	isSignIn: false,
	_id: '',
	userName: '',
	password: '',
	image: '',
	cart: [],
	address: [],
	chooseAddr: 0,
	order: [],
	wineList: [],
	searchWine: [],
	singleWine: {},
	msg: '',
	code: 0
}


export function wine(state = initState, action) {
	switch (action.type) {
		case GET_WINE_LIST:

			return { ...state, isSignIn: true, ...action.payload }

		case SEARCH_WINE:

			return { ...state, ...action.payload }

		case CANCEL_SEARCH:

			return { ...state, code: 6 }

		case GET_SINGLE_WINE:

			return { ...state, ...action.payload }

		case GET_ERROR:
			return { ...state, isSignIn: false, ...action.payload, redirectTo: redirectTo(action.payload.code) }

		case CHANGE_WINE_IN_USER:
			return { ...state, isSignIn: true, ...action.payload }
			






		case ADD_ITEM:
			return { ...state, ...action.payload };
			break;

		case UPDATE_ITEM:
			return { ...state, ...action.payload };
			break;


		default:
			return state;
			break;

	}

}


// ////////////////////
// create action

export function createGetWineList(payload) {
	return { type: GET_WINE_LIST, payload }
}

export function createSearchWine(payload) {
	return { type: SEARCH_WINE, payload }
}

export function createCancelSearch(payload) {
	return { type: CANCEL_SEARCH, payload }
}

export function createGetSingleWine(payload) {
	return { type: GET_SINGLE_WINE, payload }
}


export function createChangeWineInUser(payload) {
	return { type: CHANGE_WINE_IN_USER, payload }
}




// ////////////////////

export function createAddItem(payload) {
	return { type: ADD_ITEM, payload }
}

export function createUpdateItem(payload) {
	return { type: UPDATE_ITEM, payload }
}

export function createDeleteItem(payload) {
	return { type: DELETE_ITEM, payload }
}


export function createGetError(payload) {
	return { type: GET_ERROR, payload }
}

export function createGetOne(payload) {
	return { type: GET_ONE, payload }
}



// /////////////////////////
// 同步dispach

export function cancelSearchSync() {

	return dispatch => (
		dispatch(createCancelSearch())
	)

}
/////////////////////////
// /////////////////////////
// 异步dispach
export function getWineListAsync() {

	return dispatch => (

		axios.get('/wine/wineList').then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createGetWineList(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}


export function searchWineAsync(value) {
	return dispatch => (

		axios.get(`/wine/wineList?search=${value}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 5) {
					dispatch(createSearchWine(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}

export function getSingleWineAsync(_id) {
	console.log('进来了进来了')
	return dispatch => (

		axios.get(`/wine/wineList?_id=${_id}`).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createSearchWine(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}

export function changeWineInUserAsync(info) {
	return dispatch => (

		axios.post('/user/own',info).then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					console.log(res.data)
					dispatch(createSearchWine(res.data))
				} else {
					dispatch(createGetError(res.data))
				}
			}
		})
	)
}


// ////////////////////////


export function createUpdateItemAsync(item) {
	return dispatch => (
		axios.post('/edit/updateItem', item).then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				dispatch(createUpdateItem(res.data))
			}
		})
	)
}

export function createDeleteItemAsync(_id) {
	return dispatch => (
		axios.post('/edit/deleteItem', { _id }).then((res) => {
			if (res.status == 200) {
				console.log(res.data);
				dispatch(createDeleteItem(res.data))
			}
		})
	)
}

export function createAddItemAsync(item) {
	console.log(item);
	return dispatch => (
		axios.post('/edit/addItem', item).then((res) => {
			if (res.status == 200) {
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