import React, { Component } from 'react';
import './index.css';

import {Redirect} from 'react-router-dom'
import { TabBar } from 'antd-mobile';


import DrinkList from './frontend/drinklist/DrinkList';
import Material from './frontend/material/Material';
import Shop from './frontend/Shop';
import MyPage from './frontend/MyPage';

import { connect } from 'react-redux';
import { getUserInfoAsync } from '../redux/user.redux.js';


@connect(
  state => state,
  { getUserInfoAsync }
)

class Index extends Component {

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
             tintColor="#33A3F4"
             barTintColor="white"
           >
             <TabBar.Item
               title="酒单"
               key="酒单"
               icon={<div style={{
                 width: '22px',
                 height: '22px',
                 background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
               />
               }
               selectedIcon={<div style={{
                 width: '22px',
                 height: '22px',
                 background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
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
                   background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                 />
               }
               selectedIcon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
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
                   background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                 />
               }
               selectedIcon={
                 <div style={{
                   width: '22px',
                   height: '22px',
                   background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                 />
               }
               title="商城"
               key="商城"
               selected={this.state.selectedTab === 'third'}
               onPress={() => { this.handlePress('third') }}
             >

{/* 商店第三页 */}
              {/* < Shop ></Shop>  */}

             </TabBar.Item>
             <TabBar.Item
               icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
               selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
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

export default Index;
