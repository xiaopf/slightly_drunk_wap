import React from 'react';
import './Detail.less';
import axios from 'axios';
import { connect } from 'react-redux';
import { getOneAsync } from '../../redux/list.redux.js';
import { NavBar, Icon , WhiteSpace } from 'antd-mobile';



@connect(
   state => state,
   { getOneAsync }
)







class Detail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			drink:{}
		}
	}

	componentDidMount(){

		let idx = this.props.match.params.id;
        let drink = this.props.resData.drinkList[idx];

        this.setState({
        	drink:drink
        })

		window.scrollTo(0,0);
	}

	goBack () {
		this.props.history.goBack()
	}





	render () {

		let drink = this.state.drink;
		return ( 
	

                 
				<div className="detail_wrap">
                     <NavBar className="head_navbar"
                       mode="light"
                       icon={<Icon type="left" />}
                       onLeftClick={() => this.goBack()}
                       rightContent={[,
                         <Icon key="1" type="ellipsis" />,
                       ]}
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
		 	               <p>{drink.describes}</p>
		              </div>
		              <WhiteSpace></WhiteSpace>
	                 <div className="detail_steps">
		                 <h2>操作步骤</h2>
		                 <p>{drink.describes}</p>
	                 </div>

				</div>



	
		)
	}
}

export default Detail;





