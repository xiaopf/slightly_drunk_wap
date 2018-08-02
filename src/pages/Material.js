import React from 'react';
import axios from 'axios';
import { Grid, SearchBar} from 'antd-mobile';
import { Link , Redirect} from 'react-router-dom';



import './Material.less';




class Material extends React.Component {
	constructor(props){
		super(props);



	}

	componentDidMount(){

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
									<img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
									<div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
										<span>I am title..</span>
									</div>
								</div>
							)}
						/>
										
					</div>		
							
			)
		});












		
		return (
			<div>



				<SearchBar placeholder="Search" maxLength={8} />

				


				{grids}



			</div>

		)
	}
}


Material.defaultProps={
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



export default Material;