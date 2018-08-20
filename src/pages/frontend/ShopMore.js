import React from 'react';
import './ShopMore.less';



import { Grid, NavBar, Icon, SearchBar, Button, WhiteSpace } from 'antd-mobile';

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


		return ( 
			<div className="shopMoreWrap">

				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>{this.props.match.params.id}</NavBar>
					
				<div className="shopMoreContent">
						<Grid  data={this.props.wine.searchWine}
							   columnNum={2}
							   renderItem={dataItem => (


								<ShopItem></ShopItem>

							)}
						/>
				</div>	

			</div>

		)
	}
}












export default Shop;