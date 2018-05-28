import React from 'react';
import axios from 'axios';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis'
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
                       <Link className="drink_img" to={`/${item.id}`}><img src={item.img_url} alt=""/></Link>
                       <div className="text_wrap">
            	           <p className="name">{item.name}</p>
            	           <p className="nameEng">{item.nameEng}</p>


            	           <LinesEllipsis className="describes"
            	             text={item.describes}
            	             maxLine='3'
            	             ellipsis='...'
            	             trimRight
            	             basedOn='letters'
            	           />

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