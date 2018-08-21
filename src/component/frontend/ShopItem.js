import React from 'react';
import './ShopItem.less';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { countWineToCartAsync } from '../../redux/shop.redux.js';
import ShopSingle from './ShopSingle';
@connect(
	state => state,
	{ countWineToCartAsync }
)



class ShopItem extends React.Component {
		constructor(props){
			super(props);
			this.buy = this.buy.bind(this)
		}


		componentDidMount () {

		}

		buy(_id,price,e){
			let cart = this.props.sign.cart;

			console.log(cart.some((c) => (c._id === _id)))

			if(!cart.some((c)=>(c._id === _id))){

                cart.push({_id,num:1,price})
			}else{


				let index;
                let target = cart.filter((c,idx)=>{
					index = idx;
					return c._id === _id; 
				})

				console.log(target)

				target[0].num ++;

				cart[index] = target[0];
			}

			this.props.countWineToCartAsync({ cart })
			e.stopPropagation();
			e.preventDefault();
		}

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