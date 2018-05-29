import React from 'react';
import {List, InputItem, WhiteSpace } from 'antd-mobile';

class Signin extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
           <div className = 'signin_wrap'>
              <p>注册账号</p>
              <InputItem

              ></InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem

              ></InputItem>
           </div>
		)
	}
}