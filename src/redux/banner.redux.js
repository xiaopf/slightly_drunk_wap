import axios from 'axios';
const GET_BANNER = 'GET_BANNER';
const UPDATE_BANNER = 'UPDATE_BANNER';

var initState = {
	indexBannerList: [],
	shopBannerList: [],
	msg: '',
	code: 0
}

export function banner(state = initState,action){
	switch (action.type){

		case GET_BANNER:
			return { ...initState, ...action.payload ,redirectTo: ''};

	    case UPDATE_BANNER: 
			return {...initState, ...action.payload, redirectTo:'/edit'};
			
	    default:
	        return state;

	}

}
// ////////////////////
// create action
export function createGetBanner(payload) {
	return { type: GET_BANNER, payload }
}
export function createUpdateBanner(payload) {
	return { type: UPDATE_BANNER, payload }
}
// //////////////////////
// /////////////////////////
// 异步dispach
export function getBannerAsync() {

	return dispatch => (
		axios.get('/api/Banner').then((res) => {
			if (res.status === 200) {
				dispatch(createUpdateBanner(res.data))
			}
		})
	)
}


export function updateBannerAsync(banners,which,_id){
	console.log(banners);
    return dispatch => (
	         axios.post('/edit/updateBanner',{banners,which,_id}).then((res) => {
	              if(res.status === 200){
	              	dispatch(createUpdateBanner(res.data))
	              }
	         })
    )
}
// //////////////////////