import React from 'react';
import './step.less';

class Step extends React.Component {
		constructor(props){
			super(props);

			this.state={value:''}

			this.stepReduce = this.stepReduce.bind(this);
			this.inputChange = this.inputChange.bind(this);
		}

		stepReduce(index,e){
            this.props.onStepReduce(index);
		}

		inputChange(e){
			this.setState({
				value:e.target.value
			})
		}

		render () {

			let index = this.props.index;

			return (

				<div className="single_step">
		        	<label className="step_msg" htmlFor={'step_'+(index+1)}>步骤 {index + 1} :</label>
	        		<input name="step_text" className="step_text" id={'step_'+(index+1)} type="text" onChange = { this.inputChange }/>
	        		<div className="delete_step" onClick = {(e) => this.stepReduce(index,e)}>X</div>
				</div>

			)
		}

}

export default Step;