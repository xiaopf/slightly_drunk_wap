import React from 'react';
import './editFirst.less';
import EditBanner from './editBanner';
import { createAddBannerAsync } from '../redux/banner.redux.js'
import { connect } from 'react-redux';


@connect(
	state => state,
	{createAddBannerAsync}
)



class EditWine extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			banner : [{banner_img_url:'',banner_link:'',banner_text:''}],
		};


		this.bannerPlus = this.bannerPlus.bind(this);
		this.onBannerReduce = this.onBannerReduce.bind(this);
		this.saveBanner = this.saveBanner.bind(this);
		this.handleBannerChange = this.handleBannerChange.bind(this);

	}

	

	bannerPlus () {
		let banner = this.state.banner;



		banner.push({banner_img_url:'',banner_link:'',banner_text:''});



		this.setState({
			banner : banner
		})
	}

	onBannerReduce(index){
		let banner = this.state.banner;

		if(banner.length > 1){
			banner.splice(index,1);
			this.setState({
				banner : banner
			})
		}

	}

	saveBanner () {
		this.props.createAddBannerAsync(this.state)
	}
  
	handleBannerChange (index,name,value,str_len) {
		let banner = this.state.banner;

		banner[index][name.slice(0, str_len)] = value;
	}

	render () {
        
        let that = this;


        const banners  =  this.state.banner.map(function(banner,index){
                            return <EditBanner key={banner.banner_link + banner.banner_text + index} index = {index} banner = {banner} onHandleBannerChange = {that.handleBannerChange} onBannerReduce = {that.onBannerReduce}></EditBanner>
			        	});


             

          

		return (
           <div className="edit_wrap">

                <div className="stuffs">
	                <p className="bTitle">编辑banner</p>
	                {banners}
	                <button className="add_input" onClick = { this.bannerPlus }>添加材料</button>
                </div>
                <button className="submit" onClick = { this.saveBanner }>确认提交</button>

           </div>
		)
	}
}

export default EditWine;