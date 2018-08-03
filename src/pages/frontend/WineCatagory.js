import React from 'react';
import axios from 'axios';
import { Grid, NavBar,Icon} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';



import './WineCatagory.less';




class WineCatagory extends React.Component {
	constructor(props){
		super(props);

		this.goBack = this.goBack.bind(this)

	}

	componentDidMount(){

	}

	goBack () {
		this.props.history.goBack()
	}







	render () {



		const grids = this.props.material.map((m,idx) => {
			return (
					<div>
						<div className="sub-title">{m.catagory}</div>
						<Grid data={m.wine_imgs}
								columnNum={3}
								renderItem={dataItem => (
									<div style={{ padding: '12.5px' }}>
										<Link to={'/wines/1'}>
											<img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
											<div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
												<span>I am title..</span>
											</div>
										</Link>
									</div>
								)}
							/>		


					</div>		
							
			)
		});












		
		return (
			<div>



				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack}
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />,
					]}
				>斯米诺红牌</NavBar>

				


				{grids}



			</div>

		)
	}
}


WineCatagory.defaultProps={
	material:[
		{
			catagory:'伏特加',
			wine_imgs:[
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'}
			]
		},
		{
			catagory:'伏特加',
			wine_imgs: [
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'},
				{icon:'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg'}
			]
		},
		{
			catagory: '伏特加',
			wine_imgs: [
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' },
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' },
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' },
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' },
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' },
				{ icon: 'http://img10.360buyimg.com/n2/jfs/t18322/148/780824310/233317/b224032c/5aa7a156N38ea9c51.jpg' }
			]
		}
	]
}



export default WineCatagory;