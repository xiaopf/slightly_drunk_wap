import React from 'react';
import './detail.less';



import axios from 'axios';



class Detail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			list_data:{}
		}
	}

	componentDidMount(){
		window.scrollTo(0,0);

	    axios.get('/list').then((res)=>{
	      if(res.status == 200){
	      	this.setState({
	      		list_data : res.data
	      	})
	      }
	    })
	}




	render () {

		let match=this.props.match.params;

		let drink = this.state.list_data[`drink${match.item}`];

		console.log(drink);



		return ( 
			<div>


				<div className="detail_wrap">
	                 <div>
	                    <img className="detail_img" src={drink.img_url} alt=""/>
	                    <div className="detail_text_wrap">
	                        <p className="detail_name">{drink.name}</p>
	                        <p className="detail_eng_name">{drink.nameEng}</p>
	                    </div>
	                 </div>
	                 <div className="detail_describe">
		                 <h2>鸡尾酒介绍</h2>
		                 <p>{drink.describes}</p>
	                 </div>

		              <div className="detail_stuffs">
		 	               <h2>所需材料</h2>
		 	               <p>{drink.describes}</p>
		              </div>

	                 <div className="detail_steps">
		                 <h2>操作步骤</h2>
		                 <p>{drink.describes}</p>
	                 </div>

				</div>



			</div>
		)
	}
}

export default Detail;