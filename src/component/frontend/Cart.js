import React from 'react';
import './Cart.less';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
	render () {
		return (
				<Link to={'/shopCart'} className="cart fa fa-shopping-cart"></Link>
			)
		}
}

export default Cart;