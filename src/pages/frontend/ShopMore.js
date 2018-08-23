import React from 'react';
import './ShopMore.less';



import { Grid, NavBar, Icon, SearchBar, Button, WhiteSpace } from 'antd-mobile';

import ShopSingle from '../../component/frontend/ShopSingle';
import Cart from '../../component/frontend/Cart';
import { connect } from 'react-redux';

import { getWineAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync } from '../../redux/wine.redux.js';
import { getBannerAsync } from '../../redux/banner.redux.js';
@connect(
	state => state,
	{ getWineAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync, getBannerAsync }
)


class Shop extends React.Component {
	
	constructor(props){
		super(props);
		this.goBack=this.goBack.bind(this);
	}

    componentDidMount(){
		this.props.getWineAsync();
		this.props.getBannerAsync();
	}

	goBack() {
		this.props.history.goBack()
	}

	render () {

        let type = this.props.match.params.id;
		return ( 
			<div className="shopMoreWrap">
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
					rightContent={
						<Cart></Cart>
					}
				>{this.props.match.params.id}</NavBar>


				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>	
				<div className="shopMoreContent">
						<Grid  data={this.props.wine.wineList.filter((wine)=>(wine.type === type))}
							   columnNum={2}
							   renderItem={dataItem => (
								   <ShopSingle key={dataItem._id} good={dataItem}></ShopSingle>
							)}
						/>
				</div>	

			</div>

		)
	}
}












export default Shop;