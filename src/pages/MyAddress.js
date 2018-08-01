import React from 'react';
import './MyAddress.less';

import { Picker, List, WhiteSpace, InputItem, TextareaItem, Button, WingBlank, NavBar, Icon } from 'antd-mobile';

import { Link } from 'react-router-dom';



class MyAddress extends React.Component {
	constructor(props){
		super(props);

	}

	
	componentDidMount (){
		console.log(this.props)
	}



	render () {





		let addrs = this.props.addrs.map(function (addr,index){
			return (
				<WingBlank className="add_wrap">
					
					<div className="add_left">
						<p><span>{addr.receive_name}</span><span>{addr.receive_tel}</span></p>
						<p>{addr.address + addr.detail_add}</p>
					</div>
					<Link className="fa fa-edit add_right" to={'/myAddress/addAddress'} ></Link>
				</WingBlank>
			)
		})


		return ( 
            <div>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => console.log('onLeftClick')}
					rightContent={[
						<Icon key="1" type="ellipsis" />,
					]}
				>我的收货地址</NavBar>
				<WhiteSpace></WhiteSpace>	
				
				{addrs}

				<WingBlank>
					<WhiteSpace></WhiteSpace>	
					<Link className="addAddress" to={'/myAddress/addAddress'}>添加收货地址</Link>
				</WingBlank>
			</div>


		)
	}
}

MyAddress.defaultProps = {
	addrs:[
		{
			receive_name:'xiaopf',
			receive_tel:'18522856492',
			address:'天津市 天津市 河西区',
			detail_add:'富力中心写字楼A座2006'
		}
	]
}

export default MyAddress;