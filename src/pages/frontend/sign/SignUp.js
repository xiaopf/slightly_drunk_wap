import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank,Button ,Icon } from 'antd-mobile';
import './SignUp.less';
import axios from 'axios';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpAsync } from  '../../../redux/user.redux.js';


@connect(
   state => state,
   {signUpAsync}
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
		this.handleChange = this.handleChange.bind(this);
		this.signUp = this.signUp.bind(this);

	}

	goBack(){
		this.props.history.goBack();
	}
    
    handleChange (name,value) {

    	this.setState({
    	  [name]: value
    	});
    }

    signUp () {
    	var {userName,password,comfirmPassword} = this.state;
    	this.props.signUpAsync({userName,password,comfirmPassword,image:''})
    }


	render () {
		return (
            <div>

            { this.props.sign.redirectTo ? <Redirect to={ this.props.sign.redirectTo }></Redirect> : null }

            { document.cookies ? <Redirect to={ this.props.sign.redirectTo }></Redirect> : null }

            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WingBlank>
	            <Icon type="left" size="lg" color="#108ee9" onClick = { this.goBack }></Icon>
            </WingBlank>
            
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
	            <p className="sign_in_title">注册账号</p>

	            { this.props.sign.msg ? <div className="signUp_msg am-wingblank am-wingblank-lg">{this.props.sign.msg }</div> : null }

	            <WhiteSpace></WhiteSpace>

	            <WingBlank>
	            	<List>
	            	   <InputItem name="userName" onChange = { v => this.handleChange('userName',v) } placeholder="请输入账户名">昵称</InputItem>
	            	   <InputItem name="password" onChange = { v => this.handleChange('password',v) } type="password" placeholder="请输入密码">密码</InputItem>
	            	   <InputItem name="comfirmPassword" onChange = { v => this.handleChange('comfirmPassword',v) } type="password" placeholder="请再次输入密码">确认密码</InputItem>
	            	</List>
	            	<WhiteSpace></WhiteSpace>
	            	<WhiteSpace></WhiteSpace>
	            	<Button type="primary" onClick = { this.signUp }>注册</Button>

	            </WingBlank>
            </div>

		)
	}
}

export default SignIn;