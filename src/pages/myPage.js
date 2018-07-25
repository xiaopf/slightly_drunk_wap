import React from 'react';
import axios from 'axios';
import { WhiteSpace, Button , WingBlank , Modal, Toast} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';
import browserCookies from 'browser-cookies';


import { createSignOutAsync } from '../redux/user.redux.js';
import { connect } from 'react-redux';



import './myPage.less';


@connect(
	state => state,
	{createSignOutAsync}
)


class MyPage extends React.Component {
	constructor(props){
		super(props);

		this.signOut = this.signOut.bind(this)


	}

	componentDidMount(){
      console.log(this.props)
	}

	signOut(){

		const alert = Modal.alert;
		alert('注销', '确认退出登录？', [
		  { text: '取消', onPress: () => console.log('取消') },
		  { text: '确定', onPress: () => {
             browserCookies.erase('userId');
             this.props.createSignOutAsync()
		  } },
		])
	}

	render () {

		return (
			<div>

				{ this.props.userMsg.isSignIn ?  null  : <Redirect to={ this.props.userMsg.redirectTo }></Redirect>}

				<Link className="img_name" to="">
				   <img className="head_img" src={this.props.userMsg.image} alt=""/>
				   <p className="head_name">{this.props.userMsg.userName}</p>
				</Link>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="warning" onClick = { this.signOut }>退出登录</Button>
				</WingBlank>

				

			</div>

		)
	}
}

export default MyPage;