import React from 'react';
import './GoodsDetail.less';
import axios from 'axios';


import { NavBar, Icon, WhiteSpace, Carousel, WingBlank} from 'antd-mobile';
import Cart from '../../component/frontend/Cart';






class Detail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,
		}

		this.buyTo = this.buyTo.bind();
		this.goBack = this.goBack.bind(this)
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);

	}

	goBack () {
		this.props.history.goBack()
	}

	buyTo() {
        console.log('buy buy')
	}



	render () {


		return ( 
	

                 
				<div className="detail_wrap">
					<NavBar
						mode="light"
						icon={<Icon type="left" />}
						onLeftClick={this.goBack}
						rightContent={[
							<Cart></Cart>
						]}
					>斯米诺红牌</NavBar>
					<WingBlank>
						<Carousel
							autoplay={false}
							infinite
							beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
							afterChange={index => console.log('slide to', index)}
						>
							{this.state.data.map(val => (
								<a
									key={val}
									href="http://www.alipay.com"
									style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
								>
									<img
										src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
										alt=""
										style={{ width: '100%', verticalAlign: 'top' }}
										onLoad={() => {
											// fire window resize event to change height
											window.dispatchEvent(new Event('resize'));
											this.setState({ imgHeight: 'auto' });
										}}
									/>
								</a>
							))}
						</Carousel>
					</WingBlank>

				    <p className="wine_name">绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml</p>
					<p className="wine_price">￥88</p>
				    <p className="wine_info">伏特加（俄语：Водка）是一种经蒸馏处理的酒精饮料。它是由水和经蒸馏净化的乙醇所合成的透明液体，通常会经多重蒸馏从而达到更纯更美味的效果，市面上品质较好的伏特加一般是经过三重蒸馏的。在蒸馏过程中除水和乙醇外亦会加入马铃薯、菜糖浆及黑麦或小麦，如果是制作有味道的伏特加更会加入适量的调味料。</p>

					<div className="footerBuy">
						<p className="addToCart fa fa-shopping-cart" onClick={e => this.buyTo('11', e)} ></p>
						<p>加入购物车</p>
						<p className="buyActive" onClick={e => this.buyTo('11', e)}>立即购买</p>
					</div>

				</div>



	
		)
	}
}

export default Detail;





