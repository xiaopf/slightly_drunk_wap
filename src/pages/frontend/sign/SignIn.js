import React from 'react';
import {List, InputItem, WhiteSpace, WingBlank,Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './SignIn.less'
import browserCookies from 'browser-cookies';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInAsync } from '../../../redux/user.redux.js';

@connect(
	state => state,
	{ signInAsync }
)

class SignIn extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
            userName : '',
            password : ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.signIn = this.signIn.bind(this);
		this.goSignUp = this.goSignUp.bind(this);
	}


    handleChange (name,value) {

    	this.setState({
    	  [name]: value
    	});

    }

    signIn () {
    	let { userName,password } = this.state;
    	this.props.signInAsync({ userName,password })
	}
	
	goSignUp(){
		this.props.history.push('/signup')
	}
   
	render () {
		return (
            <div>
			{this.props.sign.isSignIn ? <Redirect to={ this.props.sign.redirectTo }></Redirect> : null }
			{browserCookies.get('userId')  ? <Redirect to="/index" ></Redirect> : null}
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
	            <p className="sign_in_title">登陆账号</p>
	            
	            { this.props.sign.warn ? <div className="signUp_msg am-wingblank am-wingblank-lg">{this.props.sign.warn }</div> : null }

	            <WhiteSpace></WhiteSpace>
	            <WingBlank>
	            	<List>
	            	   <InputItem clear name="userName" onChange = { v => this.handleChange('userName',v) } placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem clear name="password" onChange = { v => this.handleChange('password',v) } type="password" placeholder="请输入密码">密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary"  onClick = { this.signIn }>登陆</Button>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary" onClick={ this.goSignUp }>立即注册</Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;