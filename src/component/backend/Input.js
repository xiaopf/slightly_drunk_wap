import React from 'react';
import './Input.less';

class Input extends React.Component {
	constructor(props){
		super(props);

		this.input = React.createRef();
		this.handler = this.handler.bind(this);

	}

    handler(){
		this.props.change(this.input.current.files[0],this.props.index)
	}


	render () {
		return (
			<input className="inputB" onChange={this.handler} ref={this.input} type="file" />
		)
	}
}

export default Input;