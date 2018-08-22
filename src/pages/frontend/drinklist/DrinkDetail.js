import React from 'react';
import './DrinkDetail.less';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getSingleDrinkAsync } from '../../../redux/drink.redux.js';
import { NavBar, Icon , WhiteSpace ,Grid} from 'antd-mobile';


@connect(
   state => state,
   { getSingleDrinkAsync }
)

class Detail extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			drink:{}
		}

		this.goBack = this.goBack.bind(this);
	}

	componentDidMount(){

		let idArr = this.props.match.params.id.split('_');
		let _id = idArr[0];
		// 有 bug！！！！！！！！！！！！！！！！！！！！！！！！！！！
		let index = idArr[1];
		let that = this;

		if (this.props.drink.drinkList[0]) {
			let drink = this.props.drink.drinkList[index];
			this.setState({
				drink:drink
			})
		} else {

			(async function waitData() {
				await that.props.getSingleDrinkAsync(_id);
				let drink = that.props.drink.singleDrink;
				that.setState({
					drink: drink
				})
			})();

		}

		window.scrollTo(0,0);
	}

	goBack () {
		this.props.history.goBack()
	}

	render () {


		

		return ( 
	      
				<div className="detail_wrap">
					{this.state.drink.drinkName ? 
					    
					<React.Fragment>
						
							<NavBar 
								className="head_navbar"
								mode="light"
								icon={<Icon type="left" />}
								onLeftClick={() => this.goBack()}
							>{this.state.drink.drinkName}</NavBar>

							<img className="detail_img" src={this.state.drink.img_url} alt=""/>

							<div className="detail_text_wrap">
								<p className="detail_name">{this.state.drink.drinkName}</p>
								<p className="detail_eng_name">{this.state.drink.engName}</p>
							</div>

							<WhiteSpace></WhiteSpace>

							<div className="detail_describe">
								<h2>鸡尾酒介绍</h2>
								<p>{this.state.drink.describes}</p>
							</div>

							<WhiteSpace></WhiteSpace>

							<div className="detail_stuffs">
								<h2>所需材料</h2>
								<div className="materialWrap">
									{this.state.drink.materials.map((material) => {
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
								{this.state.drink.steps.map((step, index) => <p key={step}>{(index+1) + '、' +step}</p>) }
							</div>
						</React.Fragment>
					:null}

				</div>



	
		)
	}
}

export default Detail;





