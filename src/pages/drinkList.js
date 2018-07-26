import React from 'react';
import axios from 'axios';
import { List ,Carousel, WingBlank ,SearchBar, Button, WhiteSpace} from 'antd-mobile';


import { Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis'
import './drinkList.less';

const Item = List.Item;



class DrinkList extends React.Component {
	constructor(props){
		super(props);
    this.state={
      data: [],
      imgHeight: 176,
    }
	}

  componentDidMount() {
    let banners = this.props.banners;

    this.setState({
      data: banners,
    });

  }

	render () {

		const drinkList = this.props.drinkList;


    let items = Object.values(drinkList);


		let lists = items.map(function(item,index){

			return  <Item className="item" key = {item._id}>
                       <Link className="drink_img" to={`/drink/${index}/${item._id}`}><img src={item.img_url} alt=""/></Link>
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
      <div>
        <div className="top_search">
          <SearchBar placeholder="Search" maxLength={8} />
        </div>
        
        <WingBlank>
            <Carousel
              autoplay
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
              style={{paddingTop:'50px',height: '`${this.state.imgHeight + 50 }px`'}}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href={val.banner_link}
                  style={{ display: 'inline-block', width: '100%', height: `${this.state.imgHeight}px` }}
                >
                  <img
                    src={val.banner_image}
                    alt=""
                    style={{ width: '100%',height: `${this.state.imgHeight}px` ,verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <List>
        			{lists}
            </List>
        </WingBlank>
      </div>
		)
	}
}

export default DrinkList;