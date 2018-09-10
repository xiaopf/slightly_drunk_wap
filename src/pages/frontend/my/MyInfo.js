import React from 'react';
import './MyInfo.less';

import { WhiteSpace, Button, ImagePicker, Icon, List, NavBar, Modal, Toast} from 'antd-mobile';

import { connect } from 'react-redux';
import { changeUserInfoAsync, changeUserImageAsync } from '../../../redux/user.redux.js';

import { Link } from 'react-router-dom';


const Item = List.Item;
const prompt = Modal.prompt;


@connect(
	state => state,
	{ changeUserInfoAsync , changeUserImageAsync }
)

class AddAddress extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [{
				url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
			}],
		}
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount () {

		let files = [{
			url: this.props.sign.image
		}];

		this.setState({
			files
		})
	}


	goBack() {
		this.props.history.goBack()
	}

   


	onChange = (files) => {
		
		files.shift();

		this.setState({
			files,
		});

		this.props.changeUserImageAsync ({image:files[0].url});
	}



	render() {

		const { files } = this.state;
		return (


			<div className="myInfoWrap">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>	
				<WhiteSpace></WhiteSpace>	
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>个人信息</NavBar>







				<List className="my-list">
					<Item extra={
							<ImagePicker
							className='infoImg'
							files={files}
							onChange={this.onChange}
							selectable={true}
						/>}
					>
					
					<Link to={'/'}>修改头像</Link></Item>

					<Button onClick={() => prompt(
						'新昵称',
						'请输入新的昵称',
						userName => { 
							Toast.info('修改成功！', 1);
							this.props.changeUserInfoAsync({userName})
						},
						'text',
						this.props.sign.userName

					)}

					><Item className="fontColor" extra={'>'}>修改昵称</Item></Button>


					<Button onClick={() => prompt(
						'新密码',
						'请输入新的密码',
						password => { 
							Toast.info('修改成功！', 1);
							this.props.changeUserInfoAsync({password})
						},
						'secure-text',
					)}
					
					><Item className="fontColor" extra={'>'}>修改密码</Item></Button>

				</List>
				<WhiteSpace></WhiteSpace>

				<List className="my-list">
					<Item extra={'>'}><Link to={'/address/myAddress'}>我的地址</Link></Item>
				</List>

			</div>

		);
	}
}


export default AddAddress;