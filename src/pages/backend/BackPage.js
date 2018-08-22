import React from 'react';
import './BackPage.less';


import EditDrinkList from '../../component/backend/EditDrinkList';
import EditFirst from '../../component/backend/EditFirst';
import EditStuffList from '../../component/backend/EditStuffList';
import EditWine from '../../component/backend/EditWine';



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
						<li><NavLink activeClassName="selected" to="/edit/editIndexBanner">indexBanner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editShopBanner">shopBanner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editDrinkList">鸡尾酒单</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editStuffList">原料清单</NavLink></li>
					</ul>
				    
				    <div className="back_edit_area">
			
						<Switch>
							<Route exact path="/edit/editIndexBanner" component={EditFirst} />
					    	<Route exact path="/edit/editShopBanner" component={EditFirst}/>
					    	<Route  path="/edit/editDrinkList" component={EditDrinkList}/>
					    	<Route  path="/edit/editStuffList" component={EditStuffList}/>
					    	<Route  path="/edit/:id" component={EditWine}/>
					    	<Route  path="/addDrink" component={EditWine}/>
						</Switch>			    	
				
				    </div>

				</div>
			</BrowserRouter> 



		)
	}
}

export default BackPage;