import React from 'react';
import './Cart.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWineAsync } from '../../redux/wine.redux.js';

@connect(
	state => state,
	{  getWineAsync }
)

class Cart extends React.Component {

	componentDidMount(){
		if (!this.props.wine.wineList[0]) {
			this.props.getWineAsync();
		}
	}
	render () {
		var num = 0;

		if (this.props.sign.userName && this.props.sign.cart[0]) {
			for (let i = 0; i < this.props.sign.cart.length; i++) {
				num += this.props.sign.cart[i].num;
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