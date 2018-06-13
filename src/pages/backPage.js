import React from 'react';
import './backPage.less';

import EditWine from '../components/editWine';
import EditFirst from '../components/editFirst';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'



class BackPage extends React.Component {
	constructor(props){
		super(props);
	}





	render () {
		return ( 

			<Router>
				<div>
					<ul className="back_nav">
					   <li><NavLink activeClassName="selected" to="/edit/editBanner">编辑banner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editWine">添加数据</NavLink></li>
					</ul>
				    
				    <div className="back_edit_area">
				
					    	<Route exact path="/edit/editWine" component={EditWine}/>
					    	<Route path="/edit/editBanner" component={EditFirst}/>
				
				    </div>

				</div>
			</Router> 



		)
	}
}

export default BackPage;