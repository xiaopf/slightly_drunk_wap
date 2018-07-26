import React from 'react';
import './editDrinkList.less';

import { createUpdateBannerAsync } from '../redux/banner.redux.js'
import { getDataAsync} from '../redux/list.redux.js';

import { connect } from 'react-redux';




@connect(
  state => state,
  { createUpdateBannerAsync,getDataAsync}
)





class EditDrinkList extends React.Component {
	constructor(props){
		super(props);
    this.state={
    	drinkList:[{drinkName:''}]
    }
	}
  
	componentDidMount(){
		if(!this.props.resData.drinkList[0]){
		  this.props.getDataAsync();
		} 

		let that = this;
		let timer = setInterval(function(){
			console.log("2");
			if(that.props.resData.code){
				let drinkList = that.props.resData.drinkList;
				that.setState({
					drinkList : drinkList
				})
			    clearInterval(timer);
			}
		},100);


	}


	render () {
        



             

          

		return (	
			<div>
				<thead>
				  <tr>
				    <td></td>
				    <td></td>
				    <td></td>
				    <td></td>
				  </tr>
				</thead>
				<tbody>
				  <tr>
				    <td>{this.state.drinkList[0].drinkName}</td>
				    <td>{this.state.drinkList[0].drinkName}</td>
				    <td>{this.state.drinkList[0].drinkName}</td>
				    <td>{this.state.drinkList[0].drinkName}</td>
				  </tr>
				</tbody>

			</div>
			
		)
	}
}

export default EditDrinkList;