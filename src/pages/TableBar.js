import React, { Component } from 'react';
import './TableBar.css';


import { TabBar } from 'antd-mobile';



import DrinkList from './frontend/drinklist/DrinkList';
import Material from './frontend/material/Material';
import Shop from './frontend/shop/Shop';
import MyPage from './frontend/my/MyPage';

import { connect } from 'react-redux';
import { getUserInfoAsync } from '../redux/user.redux.js';


@connect(
  state => state,
  { getUserInfoAsync }
)

class TableBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'first'
    };
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount(){
    if (!this.props.sign.userName) {
      this.props.getUserInfoAsync();
    }
    let hash = this.props.history.location.hash;   
    if(hash){
      this.setState({
        selectedTab: hash.slice(1)
      });
    }
  }
  
  handlePress(turn){
    this.props.history.push(`#${turn}`)
    this.setState({
      selectedTab: turn,
    });
  }



  render() {

    return (
 
       <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
           {/* { this.props.resData.redirectTo ? <Redirect to={ this.props.resData.redirectTo }></Redirect> : null } */}
            
           <TabBar
             unselectedTintColor="#949494"
             tintColor="#e94f4f"
             barTintColor="white"
           >
             <TabBar.Item
               title="酒单"
               key="酒单"
               icon={<div style={{
                 width: '22px',
                 height: '22px',
                 background: 'url(/icon/list.png) center center /  21px 21px no-repeat' }}
               />
               }
               selectedIcon={<div style={{
                 width: '22px',
                 height: '22px',
                 background: 'url(/icon/list_active.png) center center /  21px 21px no-repeat' }}
               />
               }
               selected={this.state.selectedTab === 'first'}
               onPress={() => {this.handlePress('first')}}
               data-seed="logId"
             >
{/* 酒单首页 */}
            <DrinkList></DrinkList> 
            
             
             </TabBar.Item>
             
             <TabBar.Item
               icon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(/icon/material.png) center center /  21px 21px no-repeat' }}
                 />
               }
               selectedIcon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(/icon/material_active.png) center center /  21px 21px no-repeat' }}
                 />
               }
               title="清单"
               key="清单"
               selected={this.state.selectedTab === 'second'}
               onPress={() => { this.handlePress('second') }}
               data-seed="logId1"
             >

{/* 清单第二页 */}
            
            <Material></Material> 
            
             </TabBar.Item>


             <TabBar.Item
               icon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(/icon/shop.png) center center /  21px 21px no-repeat' }}
                 />
               }
               selectedIcon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(/icon/shop_active.png) center center /  21px 21px no-repeat' }}
                 />
               }
               title="商城"
               key="商城"
               selected={this.state.selectedTab === 'third'}
               onPress={() => { this.handlePress('third') }}
             >

{/* 商店第三页 */}
              < Shop ></Shop> 

             </TabBar.Item>
             <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/icon/mine.png) center center /  21px 21px no-repeat'
                  }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/icon/mine_active.png) center center /  21px 21px no-repeat'
                  }}
                  />
                }
               title="我的"
               key="我的"
               selected={this.state.selectedTab === 'fourth'}
               onPress={() => { this.handlePress('fourth') }}
             >
{/* 我的第四页 */}

             <MyPage></MyPage>

             </TabBar.Item>
           </TabBar>
          </div>

    );
  }
}

export default TableBar;
