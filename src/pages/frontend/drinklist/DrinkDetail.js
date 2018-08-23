import React from 'react';
import './DrinkDetail.less';
import {Link} from 'react-router-dom';
import { NavBar, Icon , WhiteSpace} from 'antd-mobile';

import { connect } from 'react-redux';
import { getSingleDrinkAsync } from '../../../redux/drink.redux.js';
@connect(
   state => state,
   { getSingleDrinkAsync}
)

class Detail extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount(){

		let id = this.props.match.params.id;
		if (!this.props.drink.drinkList[0]) {
			this.props.getSingleDrinkAsync(id);
		}
		window.scrollTo(0,0);
	}

	goBack () {
		this.props.history.goBack()
	}

	render () {
		let drink;
		let id = this.props.match.params.id;

		if (this.props.drink.drinkList[0]) {
			drink = this.props.drink.drinkList.filter((drink)=>(drink._id === id))[0];
		} else {
			drink = this.props.drink.singleDrink._id ? this.props.drink.singleDrink : undefined;
		}
		
		return ( 
	      
				<div className="detail_wrap">
					{drink ? 
					    
					<React.Fragment>
						
							<NavBar 
								className="head_navbar"
								mode="light"
								icon={<Icon type="left" />}
								onLeftClick={() => this.goBack()}
							>{drink.drinkName}</NavBar>

							<img className="detail_img" src={drink.img_url} alt=""/>

							<div className="detail_text_wrap">
								<p className="detail_name">{drink.drinkName}</p>
								<p className="detail_eng_name">{drink.engName}</p>
							</div>

							<WhiteSpace></WhiteSpace>

							<div className="detail_describe">
								<h2>鸡尾酒介绍</h2>
								<p>{drink.describes}</p>
							</div>

							<WhiteSpace></WhiteSpace>

							<div className="detail_stuffs">
								<h2>所需材料</h2>
								<div className="materialWrap">
									{drink.materials.map((material) => {
										return (
											<div className="materialItem" key={material.material_url}>
												<img src={material.material_url} alt="图片"/>
												<p >{material.material_name}</p>
											</div>
										)
									})}
								</div>
							</div>

							<WhiteSpace></WhiteSpace>

							<div className="detail_steps">
								<h2>操作步骤</h2>
								{drink.steps.map((step, index) => <p key={step}>{(index+1) + '、' +step}</p>) }
							</div>
						</React.Fragment>
					:null}

				</div>
	
		)
	}
}

export default Detail;





