import axios from 'axios';

const UPDATE_BANNER = 'UPDATE_BANNER';



var initState = {
	code:0,
	msg:'',
	banners:[],
}


export function banner(state = initState,action){
	switch (action.type){
	    case UPDATE_BANNER: 
		    return {...initState,...action.payload,redirectTo:'/editWine'};
		break;

	    default:
	        return state;
	    break;

	}

}



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