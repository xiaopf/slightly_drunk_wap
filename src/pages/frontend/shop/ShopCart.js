import React from 'react';
import './ShopCart.css';
import CartItem from '../../../component/frontend/CartItem';

import {WhiteSpace,NavBar, Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeUserInfoAsync, getUserInfoAsync } from '../../../redux/user.redux.js';
import { getWineAsync } from '../../../redux/wine.redux.js';

@connect(
	state => state,
	{ changeUserInfoAsync, getUserInfoAsync, getWineAsync}
)

class ShopCart extends React.Component {
	constructor(props){
		super(props);
        this.state={
			calculate:0
		}
		this.payFor = this.payFor.bind(this)
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount(){
		if (!this.props.wine.wineList[0]) {
			this.props.getWineAsync();
		}

		
		if (!this.props.sign.userName) {

			this.props.getUserInfoAsync();
		}
	}
    
	payFor() {

	}

	goBack() {
		this.props.history.goBack()
	}

	render () {	
		let that = this;
        let CartItems = this.props.sign.userName ? this.props.sign.cart.map(function(cartWine,idx){

			let wineArr = that.props.wine.wineList.filter((wine)=> (wine._id === cartWine._id))

			return (
				<CartItem {...cartWine} singlewine={wineArr[0]} key={cartWine._id}></CartItem>
			)
		}) : null;


		let addrArea = this.props.sign.address[0] ? 
		
		<div>
				<p>{this.props.sign.address[this.props.sign.chooseAddr].receive_name + this.props.sign.address[this.props.sign.chooseAddr].receive_tel}</p>
				<p><span>{this.props.sign.address[this.props.sign.chooseAddr].address}</span><span>{this.props.sign.address[this.props.sign.chooseAddr].detail_addr}</span></p>
		</div> : '请添加地址';


		var calculate = 0;

		if (this.props.sign.userName && this.props.sign.cart[0]) {
			for (let i = 0; i < this.props.sign.cart.length; i++) {
				calculate += this.props.sign.cart[i].num * this.props.sign.cart[i].price;
			}
		}

		


		return ( 
			<div className="shopCartWrap">


				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>我的购物车</NavBar>

                
				<div className="shopCartContent">
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<div className='cart_address'>

						<Link to={'/address/myAddress'} className="toAddAddr">
							{addrArea}
						</Link>
																	
																	
					</div>


					<div className="cartItems">
						{CartItems}
					</div>
					<div className="calculate">
						<span>商品总计</span>
						<span>{calculate}</span>
					</div>

					<div className="footerPay">
						<p className="waitPay"><span className="span1">需要支付</span><span className="span2">{calculate}</span><span className="span1">元</span></p>
						<p className="payActive" onClick={this.payFor}>确认支付</p>
					</div>
				</div>


			</div>



		)
	}
}


export default ShopCart;