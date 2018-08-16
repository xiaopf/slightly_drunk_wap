import React from 'react';
import './ShopCart.less';
import CartItem from '../../component/frontend/CartItem';

import browserCookies from 'browser-cookies';
import {WhiteSpace,NavBar, Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeUserInfoAsync, getUserInfoAsync } from '../../redux/user.redux.js';

@connect(
	state => state,
	{ changeUserInfoAsync, getUserInfoAsync }
)

class ShopCart extends React.Component {
	constructor(props){
		super(props);
        this.state={
			calculate:0,
			money:0
		}
		this.payFor = this.payFor.bind(this)
		this.goBack = this.goBack.bind(this);
	}

	// componentDidMount(){

	// }
    
	payFor() {

	}

	goBack() {
		this.props.history.goBack()
	}

	render () {

		let wines = this.props.wines;


		let _id = browserCookies.get('userId')
		let that = this;
		// let chooseAddr;

		if (!this.props.sign.userName) {
			(async function () {
				await that.props.getUserInfoAsync(_id);
				// chooseAddr = this.props.sign.chooseAddr;
			})();
		}else{
			// chooseAddr = this.props.sign.chooseAddr;
		}



        let CartItems = this.props.carts.map(function(cart,idx){
			return (
				<CartItem {...cart} wines={wines} key={cart.choose_id}></CartItem>
			)
		})


		let addrArea = this.props.sign.address[0] ? 
		<div>
				<p>{this.props.sign.address[this.props.sign.chooseAddr].receive_name + this.props.sign.address[this.props.sign.chooseAddr].receive_tel}</p>
				<p><span>{this.props.sign.address[this.props.sign.chooseAddr].address}</span><span>{this.props.sign.address[this.props.sign.chooseAddr].detail_addr}</span></p>
		</div> : '请添加地址';

		


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
					<div className="calculate"><span>商品总计</span><span>{this.state.calculate}</span></div>

					<div className="footerPay">
						<p className="waitPay"><span>需要支付</span><span>{this.state.money}</span></p>
						<p className="payActive" onClick={this.payFor}>确认支付</p>
					</div>
				</div>


			</div>



		)
	}
}

ShopCart.defaultProps = {

	carts:[
		{
			choose_id:'001',
			count:3
		},
		{
			choose_id: '002',
			count: 3
		}
	],
	wines:{
		'001':{
			_id: '001',
			img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
			name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
			describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
			price: '69'
		},
		'002':{
			_id: '002',
			img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
			name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
			describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
			price: '69'
		}
	}
}

export default ShopCart;