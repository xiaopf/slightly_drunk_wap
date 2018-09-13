import React from 'react';
import './ShopSingle.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { countWineToCartAsync } from '../../redux/user.redux.js';

@connect(
	state => state,
	{ countWineToCartAsync }
)


class ShopSingle extends React.Component {
		constructor(props){
			super(props);
			this.buy = this.buy.bind(this)
		}


		buy(_id,price,e){
			let cart = this.props.sign.cart;

			if(!cart.some((c)=>(c._id === _id))){

                cart.push({_id,num:1,price})
			}else{

				for(let i = 0; i < cart.length ; i++){
					if (cart[i]._id === _id){
						cart[i].num++;
					}
				}

			}

			this.props.countWineToCartAsync({ cart })
			e.stopPropagation();
			e.preventDefault();
		}

		render () {
			
			let {good} = this.props;
			return (
				<div className="ShopSingleWrap" key={
					good._id
				}>
					< Link className="linkToDetail" to={ `/goods/${good._id}` }>
						<img className="wineImg" src={ good.img_url[0] } alt=""/>
						<p className="wineName">{good.name.split('（')[0]}</p>
						<p className="wineName">{good.name.split('（')[1].slice(0, -1)}</p>
					</Link >
					<p className="shopSingleFooter">
						<span>{`￥${good.price}元`}</span>
						<span onClick={e => this.buy(good._id, good.price, e)} className="fa fa-shopping-cart"></span>
					</p>
				</div>
			)
		}

}








export default ShopSingle;