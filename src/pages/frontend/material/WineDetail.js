import React from 'react';
import './WineDetail.css';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';

import { getWineAsync} from '../../../redux/wine.redux.js';
@connect(
	state => state,
	{ getWineAsync}
)


class WineDetail extends React.Component {

	constructor(props){
		super(props);

		this.goBack = this.goBack.bind(this)
	}

	componentDidMount(){
		if (!this.props.wine.wineList[0]) {
			this.props.getWineAsync();
		}
	}


	goBack () {
		this.props.history.goBack()
	}





	render () {

		let id = this.props.match.params.id;
		let drink = this.props.wine.wineList.filter((wine)=>(wine._id === id));

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

										<img className="detail_img" src={drink[0].img_url[0]} alt="" />
										<div className="detail_text_wrap">
											<p className="detail_name">{drink[0].name.split('（')[0]}</p>
											<p className="detail_eng_name">{drink[0].name.split('（')[1].slice(0, -1)}</p>
											<p className="detail_describes">{drink[0].describes}</p>
										</div>	

									</div>:null
					}
				</React.Fragment>



	
		)
	}
}

export default WineDetail;





