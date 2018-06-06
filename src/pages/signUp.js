import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank,Button ,Icon } from 'antd-mobile';
import './signIn.less';
import axios from 'axios';

import { connect } from 'react-redux';
import { signUp, CreateSignUp } from  '../redux';


@connect(
   (state) => ({ userMsg : state }),
   { CreateSignUp }
)


class SignIn extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
            userName : '',
            password : '',
            comfirmPassword: ''
		}

		this.goBack = this.goBack.bind(this);
		this.sinUp = this.sinUp.bind(this);

	}

	goBack(){
		this.props.history.goBack();
	}
    
    sinUp () {

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
	            	   <InputItem onChange = { v => ()} placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem onChange = { v => ()} type="password" placeholder="请输入密码">密码</InputItem>
	            	   <InputItem onChange = { v => ()} type="password" placeholder="请再次输入密码">确认密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary" onClick = { this.sinUp }>注册</Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;