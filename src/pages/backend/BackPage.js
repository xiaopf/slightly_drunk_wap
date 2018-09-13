import React from 'react';
import './BackPage.css';


import EditDrink from '../../component/backend/EditDrink';
import EditBanner from '../../component/backend/EditBanner';
import EditMaterial from '../../component/backend/EditMaterial';
import EditSingleDrink from '../../component/backend/EditSingleDrink';
import EditSingleMaterial from '../../component/backend/EditSingleMaterial';





import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'



class BackPage extends React.Component {

	render () {
		return ( 

			<BrowserRouter>
				<div>
					<ul className="back_nav">
						<li><NavLink activeClassName="selected" to="/edit/editIndexBanner">indexBanner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editShopBanner">shopBanner</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editDrink">鸡尾酒单</NavLink></li>
					   <li><NavLink activeClassName="selected" to="/edit/editMaterial">原料清单</NavLink></li>
					</ul>
				    
				    <div className="back_edit_area">
			
						<Switch>
							<Route exact path="/edit/editIndexBanner" component={EditBanner} />
					    	<Route exact path="/edit/editShopBanner" component={EditBanner}/>
					    	<Route path="/edit/editDrink" component={EditDrink}/>
							<Route path="/edit/editMaterial" component={EditMaterial}/>
							<Route path="/edit/drink/:id" component={EditSingleDrink}/>
							<Route path="/addDrink" component={EditSingleDrink} />
							<Route path="/edit/material/:id" component={EditSingleMaterial} />
							<Route path="/addMaterial" component={EditSingleMaterial}/>
						</Switch>			    	
				
				    </div>

				</div>
			</BrowserRouter> 



		)
	}
}

export default BackPage;