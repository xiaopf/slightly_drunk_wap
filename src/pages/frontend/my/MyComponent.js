import React from 'react';
import './MyComponent.less';

import {  NavBar, Icon, List,  WhiteSpace } from 'antd-mobile';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfoAsync } from '../../../redux/user.redux.js';
const Item = List.Item;
@connect(
	state => state,
	{ getUserInfoAsync }
)

class MyComponent extends React.Component {
	
	constructor(props){
		super(props);
		this.goBack=this.goBack.bind(this);
	}

	goBack() {
		this.props.history.goBack()
	}
	componentDidMount() {
		if (!this.props.sign.userName){
			this.props.getUserInfoAsync();
		}
	}


	render () {

		let path = this.props.match.path;

		let list = path === '/myMaterial' ? this.props.sign.own : this.props.sign.like;
		let prePath = path === '/myMaterial' ? '/wines/' : '/drink/';
		let title = path === '/myMaterial' ? '我的材料' : '我喜欢的';

		return ( 
			<div className="myXXWrap">
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>{title}</NavBar>


				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>	
				<List className="myXXContent">

				{
					list? 
					list.map((item)=>{
						if(typeof item === 'string'){
							return false
						}
						return (
							<Item key={item._id}>
								<Link className="myItemLink" to={`${prePath+item._id}`}>
									<div><img src={item.img_url[0] ? item.img_url[0] : item.img_url } alt='tp' /></div>
									<div>
										<h2>{item.name}</h2>
										<p>{item.describes}</p>
									</div>
								</Link>
							</Item>
						)
					}) 
					: null
				}				
				</List>	

			</div>

		)
	}
}












export default MyComponent;