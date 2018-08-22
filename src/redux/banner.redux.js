import axios from 'axios';

const UPDATE_BANNER = 'UPDATE_BANNER';
const GET_INDEX_BANNER = 'GET_INDEX_BANNER';


var initState = {
	
	indexBannerList: [],
	msg: '',
	code: 0
}


export function banner(state = initState,action){
	switch (action.type){

		case GET_INDEX_BANNER:
			return { ...initState, ...action.payload, isSignIn: true, redirectTo: '/editWine' };



	    case UPDATE_BANNER: 
		    return {...initState,...action.payload,redirectTo:'/editWine'};


	    default:
	        return state;

	}

}
// ////////////////////
// create action
export function createGetIndexBanner(payload) {
	return { type: GET_INDEX_BANNER, payload }
}
// //////////////////////





// /////////////////////////
// 异步dispach
export function getIndexBannerAsync() {

	return dispatch => (
		axios.get('/api/indexBannerList').then((res) => {
			if (res.status == 200) {
				dispatch(createUpdateBanner(res.data))
			}
		})
	)
}
// //////////////////////


export function createUpdateBanner(payload){
	return {type:UPDATE_BANNER ,payload}
}

export function createUpdateBannerAsync(banner){
	console.log(banner);
    return dispatch => (
	         axios.post('/edit/updateBanner',banner).then((res) => {
	              if(res.status == 200){
	              	dispatch(createUpdateBanner(res.data))
	              }
	         })
    )
}