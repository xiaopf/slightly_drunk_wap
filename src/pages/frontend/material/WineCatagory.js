import React from 'react';
import './WineCatagory.less';
import { Grid, NavBar, Icon,WhiteSpace} from 'antd-mobile';

import { connect } from 'react-redux';
import WineCatagoryItem from '../../../component/frontend/WineCatagoryItem';
import { changeWineInUserAsync, getUserInfoAsync} from '../../../redux/user.redux.js';
import { getWineAsync } from '../../../redux/wine.redux.js';	
@connect(
	state => state,
	{ getWineAsync, changeWineInUserAsync, getUserInfoAsync}
)


class WineCatagory extends React.Component {
	constructor(props){
		super(props);
		
		this.goBack = this.goBack.bind(this)
		this.toggleWineOwn = this.toggleWineOwn.bind(this)
	}

	componentDidMount(){
		
		if (!this.props.wine.wineList[0]){
			this.props.getWineAsync();
		}
		
	}

	goBack () {
		this.props.history.goBack()
	}

	toggleWineOwn(toggle,_id){


		let own = this.props.sign.own;
		


        if(!toggle){
			own.push(_id);
			this.props.changeWineInUserAsync({ own});
			// 每次更新own，因为数据库是引用的_id,所以每次更新完own之后，重新拉去sign数据，确保own是最新的，而不是_id格式的
			this.props.getUserInfoAsync();
		}else{
			let newOwn=[];
			for(let i = 0; i < own.length ; i ++){
				if(own[i]._id !== _id){
					newOwn.push(own[i]._id)
				}
			}
			this.props.changeWineInUserAsync({ own: newOwn });
			// 每次更新own，因为数据库是引用的_id,所以每次更新完own之后，重新拉去sign数据，确保own是最新的，而不是_id格式的
			this.props.getUserInfoAsync();

		}


	}

	render () {

		let id = this.props.match.params.id;

		return (
			<div className="wineCatagoryWrap">

				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>

				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
				>{id}</NavBar>

				<Grid data={this.props.wine.wineList.filter((item) => (item.type === id))}
					columnNum={2}
					renderItem={dataItem => (


						<WineCatagoryItem dataItem={dataItem} onToggleWineOwn={this.toggleWineOwn}></WineCatagoryItem>
						
					)}
				/>		


				



			</div>

		)
	}
}



export default WineCatagory;