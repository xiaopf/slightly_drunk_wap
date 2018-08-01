import React from 'react';
import './AddAddress.less';

import {Picker, List, WhiteSpace, InputItem, TextareaItem, Button, WingBlank,NavBar,Icon} from 'antd-mobile';

import {createForm} from 'rc-form';

import {district,provinceLite} from 'antd-mobile-demo-data';


class AddAddress extends React.Component {

	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
	}


	goBack() {
		this.props.history.goBack()
	}

	render() {
		const { getFieldProps } = this.props.form;
		return (


			<div className="addAddWrap">
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
					rightContent={[
						<Icon key="1" type="ellipsis" />,
					]}
				>编辑收货地址</NavBar>


				<WingBlank>
					<InputItem name="userName" placeholder="请输入收件人姓名">收件人</InputItem>
					<InputItem name="password" type="password" placeholder="请输入电话号码">电话</InputItem>

					<Picker extra="请选择(可选)"
						data={district}
						title="请选地区"
						{...getFieldProps('district', {
							initialValue: ['340000', '341500', '341502'],
						})}
						onOk={e => console.log('ok', e)}
						onDismiss={e => console.log('dismiss', e)}
					>
						<List.Item arrow="horizontal">地区</List.Item>
					</Picker>

					<TextareaItem
						title="详细地址"
						placeholder="请输入详细地址"
						autoHeight
					/>
					<WhiteSpace></WhiteSpace>	
					<Button type="warning" onClick={this.signOut}>保存</Button>
				</WingBlank>
			</div>

		);
	}
}



AddAddress = createForm()(AddAddress);

export default AddAddress;