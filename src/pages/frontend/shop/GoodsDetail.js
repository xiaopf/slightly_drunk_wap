import React from 'react';
import './GoodsDetail.css';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { getSingleWineAsync } from '../../../redux/wine.redux.js';

import { NavBar, Icon, WhiteSpace, Carousel, WingBlank} from 'antd-mobile';
import Cart from '../../../component/frontend/Cart';
import { getUserInfoAsync } from '../../../redux/user.redux.js';
import { countWineToCartAsync } from '../../../redux/user.redux.js';


@connect(
	state=>state,
	{ getSingleWineAsync, getUserInfoAsync, countWineToCartAsync }
)



class Detail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            path:''
		}

		this.buy = this.buy.bind(this);
		this.goBack = this.goBack.bind(this)
	}

	componentDidMount(){
		let _id = this.props.match.params.id;
		this.props.getSingleWineAsync(_id)
		this.props.getUserInfoAsync();

	}

	buy(_id, price) {
		let cart = this.props.sign.cart;

		if (!cart.some((c) => (c._id === _id))) {

			cart.push({ _id, num: 1, price })
		} else {

			for (let i = 0; i < cart.length; i++) {
				if (cart[i]._id === _id) {
					cart[i].num++;
				}
			}

		}

		this.props.countWineToCartAsync({ cart })
	}



	goBack () {
		this.props.history.goBack()
	}





	render () {


		return ( 
	

                 
				<div className="detailWrap">
					{this.state.path ? <Redirect to={this.state.path}></Redirect>:null}
					<NavBar
						mode="light"
						icon={<Icon type="left" />}
						onLeftClick={this.goBack}
						rightContent={
							<Cart></Cart>
						}
					>斯米诺红牌</NavBar>

					<WingBlank>
						<WhiteSpace></WhiteSpace>
						<WhiteSpace></WhiteSpace>
						<WhiteSpace></WhiteSpace>
						<WhiteSpace></WhiteSpace>
						<WhiteSpace></WhiteSpace>
					{this.props.wine.singleWine.name ? <Carousel
							autoplay={false}
							infinite

						>
						 {this.props.wine.singleWine.img_url.map(val => (
								<a
									key={val}
									href="http://www.alipay.com"
									style={{ display: 'inline-block', width: '100%' }}
								>
									<img
										src={val}
										alt=""
									style={{ width: '100%', verticalAlign: 'top' ,height:'auto'}}
	
									/>
								</a>
							)) }
						</Carousel> : null}
					</WingBlank>

				<p className="wine_name">{`${this.props.wine.singleWine.name} ${this.props.wine.singleWine.type} ${this.props.wine.singleWine.capacity}`}</p>
				<p className="wine_price">{`￥${this.props.wine.singleWine.price}元`}</p>
				<p className="wine_info">{ this.props.wine.singleWine.describes }</p>
				<div className="standard">
					<p>{`品牌：${this.props.wine.singleWine.name}`}</p>
                    <p>商品名称：灰雁伏特加</p>
					<p>商品编号：286080</p>
					<p>商品毛重：1.43kg</p>
					<p>商品产地：法国</p>
					<p>特性：轰趴推荐</p>
					<p>容量：750ml</p>
					<p>国产/进口：进口</p>
					<p>分类：伏特加包装：单瓶</p>
				</div>
				{this.props.wine.singleWine.name ? this.props.wine.singleWine.pics.map(function(val){
					return <img className="desPic" key={val} src={val} alt=""/>
				}):null}


					<div className="footerBuy">
					<p className="addToCart fa fa-shopping-cart" onClick={e => this.buy(this.props.wine.singleWine._id, this.props.wine.singleWine.price, '')} ></p>
						<p>加入购物车</p>
					<p className="buyActive" onClick={e => this.buy(this.props.wine.singleWine._id, this.props.wine.singleWine.price,'/shopCart', e)}>立即购买</p>
					</div>

				</div>



	
		)
	}
}

export default Detail;





