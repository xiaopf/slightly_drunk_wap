import React from 'react';
import './Shop.less';

import { Carousel, SearchBar, Grid, WhiteSpace} from 'antd-mobile';

import ShopItem from '../../../component/frontend/ShopItem';
import ShopSingle from '../../../component/frontend/ShopSingle';
import Cart from '../../../component/frontend/Cart';
import { Redirect } from 'react-router-dom'
import browserCookies from 'browser-cookies';

import { connect } from 'react-redux';

import { getWineAsync, searchWineAsync, cancelSearchSync } from '../../../redux/wine.redux.js';
import { getBannerAsync } from '../../../redux/banner.redux.js';

@connect(
	state => state,
	{ getWineAsync, searchWineAsync, cancelSearchSync, getBannerAsync }
)

class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.cancel = this.cancel.bind(this);
	}

    componentDidMount(){

		if (!this.props.wine.wineList[0]){
			this.props.getWineAsync();
		}
		
		if (!this.props.banner.shopBannerList[0]) {
			this.props.getBannerAsync();
		}
		
	}
	handleChange(value) {
		this.setState({
			search: value
		})
	}

	submit() {
		this.props.searchWineAsync(this.state.search);
	}

	cancel() {
		this.setState({
			search: ''
		})
		this.props.cancelSearchSync();
	}

	render () {
        let that = this;
		let ShopItems = this.props.wineCatagoryList.map(function (wineCatagory) {
			return (<ShopItem key={wineCatagory.catagory} catagory={wineCatagory.catagory} wineList = {that.props.wine.wineList}> </ShopItem>
			)
		})


			






		return ( 
			<div className="shopWrap">
				{ !browserCookies.get('userId') ? <Redirect to="/signin" ></Redirect> : null }
				<div className="searchWrap">
					<SearchBar
						className="top_search"
						placeholder="搜索鸡尾酒"
						maxLength={10}
						value={this.state.search}
						onChange={this.handleChange}
						onSubmit={this.submit}
						onCancel={this.cancel}
					/>
					<Cart></Cart>
				</div>

				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>

				{this.props.wine.code === 404 ? <p className="unFindOut">{this.props.wine.msg}</p> : null}

				{this.props.wine.code === 6 ? 
					<div className="shopContent">
						<Carousel
							autoplay
							infinite

							style={{ height: 'auto' }}
						>
							{this.props.banner.shopBannerList ?
								this.props.banner.shopBannerList.map(val => (
									<a
										key={val}
										href={val.banner_link}
										style={{ display: 'inline-block', width: '100%', height: '200px' }}
									>
										<img
											src={val.banner_image}
											alt=""
											style={{ width: '100%', height: '200px', verticalAlign: 'top' }}
											onLoad={() => {
												// fire window resize event to change height
												window.dispatchEvent(new Event('resize'));
												this.setState({ imgHeight: 'auto' });
											}}
										/>
									</a>
								))
								: null}

						</Carousel>

						{ShopItems}
					</div>			
				 : null}

				{this.props.wine.code === 5 ? 
					<Grid data={this.props.wine.searchWine}
						columnNum={2}
						renderItem={dataItem => (
							<ShopSingle key={dataItem._id} good={dataItem}></ShopSingle>
						)}
					/>
				 : null}

			</div>

		)
	}
}




Shop.defaultProps = {
	wineCatagoryList:[
		{
			catagory: '伏特加',
		},

		{
			catagory: '龙舌兰',
		},

		{
			catagory: '金酒',
		},
		{
			catagory: '白兰地',
		},
		{
			catagory: '朗姆',
		},
		{
			catagory: '威士忌',
		},
		{
			catagory: '力娇酒',
		},

	]
}













export default Shop;