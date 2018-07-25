import React from 'react';
import {List, InputItem, WhiteSpace, WingBlank,Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './signIn.less'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSignInAsync } from '../redux/user.redux.js';

@connect(
	state => state,
	{ createSignInAsync }
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
	}


    handleChange (name,value) {

    	this.setState({
    	  [name]: value
    	});

    }

    signIn () {
    	let { userName,password } = this.state;
    	this.props.createSignInAsync({ userName,password })
    }
   
	render () {
		return (
            <div>
            { this.props.userMsg.redirectTo ? <Redirect to={ this.props.userMsg.redirectTo }></Redirect> : null }
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
	            <p className="sign_in_title">登陆账号</p>
	            
	            { this.props.userMsg.msg ? <div className="signUp_msg am-wingblank am-wingblank-lg">{this.props.userMsg.msg }</div> : null }

	            <WhiteSpace></WhiteSpace>
	            <WingBlank>
	            	<List>
	            	   <InputItem name="userName" onChange = { v => this.handleChange('userName',v) } placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem name="password" onChange = { v => this.handleChange('password',v) } type="password" placeholder="请输入密码">密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary"  onClick = { this.signIn }>登陆</Button>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary"><Link style={{color:'#fff'}} to="/signup">立即注册</Link></Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;