import React from 'react';
import './WineCatagory.less';
import { Grid, NavBar, Icon,WhiteSpace} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import WineCatagoryItem from '../../../component/frontend/WineCatagoryItem';
import { getWineAsync, changeWineInUserAsync} from '../../../redux/wine.redux.js';
import { getUserInfoAsync} from '../../../redux/user.redux.js';
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
		
		if (!this.props.wine.userName){
			this.props.getWineAsync();
		}

		// if (!this.props.sign.userName) {
		// 	this.props.getUserInfoAsync();
		// }

		
	}

	goBack () {
		this.props.history.goBack()
	}

	toggleWineOwn(toggle,_id){


		let own = this.props.sign.own;

        if(!toggle){
			own.push(_id);
			this.props.changeWineInUserAsync({ own});
		}else{
			let newOwn = own.filter((o)=>(o!==_id))
			this.props.changeWineInUserAsync({ own: newOwn });
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