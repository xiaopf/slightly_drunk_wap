import React from 'react';
import './Shop.less';



import { List, Carousel, WingBlank, SearchBar, Button, WhiteSpace } from 'antd-mobile';

import ShopItem from '../../component/frontend/ShopItem';
import Cart from '../../component/frontend/Cart';
import { connect } from 'react-redux';

import { getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync } from '../../redux/wine.redux.js';
import { getIndexBannerAsync } from '../../redux/banner.redux.js';
@connect(
	state => state,
	{ getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync, getIndexBannerAsync }
)


class Shop extends React.Component {
	
	constructor(props){
		super(props)
	}

    componentDidMount(){
		this.props.getWineListAsync();
		this.props.getIndexBannerAsync();
	}


	render () {
        let that = this;
		let ShopItems = this.props.wineCatagoryList.map(function (wineCatagory) {
			return (<ShopItem key={wineCatagory.catagory} catagory={wineCatagory.catagory} wineList = {that.props.wine.wineList}> </ShopItem>
			)
		})

		return ( 
			<div className="shopPage">
				<div className="searchWrap">
					<SearchBar placeholder="Search" maxLength={ 8 }/>
					<Cart></Cart>
				</div>

				<div className="shopContent">
					<Carousel
						autoplay
						infinite
						beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						afterChange={index => console.log('slide to', index)}
						style={{ paddingTop: '50px', height: 'auto' }}
					>
						{this.props.banner.indexBannerList.map(val => (
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
						))}
					</Carousel>
					
					{ShopItems}
				</div>
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