import React from 'react';
import axios from 'axios';
import { WhiteSpace, Button , WingBlank , Modal, Result, Icon,Toast, NavBar} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';
import browserCookies from 'browser-cookies';

import { createSignOutAsync } from '../../redux/user.redux.js';
import { connect } from 'react-redux';



import './MyPage.less';


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
		const myImg = src => <img src={src} className="spe am-icon am-icon-lg" alt="" />;

		const ResultExample = () => (<div className="result-example">
		  <Result
		    img={myImg(this.props.userMsg.image || this.props.resData.image)}
		    title={this.props.userMsg.userName || this.props.resData.userName}
		  />
		</div>);



		return (
			<div className="myPage">

				{ this.props.userMsg.isSignIn ?  null  : <Redirect to={ this.props.userMsg.redirectTo }></Redirect>}

				<NavBar
				  mode="light"
				  icon={<Icon type="left" />}
				  onLeftClick={() => console.log('onLeftClick')}
				  rightContent={[
				    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
				    <Icon key="1" type="ellipsis" />,
				  ]}
				>NavBar</NavBar>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>

				<ResultExample></ResultExample>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="warning" onClick = { this.signOut }>退出登录</Button>
				</WingBlank>

				

			</div>

		)
	}
}

export default MyPage;