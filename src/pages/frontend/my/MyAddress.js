import React from 'react';
import './MyAddress.less';

import { SwipeAction, List, WhiteSpace, InputItem, TextareaItem, Button, WingBlank, NavBar, Icon } from 'antd-mobile';

import { Link } from 'react-router-dom';
import browserCookies from 'browser-cookies';
import {connect} from 'react-redux';
import { changeUserInfoAsync, getUserInfoAsync } from '../../../redux/user.redux.js';

@connect(
	state => state,
	{ changeUserInfoAsync, getUserInfoAsync }
)
class MyAddress extends React.Component {
	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
		this.deleteAddr = this.deleteAddr.bind(this);
		this.chooseAddr = this.chooseAddr.bind(this);
	}

	
	componentDidMount (){

		let _id = browserCookies.get('userId')
		let that = this;
		if (!this.props.sign.userName) {

			(async function () {
				await that.props.getUserInfoAsync(_id);
				console.log(that.props)
				
			})();
		}
	}

	chooseAddr(index){
		this.props.changeUserInfoAsync({chooseAddr:Number(index)});
	}

	deleteAddr (index){
		console.log(index)



		let _id = browserCookies.get('userId')
		let that = this;
		if (this.props.sign.userName) {
			let address = this.props.sign.address;
			address.splice(index, 1);
			this.props.changeUserInfoAsync(address, 'addr');
			if (index === this.props.sign.chooseAddr) { this.props.changeUserInfoAsync({ chooseAddr: 0 }); }
		} else {

			(async function () {
				await that.props.getUserInfoAsync(_id);
				console.log(that.props)
				let address = that.props.sign.address;
				address.splice(index, 1);
				that.props.changeUserInfoAsync(address, 'addr');
				if (index === that.props.sign.chooseAddr) { that.props.changeUserInfoAsync({ chooseAddr: 0 }); }
			})();
		}
	}

	goBack() {
		this.props.history.goBack()
	}

	render () {


        let that = this;
		let addrs = this.props.sign.address.map(function (addr,index){
			return (

					<SwipeAction
					    className="swipeWrap"
					    key={addr.detail_addr} index={index}
						style={{ backgroundColor: 'gray' }}
						autoClose
						right={[
							{
								text: 'Delete',
								onPress: () => that.deleteAddr(index),
								style: { backgroundColor: '#F4333C', color: 'white' },
							},
						]}
					>

					<div className="add_wrap" onClick={() => that.chooseAddr(index)}>
							<div className="add_left">
								<p><span>{addr.receive_name}</span><span>{addr.receive_tel}</span></p>
								<p>{addr.address + addr.detail_addr}</p>
							</div>
							<Link className="fa fa-edit add_right" to={`/myAddress/addAddress/${index}`} ></Link>							
						</div>

					</SwipeAction>

			)
		})


		return ( 
            <div className="myAddressWrap">
				<WhiteSpace></WhiteSpace>	
				<WhiteSpace></WhiteSpace>	
				<WhiteSpace></WhiteSpace>	
				<WhiteSpace></WhiteSpace>	
				<WhiteSpace></WhiteSpace>	
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>我的地址</NavBar>
				<WhiteSpace></WhiteSpace>	
				

				{addrs}

				<WingBlank>
					<WhiteSpace></WhiteSpace>	
					<Link className="addAddress" to={'/myAddress/addAddress'}>添加收货地址</Link>
				</WingBlank>
			</div>


		)
	}
}


export default MyAddress;