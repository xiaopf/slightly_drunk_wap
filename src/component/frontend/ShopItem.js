import React from 'react';
import './ShopItem.less';
import { Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis'



class ShopItem extends React.Component {
		constructor(props){
			super(props);
			this.buy = this.buy.bind(this)
		}


		componentDidMount () {

		}

		buy(_id,e){
			console.log(_id);
			e.stopPropagation();
			e.preventDefault();
		}

		render () {
			
			let that = this;
			
			let Singles = this.props.wineList.map(function(wine,index){
				return (
					<div className="toDetail" key={
						wine._id
					}>
						< Link className="linkToDetail" to = {
							`/goods/${wine._id}`
						}>

						< img className = "wineImg"
						src = {
							
								wine.img_url
							
						}
						alt = "" / >

							<LinesEllipsis className="wineName"
								text = {
									wine.name
								}
								maxLine='3'
								ellipsis='...'
								trimRight
								basedOn='letters'
							/>
						</Link >
						<p className="shopItemFooter">
							<span>{`￥${wine.price}元`}</span>
							<span onClick = { e => that.buy('11',e) } className="fa fa-shopping-cart"></span>
						</p>
					</div>
				)
			})
			

			return (
				<React.Fragment>
					<div className = "shopItemTiteWrap" >
						< h2 className = "shopItemTite" > {this.props.catagory} </h2>
						< Link className = "linkToMore" to = { `/drink` }> 查看更多></Link>
					</div>
					<div className="singleWrap">
						{Singles}
						<div className="gapAdd">12</div>
					</div>
				</React.Fragment>
			)
		}

}








export default ShopItem;