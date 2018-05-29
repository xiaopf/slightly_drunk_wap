import React from 'react';
import axios from 'axios';
import { List } from 'antd-mobile';


import { Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis'
import './drink_list.less';




import { connect } from 'react-redux';
import { addNum, getDataAsync } from '../redux';

const Item = List.Item;


@connect(
  (state) => ({ listData : state }),
  { addNum, getDataAsync }
)






class Drink_list extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){

		

		this.props.getDataAsync();



	}

	render () {

		const listData = this.props.listData;

        let items = Object.values(listData);


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