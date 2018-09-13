import React from 'react';
import './DrinkList.css';
import { List, Carousel, WingBlank, SearchBar, WhiteSpace, Range, Slider } from 'antd-mobile';

import { Redirect } from 'react-router-dom'


import { connect } from 'react-redux';
import { getDrinkAsync, searchDrinkAsync, cancelSearchSync } from '../../../redux/drink.redux.js';
import { getBannerAsync } from '../../../redux/banner.redux.js';

import ItemList from '../../../component/frontend/ItemList';

@connect(
  state => state,
  { getDrinkAsync, searchDrinkAsync, getBannerAsync, cancelSearchSync }
)

class DrinkList extends React.Component {
	constructor(props){
		super(props);
    this.state={
      search:'',
      slider:false,
      range:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.log = this.log.bind(this);
  }
  
  componentDidMount() {

    if (!this.props.drink.drinkList[0]) {
      this.props.getDrinkAsync();
    }
    if (!this.props.banner.indexBannerList[0]) {
      this.props.getBannerAsync();
    }
  }

  handleChange(value) {
    this.setState({
      search: value
    })
  }

  submit() {
    this.props.searchDrinkAsync(this.state.search);
  }

  cancel() {
    this.setState({
      search: ''
    })
    this.props.cancelSearchSync();
  }

  filter(slider,range){
    this.setState({
      slider: slider,
      range: range
    })
  }

  log(name){
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }


	render () {

    const drinkList = this.props.drink.drinkList;
    const searchDrink = this.props.drink.searchDrink;
    const banners = this.props.banner.indexBannerList;

		return (
      <div className="drinkListWrap">
        {this.state.range || this.state.slider ? <div className="mask"></div> : null }
        <SearchBar 
          className="top_search"
          placeholder="搜索鸡尾酒" 
          maxLength={10} 
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

          { this.props.drink.code === 404 ? <p className="unFindOut">{this.props.drink.msg}</p>:null}

          {this.props.banner.indexBannerList[0] && this.props.drink.code === 6 ? 
            <React.Fragment>
                <Carousel autoplay infinite>
                    {banners.map(val => (
                      <a
                        key={val}
                        href={val.banner_link}
                        style={{ display: 'inline-block', width: '100%' }}
                      >
                        <img
                          src={val.banner_image}
                          alt=""
                          style={{ width: '100%' ,verticalAlign: 'top' ,height:'200px'}}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));

                          }}
                        />
                      </a>
                    ))}
                </Carousel> 
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <div className="filterWrap">
                  <div className="filter">
                    <div onClick={() => this.filter(!this.state.slider, false)} style={this.state.slider ? { color: 'red' } : null}>酒精度</div>
                    <div onClick={() => this.filter(false, !this.state.range)} style={this.state.range ? { color: 'red' } : null}>口味</div>
                    <div onClick={() => this.filter(false, false)}>重置</div>
                  </div>
                  {this.state.range || this.state.slider ?
                    <div className="listFilter">
                      <WhiteSpace></WhiteSpace>
                      <WhiteSpace></WhiteSpace>
                      <WhiteSpace></WhiteSpace>
                      {this.state.slider ? <Slider
                        style={{ marginLeft: 30, marginRight: 30 }}
                        defaultValue={26}
                        min={0}
                        max={100}
                        step={2}
                        marks={{ 0: '淡', 50: '甜', 100: '重' }}
                        onChange={this.log('change')}
                        onAfterChange={this.log('afterChange')}
                      /> : null}

                      {this.state.range ? <Range
                        style={{ marginLeft: 30, marginRight: 30 }}
                        min={0}
                        max={60}
                        marks={{ 0: '0%', 15: '15%', 30: '30%', 45: '45%', 60: '60%' }}
                        defaultValue={[0, 40]}
                        onChange={this.log('change')}
                        onAfterChange={this.log('afterChange')}
                      /> : null}
                    </div> : null}

                </div>
                <WhiteSpace></WhiteSpace>
            
            </React.Fragment>
            : null }

            <List>
              { this.props.drink.code === 404 ? null : <ItemList items={this.props.drink.code === 6 ? drinkList : searchDrink}></ItemList>  }
            </List>
        </WingBlank>
      </div>
		)
	}
}

export default DrinkList;