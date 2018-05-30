import React from 'react';
import {List, InputItem, WhiteSpace, WingBlank,Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './signIn.less'


class SignIn extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
            <div>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
	            <p className="sign_in_title">登陆账号</p>
	            <WingBlank>
	            	<List>
	            	   <InputItem placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem type="password" placeholder="请输入密码">密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary">登陆</Button>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary"><Link style={{color:'#fff'}} to="/signup">立即注册</Link></Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;