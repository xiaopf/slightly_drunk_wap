import React from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import './ItemList.less';
const Item = List.Item;

class ItemList extends React.Component {

	render () {

    let items = Object.values(this.props.items);

		let lists = items.map(function(item,index){
        return  <Item className="item" key = {item._id}>

                  <Link className="drink_img" to={`/drink/${item._id}`}>
                    <img src={item.img_url} alt=""/>
                  </Link>
                  
                  <div className="text_wrap">
                    <p className="name">{item.drinkName}</p>
                    <p className="nameEng">{item.engName}</p>

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
      <React.Fragment>
        {lists}
      </React.Fragment>
		)
	}
}

export default ItemList;