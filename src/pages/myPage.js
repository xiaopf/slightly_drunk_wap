import React from 'react';
import axios from 'axios';
import { WhiteSpace, Button , WingBlank , Modal, Toast} from 'antd-mobile';
import { Link } from 'react-router-dom';
import browserCookies from 'browser-cookies';






import './myPage.less';





class MyPage extends React.Component {
	constructor(props){
		super(props);

		this.signOut = this.signOut.bind(this)


	}

	componentDidMount(){

	}

	signOut(){

		const alert = Modal.alert;
		alert('注销', '确认退出登录？', [
		  { text: '取消', onPress: () => console.log('取消') },
		  { text: '确定', onPress: () => {
             browserCookies.erase('userId');
             window.location.href = window.location.href;
		  } },
		])
	}

	render () {

		return (
			<div>
				<Link className="img_name" to="">
				   <img className="head_img" src="http://img1.mukewang.com/57e8a02700011bae06400640-100-100.jpg" alt=""/>
				   <p className="head_name">xiaopf</p>
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