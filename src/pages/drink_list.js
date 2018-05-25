import React from 'react';
import axios from 'axios';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './drink_list.less';
const Item = List.Item;




class Drink_list extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list_data:{}
		}
	}

	componentDidMount(){
	    axios.get('/list').then((res)=>{
	      if(res.status == 200){
	      	this.setState({
	      		list_data : res.data
	      	})
	      }
	    })
	}

	render () {


        let items = Object.values(this.state.list_data);


		let lists = items.map(function(item){
			return  <Item className="item" key = {item.id}>
                       <a className="drink_img" to={`/items/${item.id}`}><img src={item.img_url} alt=""/></a>
                       <div className="text_wrap">
            	           <p className="name">{item.name}</p>
            	           <p className="nameEng">{item.nameEng}</p>
            	           <p className="describes">{item.describes}</p>
                       </div>
					</Item>
		})

		return (
           <List>
			{lists}
           </List>
		)
	}
}

export default Drink_list;