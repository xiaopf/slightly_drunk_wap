import React from 'react';
import axios from 'axios';
import { WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';


import './myPage.less';





class MyPage extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render () {

		return (
			<div>
				<Link className="img_name" to="">
				   <img className="head_img" src="http://img1.mukewang.com/57e8a02700011bae06400640-100-100.jpg" alt=""/>
				   <p className="head_name">xiaopf</p>
				</Link>
				<WhiteSpace></WhiteSpace>

				<Link to=""></Link>
				<WhiteSpace></WhiteSpace>
				<Link to=""></Link>

			</div>

		)
	}
}

export default MyPage;