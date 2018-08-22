import React from 'react';
import './My.less';



import { Grid, NavBar, Icon, List, Button, WhiteSpace } from 'antd-mobile';
import { Link} from 'react-router-dom';
import ShopSingle from '../../component/frontend/ShopSingle';
import Cart from '../../component/frontend/Cart';
import { connect } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';
import { getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync } from '../../redux/wine.redux.js';
import { getBannerAsync } from '../../redux/banner.redux.js';
import { createSignOutAsync, getUserInfoAsync } from '../../redux/user.redux.js';
const Item = List.Item;
@connect(
	state => state,
	{ getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync, getBannerAsync, getUserInfoAsync }
)


class Shop extends React.Component {
	
	constructor(props){
		super(props);
		this.goBack=this.goBack.bind(this);
	}

    componentDidMount(){
		this.props.getWineListAsync();
		this.props.getBannerAsync();
		this.props.getUserInfoAsync();

		console.log(this.props)
	}

	goBack() {
		this.props.history.goBack()
	}

	render () {

		let path = this.props.match.path;
		console.log(path)
		let that = this;

		let list = path === '/myMaterial' ? this.props.sign.own : this.props.sign.like;
		let prePath = path === '/myMaterial' ? '/wines/' : '/drink/';
		let title = path === '/myMaterial' ? '我的材料' : '我喜欢的';

		console.log(this.props.sign.own)
		console.log(list)
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
						list? list.map((item)=>{
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
									}) : null
				}				
				</List>	

			</div>

		)
	}
}












export default Shop;