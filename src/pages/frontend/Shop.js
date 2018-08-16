import React from 'react';
import './Shop.less';



import { List, Carousel, WingBlank, SearchBar, Button, WhiteSpace } from 'antd-mobile';

import ShopItem from '../../component/frontend/ShopItem';
import Cart from '../../component/frontend/Cart';
import { connect } from 'react-redux';

import { getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync } from '../../redux/wine.redux.js';
@connect(
	state => state,
	{ getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync }
)


class Shop extends React.Component {
	
	constructor(props){
		super(props)
	}

    componentDidMount(){
		this.props.getWineListAsync();
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
					{/* <Carousel
						autoplay
						infinite
						beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						afterChange={index => console.log('slide to', index)}
						style={{ paddingTop: '50px', height: 'auto' }}
					>
						{this.props.banner.map(val => (
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
					</Carousel> */}
					
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

	],


	banner:[
		{
			"_id": "5b5a7b5552e7162afc98bc88",
			"banner_image": "http://www.legacy.com.tw/uploads/banner/82948278366846233585.jpg",
			"banner_link": "http://localhost:3000/drink/11",
			"__v": 0
		},


		{
			"_id": "5b5a7b5652e7162afc98bc89",
			"banner_image": "http://www.legacy.com.tw/uploads/banner/16619379388884103244.jpg",
			"banner_link": "http://localhost:3000/drink/11",
			"__v": 0
		},


		{
			"_id" : "5b5a7b5652e7162afc98bc8a",
			"banner_image" : "http://www.legacy.com.tw/uploads/banner/02085761131675905627.jpg",
			"banner_link" : "http://localhost:3000/drink/11",
			"__v" : 0
		}
	]
}













export default Shop;