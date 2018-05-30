import React from 'react';
import {List, InputItem, WhiteSpace, WingBlank,Button ,Icon} from 'antd-mobile';
import './signIn.less'


class SignIn extends React.Component {
	constructor (props) {
		super(props)
		this.goBack = this.goBack.bind(this);

	}

	goBack(){
		this.props.history.goBack();
	}

	render () {
		return (
            <div>

            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WingBlank>
	            <Icon type="left" size="lg" color="#108ee9" onClick = { this.goBack }></Icon>
            </WingBlank>
            
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
	            <p className="sign_in_title">注册账号</p>
	            <WingBlank>
	            	<List>
	            	   <InputItem placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem type="password" placeholder="请输入密码">密码</InputItem>
	            	   <InputItem type="password" placeholder="请再次输入密码">确认密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary">注册</Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;