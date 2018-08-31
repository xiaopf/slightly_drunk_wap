
import axios from 'axios';



const GET_WINE = 'GET_WINE';



const SEARCH_WINE = 'SEARCH_WINE';
const CANCEL_SEARCH = 'CANCEL_SEARCH';
const GET_SINGLE_WINE = 'GET_SINGLE_WINE';






const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const GET_ONE = 'GET_ONE';
const ADD_ITEM = 'ADD_ITEM';
const GET_ERROR = 'GET_ERROR';



var initState = {
	
	_id: '', 
	wineList: [],
	searchWine: [],
	singleWine: {},
	msg: '',
	code: 0
}


export function wine(state = initState, action) {
	switch (action.type) {
		case GET_WINE:

			return { ...state, ...action.payload }

		case SEARCH_WINE:

			return { ...state, ...action.payload }

		case CANCEL_SEARCH:

			return { ...state, code: 6 }

		case GET_SINGLE_WINE:

			return { ...state, ...action.payload }

		case GET_ERROR:
			return { ...state, ...action.payload, redirectTo: redirectTo(action.payload.code) }


			






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

export function createGetWine(payload) {
	return { type: GET_WINE, payload }
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
export function getWineAsync() {
	return dispatch => (

		axios.get('/wine/wineList').then((res) => {
			if (res.status === 200) {
				if (res.data.code === 6) {
					dispatch(createGetWine(res.data))
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



export function updateItemAsync(state) {

	let mainIndex = [];
	let picIndex = [];

    for(let i = 0; i < state.mainImgs.length;i ++){
		if(state.mainImgs[i].file.name){
			mainIndex.push(i)
		}
	}
	for (let i = 0; i < state.picImgs.length; i++) {
		if(state.picImgs[i].file.name){
			picIndex.push(i)
		}
	}

	console.log(mainIndex, '/', picIndex)
	let imgArr = state.mainImgs.concat(...state.picImgs);
	let nImgArr = imgArr.filter((img)=>(img.file.name))
	let len = nImgArr.length;
	let formData = new FormData();

    for(let i = 0;i<len;i++){
		formData.append('uploads', nImgArr[i].file);
	}

	return dispatch => (
		axios.post('/wine/saveImg', formData).then((res) => {
			if (res.status === 200) {

				for (let i = 0; i < res.data.nameArr.length ; i++){
					if (i < mainIndex.length){
						state.img_url[mainIndex[i]] = '/upload/images/upWine/'+res.data.nameArr[i]
					}else{
						state.pics[mainIndex[i]] = '/upload/images/upWine/'+res.data.nameArr[i]
					}
				}

				delete state.mainImgs
				delete state.picImgs

				axios.post('/wine/updateWine', state).then((res) => {
					if (res.status === 200) {
						console.log(res.data);
						// dispatch(createUpdateItem(res.data))
					}
				})


			}
		})
	)



	

	




}
// ////////////////////////




export function deleteItemAsync(_id) {
	return dispatch => (
		axios.post('/edit/deleteItem', { _id }).then((res) => {
			if (res.status == 200) {
				console.log(res.data);
				dispatch(createDeleteItem(res.data))
			}
		})
	)
}

export function addItemAsync(item) {
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