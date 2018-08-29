import React from 'react';
import './EditSingleMaterial.less';
import Upload from './Upload';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateItemAsync, addItemAsync, getWineAsync} from '../../redux/wine.redux.js';
import axios from 'axios';


@connect(
   state => state,
	{ updateItemAsync, addItemAsync, getWineAsync}
)

class EditSingleMaterial extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			"_id": "",
			"evaluate": [
				[
					{
						"fromUser": "",
						"content": ""
					}
				]
			],
			"img_url": [""],
			"name": "",
			"typeEn": "",
			"type": "",
			"price": 9999,
			"from": "",
			"stock": 0,
			"capacity": "",
			"material": "",
			"proof": "",
			"describes": "",
			"pics": [""],
			mainImgs:[],
			picImgs:[],
		};

		this.updateMain = this.updateMain.bind(this);
		this.updatePics = this.updatePics.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveData = this.saveData.bind(this);

	}

	componentDidMount() {

		if (this.props.match.path !== '/addDrink') {

			let that = this;
			let id = this.props.match.params.id;
			if (!this.props.drink.drinkList[0]) {
				(async function () {
					await that.props.getWineAsync();
					let wine = that.props.wine.wineList.filter((wine) => (wine._id === id))[0];
					that.setState({
						"_id": wine._id,
						"evaluate": wine.evaluate,
						"img_url": wine.img_url,
						"name": wine.name,
						"typeEn": wine.typeEn,
						"type": wine.type,
						"price": wine.price,
						"from": wine.from,
						"stock": wine.stock,
						"capacity": wine.capacity,
						"material": wine.material,
						"proof": wine.proof,
						"describes": wine.describes,
						"pics": wine.pics
					})
				})()
			} else {
				let wine = that.props.wine.wineList.filter((wine) => (wine._id === id))[0];
				this.setState({
					"_id": wine._id,
					"evaluate": wine.evaluate,
					"img_url": wine.img_url,
					"name": wine.name,
					"typeEn": wine.typeEn,
					"type": wine.type,
					"price": wine.price,
					"from": wine.from,
					"stock": wine.stock,
					"capacity": wine.capacity,
					"material": wine.material,
					"proof": wine.proof,
					"describes": wine.describes,
					"pics": wine.pics
				})
			}
		}
	}

	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]:value
		})
	}
	

	updateMain(data){
		  console.log(data)
		  data.imgs.map((img)=>{
              if(img.file.name){
				this.setState({
					mainImgs:data.imgs
				})
			  }
		  })


	}
	updatePics(data){
		  console.log(data)
		  data.imgs.map((img)=>{
              if(img.file.name){
				this.setState({
					picImgs:data.imgs
				})
			  }
		  })

		
	}

	saveData(){
		this.props.updateItemAsync(this.state);
	}
  

	render () {

		return (
			<div className="Materialwrap">
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">数据ID</label>
					<input name="name"  className=" name_input" value={this.state._id} type="text" />
				</div>
				<div className="singleWrap">
				    <label className="bTitle" htmlFor="">名字（包括英文）</label>
				    <input name="name" onChange={this.handleChange} className=" name_input" value={this.state.name} type="text"/>
                </div>
				<div>
				    <label className="bTitle" htmlFor="">主图</label>
				    {this.state.img_url[0]?<Upload update={this.updateMain} srcs={this.state.img_url}></Upload>:null}
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">类型</label>
					<input name="type" onChange = { this.handleChange } className=" type_input" value={this.state.type} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">类型英文</label>
					<input name="typeEn" onChange = { this.handleChange } className=" typeEn_input" value={this.state.typeEn} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">价格</label>
					<input name="price" onChange={this.handleChange} className=" price_input" value={this.state.price} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">产地</label>
					<input name="from" onChange = { this.handleChange } className=" from_input" value={this.state.from} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">库存</label>
					<input name="stock" onChange = { this.handleChange } className=" stock_input" value={this.state.stock} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">容量</label>
					<input name="capacity" onChange = { this.handleChange } className=" capacity_input" value={this.state.capacity} type="text"/>
				</div>
				<div className="singleWrap">

					<label className="bTitle" htmlFor="">原材料</label>
					<input name="material" onChange = { this.handleChange } className=" material_input" value={this.state.material} type="text"/>
				</div>
				<div className="singleWrap">
					<label className="bTitle" htmlFor="">度数</label>
					<input name="proof" onChange = { this.handleChange } className=" proof_input" value={this.state.proof} type="text"/>
				</div>
				<div>
					<label className="bTitle" htmlFor="describes">介绍</label>
					<textarea className="describes" onChange={this.handleChange} name="describes" id="describes" value={this.state.describes}></textarea>
				</div>
				<div>	
					<label className="bTitle" htmlFor="describes">图片说明</label>
					{this.state.pics[0]?<Upload update={this.updatePics} srcs={this.state.pics}></Upload>:null}
				</div>

				<button className="saveData" onClick={this.saveData}>保存</button>

			</div>

		)
	}
}

export default EditSingleMaterial;