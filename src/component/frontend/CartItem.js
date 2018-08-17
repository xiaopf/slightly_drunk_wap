import React from 'react';
import './CartItem.less';
import {Link} from 'react-router-dom';
import { WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { countWineToCartAsync } from '../../redux/shop.redux.js';

@connect(
	state => state,
	{ countWineToCartAsync }
)




class CartItem extends React.Component {
		constructor(props){
			super(props);

			this.state={
				num:3
			}

			this.countPlus = this.countPlus.bind(this);
			this.countReduce = this.countReduce.bind(this);

		}


		countPlus(_id){
			let cart = this.props.sign.cart;

			let index;
			let target = cart.filter((c, idx) => {
				index = idx;
				return c._id === _id;
			})



			target[0].num++;

			cart[index] = target[0];
			

			this.props.countWineToCartAsync({ cart })
		}

		countReduce(_id){
			let cart = this.props.sign.cart;

			let index;
			let target = cart.filter((c, idx) => {
				index = idx;
				return c._id === _id;
			})



			target[0].num--;
			
			if (target[0].num === 0 ){
				cart.splice(index,1)
			}else{
				cart[index] = target[0];
			}

			this.props.countWineToCartAsync({ cart })
		}



		render () {

			let { _id, num, singlewine } = this.props;
			console.log(singlewine)
			return (
 


				
				<WingBlank className="cartItemWrap">
					<Link className="wine_img" to={''}><img src={singlewine.img_url} alt='tp'/></Link>
					<div className="text_wrap">
						<p>{singlewine.name}</p>
						<p>{`单价：￥${singlewine.price}`}</p>
					</div>
					<div className="countBtn">
						<p className="myButton" onClick={() => this.countPlus(singlewine._id)}>+</p>
						<p>{num}</p>
						<p className="myButton" onClick={() => this.countReduce(singlewine._id)}>-</p>
					</div>
				</WingBlank>

			)
		}

}

export default CartItem;