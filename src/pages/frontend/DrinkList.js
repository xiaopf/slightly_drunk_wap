import React from 'react';
import { List ,Carousel, WingBlank ,SearchBar, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import './DrinkList.less';
import { connect } from 'react-redux';
import { getDrinkListAsync , searchDrinkAsync } from '../../redux/drink.redux.js';
import { getIndexBannerAsync } from '../../redux/banner.redux.js';
const Item = List.Item;


@connect(
  state => state,
  { getDrinkListAsync, searchDrinkAsync, getIndexBannerAsync }
)


class DrinkList extends React.Component {
	constructor(props){
		super(props);
    this.state={
      data: [],
      imgHeight: 176,
      search:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  handleChange(value) {

     this.setState({
       search: value
     })
  
  }

  submit () {
    this.props.searchDrinkAsync(this.state.search);
  }

  componentDidMount() {
    
    if (!this.props.drink.drinkList[0]) {
      this.props.getDrinkListAsync();
    }

    if (!this.props.banner.indexBannerList[0]) {
      this.props.getIndexBannerAsync();
    }

  }

	render () {

    const drinkList = this.props.drink.drinkList;
    const banners = this.props.banner.indexBannerList;


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
          <SearchBar placeholder="搜索鸡尾酒" maxLength={8} value={this.state.search} onChange={this.handleChange} onSubmit={this.submit} />
        </div>
        
        <WingBlank>
            <Carousel
              autoplay
              infinite
              style={{paddingTop:'50px',height: '`${this.state.imgHeight + 50 }px`'}}
            >
              {banners.map(val => (
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