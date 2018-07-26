import axios from 'axios';

const UPDATA_BANNER = 'UPDATA_BANNER';



var initState = {
	code:0,
	banner:[]
}


export function banner(state = initState,action){
	switch (action.type){
	    case UPDATA_BANNER: 
		    return {...initState,...action.payload};
		break;

	    default:
	        return state;
	    break;

	}

}



export function createUpdateBanner(payload){
	return {type:UPDATA_BANNER ,payload}
}

export function createUpdateBannerAsync(banner){
	console.log(banner);
    return dispatch => (
	         axios.post('/edit/updateBanner',banner).then((res) => {
	              if(res.status == 200){
	              	console.log(res.data);
	              	createUpdateBanner(res.data)
	              }
	         })
    )
}