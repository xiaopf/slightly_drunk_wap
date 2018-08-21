import React from 'react';

import { Grid, SearchBar,WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
import './Material.less';
import WineCatagoryItem from '../../component/frontend/WineCatagoryItem';
import {connect} from 'react-redux';
import { getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync } from '../../redux/wine.redux.js';
import { getUserInfoAsync} from '../../redux/user.redux.js';
@connect(
	state => state,
	{ getWineListAsync, searchWineAsync, cancelSearchSync, changeWineInUserAsync, getUserInfoAsync}
)









class Material extends React.Component {

	constructor(props){
		super(props);
		this.state={
			search:''
		}

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.cancel = this.cancel.bind(this);
		this.toggleWineOwn = this.toggleWineOwn.bind(this)
  }
  

	componentDidMount(){
		this.props.getWineListAsync();
	}

	handleChange(value) {

		this.setState({
			search: value
		})

	}

	submit() {
		this.props.searchWineAsync(this.state.search);
	}

	cancel() {
		this.setState({
		search: ''
		})
		this.props.cancelSearchSync();
	}

	toggleWineOwn(toggle, _id) {


		let own = this.props.sign.own;

		if (!toggle) {
			own.push(_id);
			this.props.changeWineInUserAsync({ own });
			this.props.getUserInfoAsync();
		} else {
			let newOwn = own.filter((o) => (o !== _id))
			this.props.changeWineInUserAsync({ own: newOwn });
			this.props.getUserInfoAsync();
		}


	}


	render () {



		const grids = this.props.material.map((m,idx) => {
			return (
				<div key={m.catagory} className={m.cataNum === 2 ? 'twoItem' : ''}>
					<div className="sub-title"><span className="hLine"></span><span>{m.catagory}</span><span className="hLine"></span></div>
					<Grid data={m.wine_imgs}
						columnNum={m.cataNum}
							renderItem={dataItem => (
								<div style={{ padding: '12.5px' }}>
									<Link to={`/wine/catagory/${dataItem.cataName}`}>
										<img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
										<div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
											<p className="name">{dataItem.cataName}</p>
											<p className="name">{dataItem.cataNameEn}</p>
										</div>
									</Link>
								</div>
							)}
						/>			
				</div>		
							
			)
		});



		
		return (
			<div className="materialWrap">

				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>


				<SearchBar 
					placeholder="搜索器材"
					maxLength={8} 
					value={this.state.search}
					onChange={this.handleChange}
					onSubmit={this.submit}
					onCancel={this.cancel}
				/>

				{this.props.wine.code === 4 ? <p className="unFindOut">{this.props.wine.msg}</p> : null}

				{this.props.wine.code === 6 ? <div className="materialContent">{grids}</div> : null}


				{this.props.wine.code === 5 ? 

					<Grid data={this.props.wine.searchWine}
						columnNum={2}
						renderItem={dataItem => (


							<WineCatagoryItem dataItem={dataItem} onToggleWineOwn={this.toggleWineOwn}></WineCatagoryItem>

						)}
					/>		

				 : null}
                

				
			</div>

		)
	}
}


Material.defaultProps={
	material:[
		{
			catagory:'基酒类',
			cataNum:3,
			wine_imgs:[
				{ icon: '/wine/TB2YQU3yVGWBuNjy0FbXXb4sXXa_!!1740313238.jpg', cataNameEn: 'Gin', cataName: '金酒' },
				{ icon: '/wine/58881d96N21a7c967.jpg', cataNameEn: 'Vodka', cataName: '伏特加' },
				{ icon: '/wine/5438ec4bNb312de60.jpg', cataNameEn: 'Tequila', cataName: '龙舌兰' },
				{ icon: '/wine/591ab36dN83e31057.jpg', cataNameEn: 'Rum', cataName: '朗姆' },
				{ icon: '/wine/59c37d11N57ebf6b0.jpg', cataNameEn: 'Brandy', cataName: '白兰地' },
				{ icon: '/wine/rBEhVlHnU9EIAAAAAAE2r4wpw1oAABI_gJYRrIAATbH261.jpg', cataNameEn: 'Whiskey', cataName: '威士忌' }
			]
		},
		{
			catagory:'辅酒类',
			cataNum:3,
			wine_imgs: [
				{ icon:'/wine/5adf3fe3N317abf65.jpg' ,cataNameEn:'Liqueur',cataName:'利口酒'},
				{ icon:'/wine/5b39bb5dN2bcb1d6c.jpg' ,cataNameEn:'Aperitif',cataName:'开胃酒'},
				{ icon:'/wine/5ae2d0e5N0cb5c2be.jpg' ,cataNameEn:'Juice',cataName:'果汁'},
				{ icon:'/wine/5ab89285Ne880bc7f.jpg' ,cataNameEn:'Soft Drink',cataName:'软饮'},
				{ icon:'/wine/5836d574Na7930d89.jpg' ,cataNameEn:'Red Wine',cataName:'红酒'},
				{ icon:'/wine/5b35e41dN5fc3aa2e.jpg' ,cataNameEn:'Beer',cataName:'啤酒等'}
			]
		},
		{
			catagory: '配料及装饰',
			cataNum: 2,
			wine_imgs: [
				{ icon: '/wine/5ac2f5b0N53d6374a.jpg',cataNameEn:'Syrup',cataName:'糖浆' },
				{ icon: '/wine/582bc987N3a4b9f58.jpg',cataNameEn:'Fruits&Vegetables',cataName:'果蔬' },
				{ icon: '/wine/59f02165N504eaadb.jpg',cataNameEn:'Herbs&Spices',cataName:'香草' },
				{ icon: '/wine/59072c85N7552a5fc.jpg',cataNameEn:'Others Ingredients',cataName:'其他配料' }
				
			]
		},
		{
			catagory: '器具',
			cataNum: 3,
			wine_imgs: [
				{ icon: '/wine/5662a145N9b8d35b9.jpg',cataNameEn:'Glassware',cataName:'杯具' },
				{ icon: '/wine/566800b0N08b2f0d1.jpg',cataNameEn:'Tools',cataName:'工具' },
				{ icon: '/wine/559cbcb4N8d79d06e.jpg',cataNameEn:'Others',cataName:'其他工具' },


			]
		}
	]
}



export default Material;