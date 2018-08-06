import React from 'react';
import './WineDetail.less';
import axios from 'axios';
import { connect } from 'react-redux';

import { NavBar, Icon , WhiteSpace } from 'antd-mobile';









class WineDetail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			drink:{}
		}

		this.goBack = this.goBack.bind(this)
	}



	goBack () {
		this.props.history.goBack()
	}





	render () {

		let drink = this.state.drink;
		return ( 
	

                 
				<div className="wineDetailWrap">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
					<NavBar
						mode="light"
						icon={<Icon type="left" />}
						onLeftClick={this.goBack}
						rightContent={[
							<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
							<Icon key="1" type="ellipsis" />,
						]}
					>斯米诺红牌</NavBar>

					<img className="detail_img" src={'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'} alt="" />
					<div className="detail_text_wrap">
						<p className="detail_name">绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml</p>
						<p className="detail_eng_name">伏特加（俄语：Водка）是一种经蒸馏处理的酒精饮料。它是由水和经蒸馏净化的乙醇所合成的透明液体，</p>
					</div>	

				</div>



	
		)
	}
}

export default WineDetail;





