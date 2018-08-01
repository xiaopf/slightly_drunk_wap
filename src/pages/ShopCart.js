import React from 'react';
import './ShopCart.less';





class ShopCart extends React.Component {
	constructor(props){
		super(props);

	}





	render () {
		return ( 

           <div>
			   
		   </div>


		)
	}
}

ShopCart.defaultProps = {
	addrs: [
		{
			receive_name: 'xiaopf',
			receive_tel: '18522856492',
			address: '天津市 天津市 河西区',
			detail_add: '富力中心写字楼A座2006'
		}
	],
	cart:[
		{
			choose_id:'001',
			count:3
		},
		{
			choose_id: '002',
			count: 3
		}
	],
	wines:{
		'001':{
			_id: '001',
			img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
			name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
			describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
			price: '69'
		},
		'002':{
			_id: '002',
			img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
			name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
			describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
			price: '69'
		}
	}
}

export default ShopCart;