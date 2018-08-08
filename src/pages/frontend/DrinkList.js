import React from 'react';
import { List ,Carousel, WingBlank ,SearchBar, WhiteSpace} from 'antd-mobile';
import './DrinkList.less';
import { connect } from 'react-redux';
import { getDrinkListAsync, searchDrinkAsync, cancelSearchSync } from '../../redux/drink.redux.js';
import { getIndexBannerAsync } from '../../redux/banner.redux.js';
import ItemList from '../../component/frontend/ItemList';



@connect(
  state => state,
  { getDrinkListAsync, searchDrinkAsync, getIndexBannerAsync, cancelSearchSync }
)


class DrinkList extends React.Component {
	constructor(props){
		super(props);
    this.state={
      search:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  


  componentDidMount() {
    
    if (!this.props.drink.drinkList[0]) {
      this.props.getDrinkListAsync();
    }

    if (!this.props.banner.indexBannerList[0]) {
      this.props.getIndexBannerAsync();
    }

  }

  handleChange(value) {

    this.setState({
      search: value
    })

  }

  submit() {
    this.props.searchDrinkAsync(this.state.search, this.props.drink);
  }

  cancel() {
    this.setState({
      search: ''
    })
    this.props.cancelSearchSync(this.props.drink);
  }



	render () {

    const drinkList = this.props.drink.drinkList;
    const searchDrink = this.props.drink.searchDrink;
    const banners = this.props.banner.indexBannerList;

		return (
      <div className="drinkListWrap">

        <SearchBar 
          className="top_search"
          placeholder="搜索鸡尾酒" 
          maxLength={8} 
          value={this.state.search} 
          onChange={this.handleChange} 
          onSubmit={this.submit} 
          onCancel={this.cancel}
        />

        
        <WingBlank>
            
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>

          { this.props.drink.code === 4 ? <p className="unFindOut">{this.props.drink.msg}</p>:null}

          { this.props.drink.code === 6 ? <Carousel
              autoplay
              infinite
            >
              {banners.map(val => (
                <a
                  key={val}
                  href={val.banner_link}
                  style={{ display: 'inline-block', width: '100%' }}
                >
                  <img
                    src={val.banner_image}
                    alt=""
                    style={{ width: '100%' ,verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));

                    }}
                  />
                </a>
              ))}
            </Carousel> : null }

            <WhiteSpace></WhiteSpace>
            <List>
            <ItemList items={this.props.drink.code === 6 ? drinkList : searchDrink}></ItemList>  
            </List>
        </WingBlank>
      </div>
		)
	}
}

export default DrinkList;