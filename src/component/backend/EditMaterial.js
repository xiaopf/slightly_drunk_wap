import React from 'react';
import './EditMaterial.less';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Link } from 'react-router-dom';
import { deleteItemAsync, getWineAsync } from '../../redux/wine.redux.js'
import { connect } from 'react-redux';

@connect(
	state => state,
	{ deleteItemAsync, getWineAsync }
)

class EditMaterial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wineList: [{
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
			}]
		}

		this.deleteWine = this.deleteWine.bind(this)
	}

	componentDidMount() {

		let that = this;
		if (!this.props.wine.wineList[0]) {
			(async function () {
				await that.props.getWineAsync();
				let wineList = that.props.wine.wineList;
				that.setState({
					wineList: wineList
				})
			})()
		} else {
			let wineList = this.props.wine.wineList;
			this.setState({
				wineList: wineList
			})
		}
	}



	deleteWine(id, idx, e) {
		confirmAlert({
			title: '确认删除',
			message: '确认删除该款鸡尾酒么？',
			buttons: [
				{
					label: '确定',
					onClick: () => {
						let wineList = this.state.wineList;
						wineList.splice(idx, 1);
						this.setState({
							wineList: wineList
						})
						this.props.deleteItemAsync(id);
					}
				},
				{
					label: '取消',
					onClick: () => console.log("取消")
				}
			]
		})
	}


	render() {
		let that = this;
		let body = this.state.wineList.map(function (wine, idx) {
			return (
				<tr key={wine.name}>
					<td>{wine.name}</td>
					<td>{wine.type}</td>
					<td>{wine.proof}</td>
					<td><img className="table_image" src={wine.img_url[0]} alt="" /></td>

					<td>
						<Link className="edit_link" to={`/edit/material/${wine._id}`}>编辑</Link>
						<button className="delete_wine" onClick={e => that.deleteWine(wine._id, idx, e)}>删除</button>
					</td>
				</tr>
			)
		})



		return (
			<div>

				<Link className="add_link" to={`/addMaterial`}>添加新材料 +</Link>

				<table className="table_d_list">
					<thead>
						<tr>
							<td>名字</td>
							<td>类型</td>
							<td>度数</td>
							<td>图片</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						{body}
					</tbody>

				</table>
			</div>
		)
	}
}

export default EditMaterial;