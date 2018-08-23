import React from 'react';
import './EditBanner.less';
import EditBannerItem from './EditBannerItem';
import { connect } from 'react-redux';
import { getBannerAsync, updateBannerAsync} from '../../redux/banner.redux.js';

@connect(
  state => state,
	{ getBannerAsync, updateBannerAsync}
)

class EditBanner extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			banners: [{ banner_link: '', banner_image: '' }]
		};
		this.bannerPlus = this.bannerPlus.bind(this);
		this.onBannerReduce = this.onBannerReduce.bind(this);
		this.saveBanner = this.saveBanner.bind(this);
		this.handleBannerChange = this.handleBannerChange.bind(this);

	}

	componentDidMount(){

		let path = this.props.match.path;
		
		
		let that = this;
		if (!this.props.banner.indexBannerList[0]){  
          (async function(){
			  await that.props.getBannerAsync();
			  let bannerList = that.props.banner;
			  let banners = path === "/edit/editIndexBanner" ? bannerList.indexBannerList : bannerList.shopBannerList;
			  console.log(banners)
			  that.setState({
				  banners: banners
			  })
		  })()  
		} 
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
		let path = this.props.match.path === "/edit/editIndexBanner" ? "indexBannerList" : "shopBannerList";
		this.props.updateBannerAsync(this.state.banners, path,this.props.banner._id);
		this.props.history.goBack();
	}
  
	handleBannerChange (index,name,value,str_len) {
		let banners = this.state.banners;

		banners[index][name.slice(0, str_len)] = value;
	}

	render () {
        
		let that = this;
		let path = this.props.match.path;
		let bannerList = this.props.banner;
		let banners = path === "/edit/editIndexBanner" ? bannerList.indexBannerList : bannerList.shopBannerList;

		const bannerLists =  this.props.banner.indexBannerList[0] ?
							banners.map(function(banner,index){
								return  (<EditBannerItem 
													key={banner.banner_link  + index} 
													index = {index} banner = {banner} 
													onHandleBannerChange = {that.handleBannerChange} 
													onBannerReduce = {that.onBannerReduce}>
										</EditBannerItem>)
							}) 
							: null;

		return (
			<React.Fragment>
				<h2>{this.props.match.path.slice(10)}</h2>
				{this.props.banner.indexBannerList[0]? 
					<div className="editBannerWrap">

						<div className="stuffs">
							<p className="bTitle">编辑banner</p>
							{bannerLists}
							<button className="add_input" onClick = { this.bannerPlus }>添加材料</button>
						</div>
						<button className="submit" onClick = { this.saveBanner }>确认提交</button>

					</div> 
				: null}
		   </React.Fragment>
		)
	}
}

export default EditBanner;