import React from 'react';
import './EditDrink.less';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Link } from 'react-router-dom';
import { deleteItemAsync, getDrinkAsync } from '../../redux/drink.redux.js'
import { connect } from 'react-redux';

@connect(
  state => state,
  { deleteItemAsync ,getDrinkAsync}
)


class EditDrink extends React.Component {
	constructor(props){
		super(props);
	    this.state={
	    	drinkList:[{
	    		    "_id":"",
		    		"steps" : [ 
		    		    [ 
		    		        ""
		    		    ]
		    		],
		    		"materials" : [ 
		    		    [ 
		    		        {
		    		            "stuff_img_local_url" : "",
		    		            "stuff_name" : "",
		    		            "stuff_url" : ""
		    		        }
		    		    ]
		    		],
		    		"img_url" : "https://img.tthunbohui.cn/zhuanti/20631/mainbg.png",
		    		"drinkName" : "",
		    		"engName" : "",
		    		"describes" : "",
	    	}]
	    }

	    this.deleteDrink = this.deleteDrink.bind(this)
	}
  
	componentDidMount(){
		
		let that = this;
		if (!this.props.drink.drinkList[0]) {
			(async function () {
				await that.props.getDrinkAsync();
				let drinkList = that.props.drink.drinkList;
				that.setState({
					drinkList: drinkList
				})
			})()
		}else{
			let drinkList = this.props.drink.drinkList;
			this.setState({
				drinkList: drinkList
			})
		}
	}



	deleteDrink (id,idx,e) {
       confirmAlert({
         title: '确认删除',
         message: '确认删除该款鸡尾酒么？',
         buttons: [
           {
             label: '确定',
             onClick: () => {
     	        let drinkList = this.state.drinkList;
     	        drinkList.splice(idx,1);
     			this.setState({
     				drinkList : drinkList
     			})
     			this.props.deleteItemAsync(id);
             }
           },
           {
             label: '取消',
             onClick: () => console.log("取消")
           }
         ]
       })
	}


	render () {
        let that = this;
        let body = this.state.drinkList.map(function(drink,idx){
            return (
	                <tr key={drink.drinkName}>
		            <td>{drink.drinkName}</td>
				    <td>{drink.engName}</td>
				    <td><img className="table_image" src={drink.img_url} alt="" /></td>

                    <td> 
						<Link className="edit_link" to={`/edit/drink/${drink._id}`}>编辑</Link> 
                        <button className="delete_drink" onClick = { e => that.deleteDrink(drink._id,idx,e) }>删除</button>
                    </td>
				</tr>
            )
        })         
             


		return (	
			<div>

				<Link className="add_link" to={`/addDrink`}>添加新鸡尾酒 +</Link> 

				<table className="table_d_list">
					<thead>
					<tr>
						<td>中文名</td>
						<td>英文名</td>
						<td>图片</td>
						<td>操作</td>
					</tr>
					</thead>
					<tbody>
						{body}
					</tbody>

				</table>   
			</div>	
		)
	}
}

export default EditDrink;