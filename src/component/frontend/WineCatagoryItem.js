import React from 'react';
import './WineCatagoryItem.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfoAsync } from '../../redux/user.redux.js';

@connect(
	state => state,
	{ getUserInfoAsync }
)
class WineCatagoryItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
		}
		this.toggleWineOwn = this.toggleWineOwn.bind(this)
	}


	componentDidMount(){

		let that = this;

		if (!this.props.sign.userName) {
			console.log(11);
			(async function () {
				await that.props.getUserInfoAsync();
				let wine_id = that.props.dataItem._id;
				let own = that.props.sign.own;

				if (!own.find((item) => (item._id === wine_id))) {
					that.setState({
						toggle: false
					})
				} else {
					that.setState({
						toggle: true
					})
				}
			})()
		}else{
			let wine_id = this.props.dataItem._id;
			let own = that.props.sign.own;

			if (!own.find((item) => (item._id === wine_id))) {
				that.setState({
					toggle: false
				})
			} else {
				that.setState({
					toggle: true
				})
			}
		}

		
		

	
	}


	toggleWineOwn(_id) {

		let toggle = this.state.toggle;

		this.props.onToggleWineOwn(toggle,_id)

		this.setState({
			toggle: !toggle
		})


	}
	render () {
		
		return (
				<div style={{ padding: '12.5px', position: 'relative' }}>
					<p className="ownOrNot">{this.state.toggle ? '√' : ''}</p>
					<Link to={`/wines/${this.props.dataItem._id}`}>
						<img src={this.props.dataItem.img_url[0]} style={{ width: '90px', height: '90px' }} alt="123" />
					</Link>
					<div onClick={() => this.toggleWineOwn(this.props.dataItem._id)} style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
						<p className="name">{this.props.dataItem.name.split('（')[0]}</p>
						<p className="name">{this.props.dataItem.name.split('（')[1].slice(0, -1)}</p>
					</div>
				</div>
			)
		}
}

export default WineCatagoryItem;