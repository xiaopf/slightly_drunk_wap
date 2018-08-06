import React from 'react';
import './Shop.less';



import { List, Carousel, WingBlank, SearchBar, Button, WhiteSpace } from 'antd-mobile';

import ShopItem from '../../component/frontend/ShopItem';
import Cart from '../../component/frontend/Cart';

class Shop extends React.Component {
	
	constructor(props){
		super(props)
	}

	render () {

		let ShopItems = this.props.wineCatagoryList.map(function (wineCatagory, index) {
			return ( <
				ShopItem {...wineCatagory}> </ShopItem>
			)
		})

		return ( 
			<div className="shopPage">
				<div className="searchWrap">
					<SearchBar placeholder="Search" maxLength={ 8 }/>
					<Cart></Cart>
				</div>

				<Carousel
					autoplay
					infinite
					beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					afterChange={index => console.log('slide to', index)}
					style={{ paddingTop: '50px', height: '`${this.state.imgHeight + 50 }px`' }}
				>
					{this.props.banner.map(val => (
						<a
							key={val}
							href={val.banner_link}
							style={{ display: 'inline-block', width: '100%', height: '200px' }}
						>
							<img
								src={val.banner_image}
								alt=""
								style={{ width: '100%', height: '200px', verticalAlign: 'top' }}
								onLoad={() => {
									// fire window resize event to change height
									window.dispatchEvent(new Event('resize'));
									this.setState({ imgHeight: 'auto' });
								}}
							/>
						</a>
					))}
				</Carousel>
				
				{ShopItems}
			</div>

		)
	}
}




Shop.defaultProps = {
	wineCatagoryList:[
		{
			catagory: '伏特加',
			wineList: [
				{
					_id: '001',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '002',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '003',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '004',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '005',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				}, 
				{
					_id: '006',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				}, 
				{
					_id: '007',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '绝对伏特加 Absolut Vodka 洋酒 原味 伏特加 700ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				}
			]
		},

		{
			catagory: '龙舌兰',
			wineList: [
				{
					_id: '008',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '009',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '00310',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '0011',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '0012',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '0013',
					img_url: 'https://img13.360buyimg.com/n7/jfs/t14020/292/126349180/71620/1d33fc39/5a041fedNfdf32259.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '0014',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t6562/271/140957721/62361/cf69ac23/593a2594N1a46ef60.jpg',
					name: '豪帅快活 Jose Cuervo 洋酒 豪帅金 金标 墨西哥 龙舌兰酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				}
			]
		},

		{
			catagory: '伏特加',
			wineList: [
				{
					_id: '001',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '002',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '003',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '004',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '005',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '006',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				},
				{
					_id: '007',
					img_url: 'https://img12.360buyimg.com/n7/jfs/t5629/72/8963640492/30729/5b9cf997/597fdf98N5decb208.jpg',
					name: ' 百加得 Bacardi 洋酒 朗姆酒 白朗姆酒 750ml',
					describes: ' 绝对伏特加家族拥有口味丰富的一系列产品，除了以蓝色为标准的纯伏特加外，还有柑橘，覆盆莓，苹果梨，柠檬等多种口味。每一种口味都贴近自然，能激发出时尚派对的无限灵感',
					price: '69'
				}
			]
		},

	],


	banner:[
		{
			"_id": "5b5a7b5552e7162afc98bc88",
			"banner_image": "http://www.legacy.com.tw/uploads/banner/82948278366846233585.jpg",
			"banner_link": "http://localhost:3000/drink/11",
			"__v": 0
		},


		{
			"_id": "5b5a7b5652e7162afc98bc89",
			"banner_image": "http://www.legacy.com.tw/uploads/banner/16619379388884103244.jpg",
			"banner_link": "http://localhost:3000/drink/11",
			"__v": 0
		},


		{
			"_id" : "5b5a7b5652e7162afc98bc8a",
			"banner_image" : "http://www.legacy.com.tw/uploads/banner/02085761131675905627.jpg",
			"banner_link" : "http://localhost:3000/drink/11",
			"__v" : 0
		}
	]
}













export default Shop;