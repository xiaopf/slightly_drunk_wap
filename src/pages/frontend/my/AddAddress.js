import React from 'react';
import './AddAddress.less';

// import { Picker, List, WhiteSpace, InputItem, TextareaItem, Button, WingBlank, NavBar, Icon } from 'antd-mobile';
import { WhiteSpace, InputItem, TextareaItem, Button, WingBlank,NavBar,Icon} from 'antd-mobile';

import {createForm} from 'rc-form';

// import {district} from 'antd-mobile-demo-data';

import { changeUserInfoAsync, getUserInfoAsync } from '../../../redux/user.redux.js';
import {connect} from 'react-redux';
import browserCookies from 'browser-cookies';
// import { Redirect} from 'react-router-dom';

@connect(
	state => state,
	{ changeUserInfoAsync,getUserInfoAsync }
)
class AddAddress extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			receive_name: '',
			receive_tel: '',
			address: '',
			detail_addr: ''
		}
		this.goBack = this.goBack.bind(this);
		this.saveAddr = this.saveAddr.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

    componentDidMount(){
		let id = this.props.match.params.id;

		let _id = browserCookies.get('userId');
		let that = this;

		if(id >= 0){
			(async function () {
				await that.props.getUserInfoAsync(_id);
				let addr = that.props.sign.address[id]
				that.setState({
					receive_name: addr.receive_name,
					receive_tel: addr.receive_tel,
					address: addr.address,
					detail_addr: addr.detail_addr
				})
			})();
		}
	}


	goBack() {
		this.props.history.goBack()
	}

	handleChange(name, value) {
		this.setState({
			[name]: value
		});
	}


	saveAddr (){
		let id = this.props.match.params.id;
		let _id = browserCookies.get('userId')
		let that = this;
		if (this.props.sign.userName){
			let address = this.props.sign.address;
			
			if(id){
				address.splice(id,1,this.state);
			}else{
                address.push(this.state);
			}
			
			this.props.changeUserInfoAsync(address, 'addr');
		}else{
			
			(async function(){
				await that.props.getUserInfoAsync(_id);
				let address = that.props.sign.address;
				
				if(id){
					address.splice(id,1,that.state);
				}else{
                    address.push(that.state);
				}
				
				that.props.changeUserInfoAsync(address, 'addr');
			})();
		}

		this.props.history.goBack()
	}

	render() {
		const { getFieldProps } = this.props.form;
		return (


			<div className="addAddrWrap">
				<WhiteSpace></WhiteSpace>
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
						<Icon key="1" type="ellipsis" />,
					]}
				>编辑收货地址</NavBar>


				<WingBlank>
					<InputItem value={this.state.receive_name} name='receive_name' onChange={ value => this.handleChange('receive_name', value)} placeholder="请输入收件人姓名">收件人</InputItem>
					<InputItem value={this.state.receive_tel} name='receive_tel' onChange={ value => this.handleChange('receive_tel', value)} placeholder="请输入电话号码">电话</InputItem>

					{/* <Picker
						data={district}
						title="请选地区"
						{...getFieldProps('district', {
							initialValue: ['340000', '341500', '341502'],
						})}
						onOk={e => console.log('ok', e)}
						onDismiss={e => console.log('dismiss', e)}
					>
						<List.Item arrow="horizontal">地区</List.Item>
					</Picker> */}

					<TextareaItem
						value={this.state.detail_addr} name='detail_addr' onChange={value => this.handleChange('detail_addr', value)} 
						title="详细地址"
						placeholder="请输入详细地址"
						autoHeight
					/>
					<WhiteSpace></WhiteSpace>	
					<Button type="warning" onClick={this.saveAddr}>保存</Button>
				</WingBlank>
			</div>

		);
	}
}



AddAddress = createForm()(AddAddress);

export default AddAddress;