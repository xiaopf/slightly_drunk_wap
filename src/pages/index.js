import React, { Component } from 'react';
import './index.css';

import {Redirect} from 'react-router-dom'
import { TabBar } from 'antd-mobile';


import DrinkList from './frontend/DrinkList';
import Material from './frontend/Material';
import Shop from './frontend/Shop';
import MyPage from './frontend/MyPage';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      showList:false
    };
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
               selected={this.state.selectedTab === 'blueTab'}
               badge={1}
               onPress={() => {
                 this.setState({
                   selectedTab: 'blueTab',
                 });
               }}
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
               badge={'new'}
               selected={this.state.selectedTab === 'redTab'}
               onPress={() => {
                 this.setState({
                   selectedTab: 'redTab',
                 });
               }}
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
               dot
               selected={this.state.selectedTab === 'greenTab'}
               onPress={() => {
                 this.setState({
                   selectedTab: 'greenTab',
                 });
               }}
             >

{/* 商店第三页 */}
              < Shop ></Shop> 

             </TabBar.Item>
             <TabBar.Item
               icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
               selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
               title="我的"
               key="我的"
               selected={this.state.selectedTab === 'yellowTab'}
               onPress={() => {
                 this.setState({
                   selectedTab: 'yellowTab',
                 });
               }}
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
