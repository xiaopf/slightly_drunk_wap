import React from 'react';
import './Cart.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWineListAsync } from '../../redux/wine.redux.js';

@connect(
	state => state,
	{  getWineListAsync }
)


class Cart extends React.Component {

	componentDidMount(){
		this.props.getWineListAsync();
	}
	render () {
		var num = 0;

		if (this.props.shop.userName) {

			for (let i = 0; i < this.props.shop.cart.length; i++) {
				num += this.props.shop.cart[i].num;
			}
		}else if(this.props.wine.userName){
			
			for(let i = 0 ; i < this.props.wine.cart.length ; i++){
				num += this.props.wine.cart[i].num;
			}

		}


		return (

				<Link to={'/shopCart'} className="cart fa fa-shopping-cart">
				    {num ? <p className="cartNum">{num}</p>:null}
				</Link>
	
			)
		}
}

export default Cart;