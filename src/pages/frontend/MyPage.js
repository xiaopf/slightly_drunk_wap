import React from 'react';
import axios from 'axios';
import { WhiteSpace, Button, WingBlank, Modal, Result, Icon, List, NavBar} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';
import browserCookies from 'browser-cookies';

import { createSignOutAsync, getUserInfoAsync} from '../../redux/user.redux.js';
import { connect } from 'react-redux';



import './MyPage.less';

const Item = List.Item;

@connect(
	state => state,
	{ createSignOutAsync, getUserInfoAsync}
)


class MyPage extends React.Component {
	constructor(props){
		super(props);

		this.signOut = this.signOut.bind(this)
		this.entering = this.entering.bind(this)

	}

	componentDidMount(){

		let _id = browserCookies.get('userId')

		if (_id && !this.props.sign.userName){
			this.props.getUserInfoAsync(_id);
		}
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


	entering(){
		axios.post('/entering').then(function (res) {
			if (res.status === 200) {
				console.log(res.data)
			}
		})
	}










	render () {
		const myImg = src => <img src={src} className="spe am-icon am-icon-lg" alt="" />;

		const ResultExample = () => (
				<Link to={'/myInfo'} className="result-example">
					<Result
						img={myImg(this.props.sign.image || this.props.drink.image)}
						title={this.props.sign.userName || this.props.drink.userName}
					/>
				</Link>
		);



		return (
			<div className="myPageWrap">

				{!this.props.sign.isSignIn ? <Redirect to={this.props.sign.redirectTo}></Redirect> : null}

				<NavBar
				  mode="light"
				  rightContent={[
				    <Icon key="1" type="ellipsis" />,
				  ]}
				>我的</NavBar>

                <div className="myContent">


				
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>

					<ResultExample></ResultExample>
					<WhiteSpace></WhiteSpace>

					<List className="my-list">
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>邀请好友</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的订单</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>优惠礼包</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>邀请好友</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的订单</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>优惠礼包</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>邀请好友</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的订单</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>优惠礼包</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>邀请好友</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的订单</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>优惠礼包</Link></Item>
					</List>

					<WhiteSpace></WhiteSpace>

					<List className="my-list">
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的作品</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我喜欢的</Link></Item>
						<Item extra={'>'} className="fa fa-heart-o"><Link to={'/'}>我的材料</Link></Item>

					</List>

					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>
					<WhiteSpace></WhiteSpace>


					<WingBlank>
						<Button type="warning" onClick={this.signOut}>退出登录</Button>
						<WhiteSpace></WhiteSpace>
						<Button type="primary" onClick = { this.entering }>录入数据</Button>
					</WingBlank>

				</div>

			</div>

		)
	}
}

export default MyPage;