import React from 'react';
import './detail.less';
import axios from 'axios';
import { connect } from 'react-redux';
import { createGetData , getDataAsync } from '../redux';
import { NavBar, Icon , WhiteSpace } from 'antd-mobile';


@connect(
   (state)=>({listData : state}),
   { createGetData , getDataAsync }
)







class Detail extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0,0);

		this.props.getDataAsync();
	}

	goBack () {
		this.props.history.goBack()
	}






	render () {

		let match=this.props.match.params;
		let drink = this.props.listData[`drink0`];

		return ( 
	

                 
				<div className="detail_wrap">
                     <NavBar className="head_navbar"
                       mode="light"
                       icon={<Icon type="left" />}
                       onLeftClick={() => this.goBack()}
                       rightContent={[,
                         <Icon key="1" type="ellipsis" />,
                       ]}
                     >{drink.name}</NavBar>



                    <img className="detail_img" src={drink.img_url} alt=""/>
                    <div className="detail_text_wrap">
                        <p className="detail_name">{drink.name}</p>
                        <p className="detail_eng_name">{drink.nameEng}</p>
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





