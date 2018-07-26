import React from 'react';
import './editFirst.less';
import EditBanner from './editBanner';
import { createUpdateBannerAsync } from '../redux/banner.redux.js'
import { getDataAsync} from '../redux/list.redux.js';

import { connect } from 'react-redux';




@connect(
  state => state,
  { createUpdateBannerAsync,getDataAsync}
)







class EditFirst extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			banners : [{banner_link:'',banner_image:''}],
		};


		this.bannerPlus = this.bannerPlus.bind(this);
		this.onBannerReduce = this.onBannerReduce.bind(this);
		this.saveBanner = this.saveBanner.bind(this);
		this.handleBannerChange = this.handleBannerChange.bind(this);

	}

	componentDidMount(){
		if(!this.props.resData.drinkList[0]){
		  this.props.getDataAsync();
		} 

		let that = this;
		let timer = setInterval(function(){
			console.log("1");
			if(that.props.resData.code){
				let banners = that.props.resData.banners;
				that.setState({
					banners : banners
				})
			    clearInterval(timer);
			}
		},100);


	}

	

	bannerPlus () {
		let banners = this.state.banners;



		banners.push({banner_link:'',banner_image:''});



		this.setState({
			banners : banners
		})
	}

	onBannerReduce(index){
		let banners = this.state.banners;

		if(banners.length > 1){
			banners.splice(index,1);
			this.setState({
				banners : banners
			})
		}

	}

	saveBanner () {
		console.log(this.state);
		this.props.createUpdateBannerAsync(this.state)
	}
  
	handleBannerChange (index,name,value,str_len) {
		let banners = this.state.banners;

		banners[index][name.slice(0, str_len)] = value;
	}

	render () {
        
        let that = this;

        const bannerList  =  this.state.banners.map(function(banner,index){
                            return <EditBanner key={banner.banner_link  + index} index = {index} banner = {banner} onHandleBannerChange = {that.handleBannerChange} onBannerReduce = {that.onBannerReduce}></EditBanner>
			        	});


             

          

		return (
           <div className="edit_wrap">

                <div className="stuffs">
	                <p className="bTitle">编辑banner</p>
	                {bannerList}
	                <button className="add_input" onClick = { this.bannerPlus }>添加材料</button>
                </div>
                <button className="submit" onClick = { this.saveBanner }>确认提交</button>

           </div>
		)
	}
}

export default EditFirst;