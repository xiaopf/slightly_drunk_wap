import React from 'react';
import './ShopItem.less';
import { Link } from 'react-router-dom';
import ShopSingle from './ShopSingle';

class ShopItem extends React.Component {

	render () {
		
		let that = this;
		
		let Singles = this.props.wineList.filter((wine) => (wine.type === this.props.catagory)).map(function(good,index){
			return (
				<ShopSingle key={good._id} good = {good}></ShopSingle>
			)
		})
		

		return (
			<React.Fragment>
				<div className = "shopItemTiteWrap" >
					< h2 className = "shopItemTite" > {this.props.catagory} </h2>
					< Link className="linkToMore" to={`/shopMore/${this.props.catagory}` }> 查看更多></Link>
				</div>
				<div className="singleWrap">
					{Singles}
					<div className="gapAdd">12</div>
				</div>
			</React.Fragment>
		)
	}
}


export default ShopItem;