import React from 'react';
import './ShopCart.less';
import CartItem from '../../component/frontend/CartItem';


import {WhiteSpace,NavBar, Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';


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
    
	payFor() {

	}

	goBack() {
		this.props.history.goBack()
	}

	render () {

		let wines = this.props.wines;

        let CartItems = this.props.carts.map(function(cart,idx){
			return (
				<CartItem {...cart} wines={wines}></CartItem>
			)
		})

		


		return ( 
			<div>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>我的购物车</NavBar>
				<WhiteSpace></WhiteSpace>	


				<div className='cart_address'>
					<p>{this.props.addr.address + this.props.addr.detail_add}</p>
					<p><span>{this.props.addr.receive_name}</span><span>{this.props.addr.receive_tel}</span></p>
					<Link to={'/address/myAddress'} className="toAddAddr">请添加地址</Link>
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



		)
	}
}

ShopCart.defaultProps = {
	addr: 
		{
			receive_name: 'xiaopf',
			receive_tel: '18522856492',
			address: '天津市 天津市 河西区',
			detail_add: '富力中心写字楼A座2006'
		}
	,
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