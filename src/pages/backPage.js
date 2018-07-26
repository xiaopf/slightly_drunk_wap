import React from 'react';
import './backPage.less';


import editDrinkList from '../component/editDrinkList';

import editEditWine from '../component/editWine';
import editFirst from '../component/editFirst';




import {
  BrowserRouter,
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

			<BrowserRouter>
				<div>
					<ul className="back_nav">
					   <li><NavLink activeClassName="selected" to="/edit/editBanner">编辑banner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editDrinkList">添加数据</NavLink></li>
					</ul>
				    
				    <div className="back_edit_area">
				
					    	<Route exact path="/edit/editBanner" component={editFirst}/>
					    	<Route  path="/edit/editDrinkList" component={editDrinkList}/>
					    	
				
				    </div>

				</div>
			</BrowserRouter> 



		)
	}
}

export default BackPage;