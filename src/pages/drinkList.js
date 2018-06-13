import React from 'react';
import axios from 'axios';
import { List } from 'antd-mobile';


import { Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis'
import './drinkList.less';

const Item = List.Item;



class DrinkList extends React.Component {
	constructor(props){
		super(props);
	}


	render () {

		const drinkList = this.props.drinkList;

    console.log(drinkList);

    let items = Object.values(drinkList);


		let lists = items.map(function(item){

			return  <Item className="item" key = {item.id}>
                       <Link className="drink_img" to={`/drink/${item.id}`}><img src={item.img_url} alt=""/></Link>
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

export default DrinkList;