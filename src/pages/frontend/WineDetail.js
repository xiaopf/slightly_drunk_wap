import React from 'react';
import './WineDetail.less';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';

import { getWineListAsync} from '../../redux/wine.redux.js';
@connect(
	state => state,
	{ getWineListAsync}
)


class WineDetail extends React.Component {

	constructor(props){
		super(props);

		this.goBack = this.goBack.bind(this)
	}

	componentDidMount(){
		if (!this.props.wine.userName) {
			this.props.getWineListAsync();
		}
	}


	goBack () {
		this.props.history.goBack()
	}





	render () {

		let id = this.props.match.params.id;
		let drink = this.props.wine.wineList.filter((wine)=>(wine._id === id));
		console.log(drink)


		return ( 
                 <React.Fragment>
					{drink[0] ? <div className="wineDetailWrap">
									<WhiteSpace></WhiteSpace>
									<WhiteSpace></WhiteSpace>
									<WhiteSpace></WhiteSpace>
									<WhiteSpace></WhiteSpace>
									<WhiteSpace></WhiteSpace>
										<NavBar
											mode="light"
											icon={<Icon type="left" />}
											onLeftClick={this.goBack}
										>{drink[0].name}</NavBar>

										<img className="detail_img" src={drink[0].img_url} alt="" />
										<div className="detail_text_wrap">
											<p className="detail_name">{drink[0].name.split('（')[0]}</p>
											<p className="detail_eng_name">{drink[0].name.split('（')[1].slice(0, -1)}</p>
											<p className="detail_describes">{drink[0].describes}</p>
										</div>	

									</div>:null
					}
				</React.Fragment>

		// img_url
		// name
		// typeEn
		// type
		// price
		// from
		// stock
		// capacity
		// material
		// proof


	
		)
	}
}

export default WineDetail;





