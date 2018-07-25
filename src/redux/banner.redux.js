import axios from 'axios';

const ADD_BANNER = 'ADD_BANNER';



var initState = {
	code:0,
	banner:[]
}


export function banner(state = initState,action){
	switch (action.type){
	    case ADD_BANNER: 
		    return {...state,...action.payload};
		break;

	    default:
	        return state;
	    break;

	}

}



export function createAddBanner(payload){
	return {type:ADD_BANNER ,payload}
}

export function createAddBannerAsync(banner){
    return dispatch => (
                         axios.post('/edit/addBanner',banner).then((res) => {
                              if(res.status == 200){
                              	createAddBanner(res.data)
                              }
                         })
    )
}