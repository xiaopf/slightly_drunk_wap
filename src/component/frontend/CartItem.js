import React from 'react';
import './CartItem.less';
import {Link} from 'react-router-dom';
import { WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { countWineToCartAsync } from '../../redux/user.redux.js';

@connect(
	state => state,
	{ countWineToCartAsync }
)

class CartItem extends React.Component {
		constructor(props){
			super(props);

			this.countPlus = this.countPlus.bind(this);
			this.countReduce = this.countReduce.bind(this);
		}


		countPlus(_id){
			let cart = this.props.sign.cart;
			
			for (let i = 0; i < cart.length; i++) {
				if (cart[i]._id === _id) {
					cart[i].num++;
				}
			}

			this.props.countWineToCartAsync({ cart })
		}

		countReduce(_id){
			let cart = this.props.sign.cart;

			for (let i = 0; i < cart.length; i++) {
				if (cart[i]._id === _id) {
					cart[i].num--;
					if (cart[i].num === 0 ){
						cart.splice(i, 1)
					}
				}
			}
			

			this.props.countWineToCartAsync({ cart })
		}



		render () {


			return (

				
				<WingBlank className="cartItemWrap">
					<Link className="wine_img" to={''}><img src={this.props.singlewine.img_url[0]} alt='tp'/></Link>
					<div className="text_wrap">
						<p>{this.props.singlewine.name}</p>
						<p>{`单价：￥${this.props.singlewine.price}`}</p>
					</div>
					<div className="countBtn">
						<p className="myButton" onClick={() => this.countPlus(this.props.singlewine._id)}>+</p>
						<p>{this.props.num}</p>
						<p className="myButton" onClick={() => this.countReduce(this.props.singlewine._id)}>-</p>
					</div>
				</WingBlank>

			)
		}

}

export default CartItem;