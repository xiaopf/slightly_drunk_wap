import React from 'react';
import './CartItem.less';
import {Link} from 'react-router-dom';
import { WingBlank } from 'antd-mobile';




class CartItem extends React.Component {
		constructor(props){
			super(props);

			this.state={
				num:3
			}

			this.countPlus = this.countPlus.bind(this);
			this.countReduce = this.countReduce.bind(this);

		}


		countPlus(){
			console.log('++')
            this.setState((preState)=>({
				num:preState.num+1
			}))
		}

		countReduce(){
			console.log('--')
            this.setState((preState)=>({
				num:preState.num-1
			}))
		}



		render () {

			let { choose_id, count, wines } = this.props;

			let wine = wines[choose_id];

			return (
 


				
				<WingBlank className="cartItemWrap">
					<Link className="wine_img" to={''}><img src={'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg'}/></Link>
					<div className="text_wrap">
						<p>{wine.name}</p>
						<p>{`单价：￥${wine.price}`}</p>
					</div>
					<div className="countBtn">
						<p className = "myButton" onClick = {this.countPlus}>+</p>
						<p>{this.state.num}</p>
						<p className = "myButton" onClick = {this.countReduce}>-</p>
					</div>
				</WingBlank>

			)
		}

}

export default CartItem;