import React from 'react';
import './backPage.less';


import editDrinkList from '../component/editDrinkList';
import editFirst from '../component/editFirst';
import editStuffList from '../component/editStuffList';


import editWine from '../component/editWine';



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
					   <li><NavLink activeClassName="selected" to="/edit/editBanner">banner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editDrinkList">鸡尾酒单</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editStuffList">原料清单</NavLink></li>
					</ul>
				    
				    <div className="back_edit_area">
			
						<Switch>
					    	<Route exact path="/edit/editBanner" component={editFirst}/>
					    	<Route  path="/edit/editDrinkList" component={editDrinkList}/>
					    	<Route  path="/edit/editStuffList" component={editStuffList}/>
					    	<Route  path="/edit/:id" component={editWine}/>
					    	<Route  path="/addDrink" component={editWine}/>
						</Switch>			    	
				
				    </div>

				</div>
			</BrowserRouter> 



		)
	}
}

export default BackPage;